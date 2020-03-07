class Api::PostsController < ApplicationController
  before_action :select_post, only: [:show, :update, :destroy]

  def show
  end

  def create
    content_type = content_type_param

    case content_type
      when 'ImageGallery'
        content = ImageGallery.new(image_gallery_params)
      when 'Audio'
        content = Audio.new(audio_params)
      when 'Video'
        content = Video.new(video_params)
      else
        nil
    end

    @post = current_user.posts.create(content: content, all_tags: all_tags_param)
    if @post
      render :show, status: :created # 201
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def update
    if @post.user != current_user
      render json: ['Unauthorized'], status: :unauthorized and return# 401
    end

    content_type = content_type_param

    case content_type
      when 'ImageGallery'
        @post.content.update_attributes(image_gallery_params)
        if (params[:post][:purge_image_ids])
          params[:post][:purge_image_ids].each do |id|
            @post.content.images.find_by_id(id).purge
          end
        end
      when 'Audio'
        @post.content.update_attributes(audio_params)
      when 'Video'
        @post.content.update_attributes(video_params)
      else
        nil
    end

    @post.update_attributes(all_tags: all_tags_param)
   
    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def destroy
    if @post.user != current_user
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @post.destroy
      render json: @post.id
    end
  end

  private

  def content_type_param
    params.require(:post).permit(:content_type)[:content_type]
  end

  def all_tags_param
    params.require(:post).permit(all_tags: [])[:all_tags]
  end

  def select_post
    @post = Post.find_by(id: params[:id])
    unless @post 
      render json: ['Post not found'], status: :not_found and return # 404
    end
  end

  def image_gallery_params
    params.require(:post).permit(:caption, images: [])
  end

  def video_params
    params.require(:post).permit(:caption, :video)
  end

  def audio_params
    params.require(:post).permit(:track, :artist, :audio, :album_art)
  end
end
