class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)

      render :json => { user_id: @user.id, email: @user.email }
    else
      render :json => @user.errors.full_messages
    end
  end

	def show
		@user = User.find(params[:id]);
		# @user[:password_digest] = nil
		# @user[:session_token] = nil
		# @user[:created_at] = nil
		# @user[:updated_at] = nil

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
    user_params[:birthday] = parse_birthday
    user_params
  end

  def parse_user_params
    params.require(:user).permit(
    :password, :email, :first_name, :last_name, :birthday
    )
  end
end
