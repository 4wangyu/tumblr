class Api::UsersController < ApplicationController
  before_action :select_user, only: [:update, :show]

  def index
    @users = User.includes(:avatar_file_attachment, :user_posts).all
  end

  def create
    @user = User.new(user_params)
    unless @user.save
      render json: @user.errors.full_messages, status: :unprocessable_entity #422
    else
      login(@user)
      render :show, status: :created # 201
    end
  end

  def show
    if !@user
      render json: ['User not found'], status: :not_found # 404
    else
      render :show
    end
  end

  private

  def select_user
    @user = User.find_by(id: params[:id])
  end
end
