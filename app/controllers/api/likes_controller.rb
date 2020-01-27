class Api::LikesController < ApplicationController
  before_action :select_post

  def create
    @like = Like.new(user: current_user, post: @post)
    if @like.save
      render 'posts/user_post', status: :created # 201
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def destroy
    @like = Like.find_by(user: current_user, post: @post)
    unless @like
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @like.destroy
      render 'posts/user_post', status: :no_content # 204
    end
  end

  private

  def select_post
    @post = UserPost.find_by_id(params[:post_id])
  end

end
