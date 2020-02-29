class Api::FeedController < ApplicationController
  def dashboard
    @posts = Post.includes(:user, :content, :tags, :likers)
    headers['X-Post-Count'] = @posts.count
    if (params[:offset] && params[:limit])
      @posts = @posts.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @posts = @posts.first(50)
    end

    @users = User.includes(:posts, :followees)
  end

  def trending
  end

  def search
  end
end
