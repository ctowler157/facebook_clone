class Api::FriendRequestsController < ApplicationController
	def show
		# fix these when you know what the params will actually be
		@request = FriendRequest.includes(:sender, :target).find_by(
			sender_id: params[:id], target_id: current_user.id
			) || FriendRequest.includes(:sender, :target).find_by(
			sender_id: current_user.id, target_id: params[:id]
			)
		if @request
			render :show
		else
			render :json => { id: "NO REQUEST" }
		end
	end

	def index
		@requests = current_user.pending_requests
		# render list of pending_requests
		render :index
	end

	def create
		@request = current_user.sent_requests.new(request_params)

		if @request.save
			render :show
		else
			render :json => @request.errors.full_messages
		end
	end

	def destroy
		@request = FriendRequest.find(params[:id])
		@request.destroy
		render :json => { id: @request.id }
	end

	def update
		@request = FriendRequest.find(params[:id])
		if @request.update(request_params)
      target = User.find(@request.target_id)
      sender_id = @request.sender_id

			if @request.accepted
				# create friendships
				friendship = Friendship.new(
					user_id: @request.sender_id,
					friend_id: @request.target_id
				)
				corresponding_friendship = Friendship.new(
					user_id: @request.target_id,
					friend_id: @request.sender_id,
				)
				Friendship.transaction do
						friendship.save!
						corresponding_friendship.save!
				end
				if friendship.persisted?
					@request.destroy!
					render :json => {
            id: target.id,
            first_name: target.first_name,
            last_name: target.last_name,
            friendshipId: friendship.id,

            new_friend_id: sender_id,
          }
				else
					render :json => { message: "Friendship failed to create" }
				end
			else
				@request.destroy!
        render :json => {
          id: target.id,
          first_name: target.first_name,
          last_name: target.last_name,
          friendshipId: "no friendship",

          new_friend_id: sender_id
        }
			end
		else
			render :json => @request.errors.full_messages
		end
	end

	private

	def request_params
		params.require(:request).permit(:sender_id, :target_id, :accepted)
	end
end
