class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(email: user_params[:email], password: user_params[:password])
    if  @user
      login(@user)
      render partial: 'api/users/user', locals: {user: @user}
    else
      render json: { password: ['Your email or password were incorrect'] }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      logout()
      render json: { message: 'Success.' }
    else 
      render json: { message: 'Ther was an issue logging you out' }, status: :not_found
    end
  end
end