class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)

      bio = @user.create_bio(parse_bio_params)

      render :json => { user_id: @user.id, email: @user.email }
    else
      render :json => @user.errors.full_messages
    end
  end

	def show
		@user = User.includes(:bio).find(params[:id]);
		keys = user_bio_keys(@user.bio)
		keys.each { |key| @user[key] = @user.bio[key] }
		@user[:password_digest] = nil
		@user[:session_token] = nil

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

  def parse_bio_params
    bio_params = user_bio_params
    bio_params[:birthday] = parse_birthday
    bio_params
  end

  def user_params
    params.require(:user).permit(:password, :email)
  end

  def user_bio_params
    params.require(:bio).permit(:first_name, :last_name, :birthday)
  end

	def user_bio_keys(bio)
		# NO METHOD FOR KEYS IN BIO OBJECT???????
		bio_keys = bio.keys
		bio_keys.delete(:user_id)
		bio_keys.delete(:id)

		bio_keys
	end
end
