class Api::CollectionsController < ApplicationController
  after_action :set_count_headers

  def dashboard
    @posts = Post.paginate(limit: params[:limit], offset: params[:offset]).includes(:user, :content, :tags, :likers);

    @users = User.includes(:posts, :followees, :followers).all

    render :collection
  end

  def explore
  end

  def search
  end

  def likes
  end

  def radar
    @posts = [User.first.radar_post]
    @users = []

    render :collection
  end

  def recommended
    @users = current_user.recommended_users

    # headers['X-Recommended-Users-Count'] = @users.count
    if (params[:offset] && params[:limit])
      @users = @users.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @users = @users.first(5)
    end

    @posts = []

    render :collection
  end

  def followers
  end

  def followees
  end

  private 

  def set_count_headers
    headers['X-Post-Count'] = Post.count;
    headers['X-User-Count'] = User.count;
  end
end