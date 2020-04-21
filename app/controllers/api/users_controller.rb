class Api::UsersController < ApplicationController
  before_action :select_user, only: [:update, :show]
  before_render :paginate_users, only: [:followees, :followers, :recommended, :search]

  # Single user
  def create
    @user = User.new(user_params)
    unless @user.save
      render json: @user.group_error_messages, status: :unprocessable_entity #422
    else
      login(@user)
      render :show, status: :created # 201
    end
  end

  def show; end

  # Collection
  def followees
    @users = current_user.followees

    render :index
  end

  def followers
    @users = current_user.followers

    render :index
  end

  def recommended
    @users = current_user.recommended_users.limit(7)

    render :index
  end

  def search
    @users = User.name_like(params[:query])

    render :index
  end

  private

  def select_user
    @user = User.find_by_id(params[:id])

    unless @user
      render json: {message: 'User not found.'}, status: :not_found and return
    end
  end

  def paginate_users
    return @users if @users.empty?
    @users = @users.includes(:posts, :followees, :followers)
    headers['X-User-Count'] = @users.count

    if (params[:offset] && params[:limit])
      @users = @users.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @users = @users.first(5)
    end
  end

end