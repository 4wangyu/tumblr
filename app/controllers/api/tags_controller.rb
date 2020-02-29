class Api::TagsController < ApplicationController
  before_action :select_post

  def all_tags
    @post.update(tag_params)
    if @user_post
      render partial: 'api/posts/post', locals: {post: @post}, status: :created # 201
    else
      render json: @user_post.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  private

  def tag_params
    params.permit(:all_tags)
  end

  def select_post
    @post = UserPost.find_by(id: params[:post_id], user: current_user)
  end
end
