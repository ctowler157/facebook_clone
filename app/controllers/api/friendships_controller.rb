class Api::FriendshipsController < ApplicationController
	def index
		@friendships = User.includes(friendships: :friend).find(params[:id]).friendships.all

    render :index
	end

	def show
		@friendships = User.includes(friendships: :friend).find(params[:id]).friendships.all
		render :index
	end

	def create
		@friendship = current_user.friendships.new(
			friend_id: friendship_params[:friend_id]
		)
		@corresponding_friendship = Friendship.new(
			user_id: friendship_params[:friend_id],
			friend_id: current_user.id
		)

		Friendship.transaction do
			@friendship.save!
			@corresponding_friendship.save!
		end

		if @friendship.persisted?
			render :show
		else
			render :json => @friendship.errors.full_messages
		end
	end

	def destroy
		@friendship = Friendship.find(params[:id])
		@corresponding_friendship = Friendship.find_by(
			user_id: @friendship.friend_id,
			friend_id: @friendship.user_id
		)

		Friendship.transaction do
			@friendship.destroy!
			@corresponding_friendship.destroy!
		end

		render :json => {
			id: @friendship.id,
			corresponding_friendship_id: @corresponding_friendship.id
		}
	end

	private

	def friendship_params
		params.require(:friendship).permit(:user_id, :friend_id)
	end
end
