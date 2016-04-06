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
			# render what?
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
			render :show
		else
			render :json => @request.errors.full_messages
		end
	end

	private

	def request_params
		params.require(:request).permit(:sender_id, :target_id, :accepted)
	end
end
