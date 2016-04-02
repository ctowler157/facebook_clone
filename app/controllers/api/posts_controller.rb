class Api::PostsController < ApplicationController
  before_action :ensure_current_user, only: [:update, :destroy]
  # before_action :ensure_friend, only: [:show]

	def show
		@post = Post.includes(:bio).find(params[:id])
	end

	def index
		@posts = Post.includes(:bio).all
	end

	def create
		@post ||= current_user.posts.new(post_params)

		if @post.save
			render :show
		else
			render :json => @post.errors.full_messages
		end
	end

	def update
		@post ||= Post.find(params[:id])
		if @post.update(post_params)
			render :show
		else
			render :json => @post.errors.full_messages
		end
	end

	def destroy
		@post ||= Post.find(params[:id])
		@post.destroy
		render :json => { id: @post.id }
	end

	private
  def ensure_current_user
    @post = Post.find(params[:id])
    current_user.id == @post.author_id #&& current_user.is_friend?(@post.timeline_id)
  end

  # def ensure_friend
  #   @post = Post.find(params[:id])
  #   current_user.is_friend?(@post.timeline_id)
  # end

	def post_params
		params.require(:post).permit(:timeline_id, :body)
	end
end
