class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)

      render :show
    else
      render :json => @user.errors.full_messages
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render :show
    else
      render :json => @user.errors.full_messages
    end
  end

	def show
		@user = User.find(params[:id]);
		render :show
	end

  private
  def birthday_params
    params.require(:birthday).permit(:month, :date, :year)
  end

  def parse_birthday
    bday = birthday_params
    "#{bday[:month]} #{bday[:date]} #{bday[:year]}"
  end

  def user_params
    user_params = parse_user_params
    if params[:birthday]
      user_params[:birthday] = parse_birthday
    end
    user_params
  end

  def parse_user_params
    params.require(:user).permit(
    :password, :email, :first_name, :last_name, :birthday,
    :profile_pic, :cover_photo
    )
  end
end
