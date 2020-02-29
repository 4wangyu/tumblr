class Api::LikesController < ApplicationController
  before_action :select_postable

  def create
    @like = Like.new(liker: current_user, post: @post)
    if @like.save
      render partial: 'api/posts/post', locals: {post: @post}, status: :created # 201
    else
      render json: @like.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def destroy
    @like = Like.find_by(liker: current_user, post: @post)
    unless @like
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @like.destroy
      render partial: 'api/posts/user_post', locals: {post: @post}
    end
  end

  private

  def select_postable
    if params[:post_id]
      @postable = Post.find_by_id(params[:post_id])
  end
end
