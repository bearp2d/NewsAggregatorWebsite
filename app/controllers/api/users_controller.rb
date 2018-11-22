class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user = User.find(params[:id])

    if @user
      @favorite.destroy
      render json: {}, status: 200
    else
      render json: ["Invalid user reference"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :demo)
  end

end
