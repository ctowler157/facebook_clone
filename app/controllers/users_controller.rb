class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      render :new
      flash.now[:errors] = @user.errors.full_messages
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email)
  end
end
