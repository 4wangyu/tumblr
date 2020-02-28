class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follower: current_user, followee_id: params[:user_id])
    if @follow.save
      render partial: 'api/users/user', locals: {user: current_user}, status: :created # 201
    else
      render json: @follow.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower: current_user, followee_id: params[:user_id])
    unless @follow
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @follow.destroy
      render partial: 'api/users/user', locals: {user: current_user}
    end
  end

end
