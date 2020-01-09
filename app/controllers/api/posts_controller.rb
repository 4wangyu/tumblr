class Api::PostsController < ApplicationController
  before_action :select_post, only: [:show, :update, :destroy]
  def index
    @posts = Post.all
  end

  def show
  end

  def create
    @post = Post.new(post_params)
    @post.author = current_user
    unless @post.save
      render json: @post.errors.full_messages, status: :unprocessable_entity # 422
    else
      render :show, status: :created # 201
    end
  end

  def update
    if @post.author != current_user
      render json: ['Unauthorized'], status: :unauthorized # 401
    elsif !@post.update_attributes(post_params)
      render json: @post.errors.full_messages, status: :unprocessable_entity # 422
    else 
      render :show
    end
  end

  def destroy
    if @post.author != current_user
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @post.destroy
      render json: ['Success']
    end
  end

  private

  def select_post
    @post = Post.find_by(id: params[:id])
    unless @post 
      render json: ['Post not found'], status: :not_found and return# 404
    end
  end

  def post_params
    params.require(:post).permit(:title, :description, :post_type)
  end
end
