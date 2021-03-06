class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :logged_in?, :current_user

  private

  def authenticate_user!
    unless logged_in?
      render json: { message: 'Unauthorized.' }, status: :unauthorized and return
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logout
    current_user.regenerate_session_token
    
    session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
