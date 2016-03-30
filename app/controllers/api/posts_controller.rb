class PostsController < ApplicationController

	def show
	end

	def index
	end

	def create
		@post = current_user.post
	end

	def update
	end

	def destroy
	end

	private

	def post_params
		params.require(:post).permit(:timeline_id, :body)
	end
end
