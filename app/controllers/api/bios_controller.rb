class Api::BiosController < ApplicationController
  before_action :ensure_current_user, only: [:update, :destroy]
  # before_action :ensure_friend, only: [:show]

  def show
    #  might change to find user instead
    @bio = Bio.find(params[:id])
  end

  def create
    @bio = current_user.bio.new(bio_params)
    if @bio.save
      render :show
    else
      render :json => @bio.errors.full_messages
    end
  end

  def update
    @bio ||= Bio.find(params[:id])

    if @bio.update(bio_params)
      render :show
    else
      render :json => @bio.errors.full_messages
    end
  end

  def destroy
    @bio ||= Bio.find(params[:id])

    @bio.destroy
    render :show
  end

  private
  def current_user_is_author?(bio)
    bio.user_id == current_user.id
  end

  def ensure_current_user
    @bio = Bio.find(params[:id])
    current_user.id == @bio.user_id
  end


  # def ensure_friend
  #   @post = Post.find(params[:id])
  #   current_user.is_friend?(@post.timeline_id)
  # end

  def bio_params
    params.require(:bio).permit(:first_name, :last_name, :birthday)
  end
end
