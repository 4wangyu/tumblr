class Api::UsersController < ApplicationController
  before_action :select_user, only: [:update, :show]

  def create
    @user = User.new(user_params)
    unless @user.save
      render json: @user.errors.full_messages, status: :unprocessable_entity #422
    else
      render :show, status: :created # 201
    end
  end

  def update
    if !@user
      render json: ['User not found'], status: :not_found # 404
    elsif !@user.update_attributes(user_params)
      render json: @user.errors.full_messages, status: :unprocessable_entity # 422
    else
      render :show
    end
  end

  def show
    unless @user
      render json: ['User not found'], status: :not_found # 404
    else
      render :show
    end
  end

  private

  def select_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
end
