class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(username: user_params[:username], password: user_params[:password])
    if @user.nil?
      render json: ['Invalid credentials'], status: :unauthorized
    else
      login(@user)
      render partial: 'api/users/user', locals: {user: @user}
    end
  end

  def destroy
    if current_user
      logout()
      render json: ['Logout success']
    else 
      render ['There was an issue configuring your session'], status: :not_found
    end
  end
end
