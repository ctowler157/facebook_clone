class Api::FriendRequestsController < ApplicationController
	def show
		# fix these when you know what the params will actually be
		@request = FriendRequest.find_by(
			sender_id: params[:id], target_id: current_user.id
			) || FriendRequest.find_by(
			sender_id: current_user.id, target_id: params[:id]
			)

			if @request
				render :show
			else
				render :json { id: "NO REQUEST" }
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

			if @request.accepted
				# create friendships
				friendship = Friendship.new(
					user_id: @request.sender_id,
					friend_id: @request.target_id
				)
				corresponding_friendship = Friendship.new(
					user_id: @request.target_id
					friend_id: @request.sender_id,
				)
				Friendship.transaction do
						friendship.save!
						corresponding_friendship.save!
				end

				if friendship.persisted?
					@request.delete!
					render :show
				else
					render :json => { message: "Freindship failed to create" }
				end
			else
				@request.delete!
				render :show
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
