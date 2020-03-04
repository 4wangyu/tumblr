class Api::SidebarController < ApplicationController
  def recommended_users
    @users = User.includes(:posts, :followees, :followers).where.not(id: current_user.followee_ids)

    headers['X-Recommended-Users-Count'] = @users.count
    if (params[:offset] && params[:limit])
      @users = @users.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @users = @users.first(5)
    end
  end

  def radar_post
    @user = User.includes(:posts, :followees, :followers).where.not(id: User.find_by_username('demolicious').followee_ids).last
    @post = @user.posts.includes(:user, :content, :tags, :likers).where(content_type: :ImageGallery).first
  end
end
