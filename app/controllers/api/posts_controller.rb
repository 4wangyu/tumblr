class Api::PostsController < ApplicationController
  before_action :select_user_post, only: [:show, :update, :destroy]

  def index

    image_posts = UserPost.where(post_type: :ImageGallery).includes(:user, likes: :liker, post: {image_files_attachments: :blob})
    video_posts = UserPost.where(post_type: :Video).includes(:user, likes: :liker, post: {video_file_attachment: :blob})
    @user_posts = (image_posts + video_posts).sort {|a, b| b.created_at <=> a.created_at}
    headers['X-Post-Count'] = @user_posts.count
    if (params[:offset] && params[:limit])
      @user_posts = @user_posts.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @user_posts = @user_posts.first(50)
    end
    # @user_posts = UserPost.includes(:user, post: [
    #   {image_files_attachments: :blob},
    #   {audio_file_attachment: :blob},
    #   {album_art_file_attachment: :blob},
    #   {video_file_attachment: :blob},
    # ]).all
  end

  # def dashboard
  #   # User specific posts (filter by params)
  #   @user_posts = UserPost.all
  #   render :index
  # end

  # def trending
  #   # Most liked and reblogged posts (filter by params)
  #   @user_posts = UserPost.all
  #   render :index
  # end

  def show
  end

  def create
    post_type = post_type_param[:post_type]

    case post_type
      when 'ImageGallery'
        post = ImageGallery.new(image_gallery_params)
      when 'Audio'
        post = Audio.new(audio_params)
      when 'Video'
        post = Video.new(video_params)
      else
        nil
    end

    @user_post = current_user.user_posts.create({ post: post })
    if @user_post
      render :show, status: :created # 201
    else
      render json: @user_post.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def update
    # if @user_post.author != current_user
    #   render json: ['Unauthorized'], status: :unauthorized # 401
    # elsif !@user_post.update_attributes(post_params)
    #   render json: @user_post.errors.full_messages, status: :unprocessable_entity # 422
    # else 
    #   render :show
    # end
  end

  def destroy
    if @user_post.author != current_user
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @user_post.destroy
      render json: ['Success']
    end
  end

  private

  def post_type_param
    params.require(:post).permit(:post_type)
  end

  def select_user_post
    @user_post = UserPost.find_by(id: params[:id])
    unless @user_post 
      render json: ['Post not found'], status: :not_found and return # 404
    end
  end

  def image_gallery_params
    params.require(:post).permit(:caption, image_files: [])
  end

  def video_params
    params.require(:post).permit(:caption, :video_file)
  end

  def audio_params
    params.require(:post).permit(:track, :artist, :audio_file, :album_art_file)
  end
end
