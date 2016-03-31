class Api::PostsController < ApplicationController

	def show
		@post = Post.find(params[:id])
	end

	def index
		@posts = Post.all
	end

	def create
		@post = current_user.posts.new(post_params)

		if @post.save
			render :show
		else
			render :json => @post.errors.full_messages
		end
	end

	def update
		@post = Post.find(params[:id])
		if @post.update(post_params)
			render :show
		else
			render :json => @post.errors.full_messages
		end
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		render :show
	end

	private

	def post_params
		params.require(:post).permit(:timeline_id, :body)
	end
end
