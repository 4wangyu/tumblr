class Api::CollectionsController < ApplicationController
  before_render :paginate_posts, only: [:dashboard, :explore]
  before_render :paginate_users, only: [:recommended]
  before_render :pluck_users, only: [:dashboard, :explore]


  def dashboard
    @posts = Post.all

    render :collection
  end

  def explore
    @posts = User.first.explore_posts

    render :collection
  end

  def search
  end

  def likes
  end

  def radar
    post = User.first.radar_post
    @posts = [post]
    @users = [post.user]

    render :collection
  end


  def recommended
    @users = current_user.recommended_users.limit(7)
    @posts = []

    render :collection
  end

  def followers
  end

  def followees
  end

  private 

  def paginate_posts
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