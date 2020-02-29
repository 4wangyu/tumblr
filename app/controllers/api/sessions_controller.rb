class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(email: user_params[:email], password: user_params[:password])
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
      render json: ['Logout successful']
    else 
      render ['Session not found'], status: :not_found
    end
  end
end
