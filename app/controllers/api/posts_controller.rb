class Api::PostsController < ApplicationController
  before_action :select_post, only: [:show, :update, :destroy, :purge_attachment]

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
      when 'Link'
        content = Link.new(link_params)
      when 'Quote'
        content = Quote.new(quote_params)
      else
        nil
    end

    @post = current_user.posts.create(content: content, all_tags: post_params[:all_tags], body: post_params[:body])
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
      when 'Audio'
        @post.content.update_attributes(audio_params)
      when 'Video'
        @post.content.update_attributes(video_params)
      when 'Link'
        @post.content.update_attributes(link_params)
      when 'Quote'
        @post.content.update_attributes(quote_params)
      else
        nil
    end

    @post.update_attributes(post_params)
   
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

  def purge_attachment
    @attachment = ActiveStorage::Attachment.find_by_id(params[:attachment_id])
    
    if @attachment && @attachment.record.post == @post
      @attachment.destroy
      render :show
    else
      render json: ['Attachment not found'], status: :not_found
    end
  end

  private

  def content_type_param
    params.require(:post).permit(:content_type)[:content_type]
  end

  def post_params
    params.require(:post).permit(:body, all_tags: [])
  end

  def select_post
    @post = Post.find_by(id: params[:id])
    unless @post 
      render json: ['Post not found'], status: :not_found and return # 404
    end
  end

  def image_gallery_params
    params.require(:post).permit(images: [])
  end

  def video_params
    params.require(:post).permit(:video)
  end

  def audio_params
    params.require(:post).permit(:track, :artist, :audio, :album_art)
  end

  def link_params
    params.require(:post).permit(:url, :title, :description, :thumbnail_url)
  end

  def quote_params
    params.require(:post).permit(:quote, :source)
  end
end
