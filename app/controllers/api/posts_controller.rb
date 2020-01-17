class Api::PostsController < ApplicationController
  before_action :select_user_post, only: [:show, :update, :destroy]

  def index
    # All posts (filter by params)
    # 3395ms
    @user_posts = UserPost.pagination(pagination_params).includes(:post, :user)
    headers['X-Post-Count'] = UserPost.count
    # count = @user_post.length
    # headers['Post-Count'] = count
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
    post_type = post_type_param()

    case post_type
      when 'ImageGallery'
        @user_post = ImageGallery.new(image_gallery_params)
      when 'Audio'
        @user_post = Audio.new(audio_params)
      when 'Video'
        @user_post = Video.new(video_params)
      else
        nil
    end
    
    if @user_post.save && current_user.user_posts.create({ post: @user_post })
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
  
  def pagination_params
    params.require(:filters).permit(:per_page, :page)
  end

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
