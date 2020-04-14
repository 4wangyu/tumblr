class Api::CollectionsController < ApplicationController
  before_render :paginate_posts, only: [:dashboard, :explore, :search]
  before_render :paginate_users, only: [:recommended]
  before_render :pluck_users, only: [:dashboard, :explore, :search]

  def search
    # if !params[:query] || params[:query].empty?
    #   render json: { message: 'Query must be provided.' } , status: :unprocessable_entity
    # end
    @posts = Post.tags_like(params[:query])

    render :collection
  end

  def dashboard
    @posts = Post.all

    render json: @posts
    # render :collection
  end

  def explore
    @posts = User.first.explore_posts

    render :collection
  end

  def likes
  end

  def radar
    post = User.first.radar_post
    @posts = [post]
    @users = [post.user]

    render :collection
  end


  private 

  def paginate_posts
    return @posts if @posts.empty?
    @posts = @posts.includes(:user, :content, :tags, :likers)
    headers['X-Post-Count'] = @posts.count

    if (params[:offset] && params[:limit])
      @posts = @posts.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @posts = @posts.first(5)
    end
  end

  def pluck_users
    @users = User.where(id: @posts.pluck(:user_id)).includes(:posts, :followees, :followers)
    headers['X-User-Count'] = @users.count;
  end

  def paginate_users
    @users = @users.includes(:posts, :followees, :followers)
    headers['X-User-Count'] = @users.count

    if (params[:offset] && params[:limit])
      @users = @users.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @users = @users.first(5)
    end
  end

end