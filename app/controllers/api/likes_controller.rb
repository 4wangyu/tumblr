class Api::LikesController < ApplicationController
  before_action :select_post

  def create
    @like = Like.new(liker: current_user, post: @user_post)
    if @like.save
      render partial: 'api/posts/user_post', locals: {user_post: @user_post}, status: :created # 201
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def destroy
    @like = Like.find_by(liker: current_user, post: @user_post)
    unless @like
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @like.destroy
      render partial: 'api/posts/user_post', locals: {user_post: @user_post}
    end
  end

  private

  def select_post
    @user_post = UserPost.find_by_id(params[:post_id])
  end

end
