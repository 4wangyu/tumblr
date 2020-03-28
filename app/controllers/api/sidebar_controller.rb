class Api::SidebarController < ApplicationController
  def recommended_users
    # TODO: sort by most followees and followers in common (with 'self')
    @users = current_user.recommended_users

    headers['X-Recommended-Users-Count'] = @users.count
    if (params[:offset] && params[:limit])
      @users = @users.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @users = @users.first(5)
    end
  end

  def radar_post
    @post = User.first.radar_post
  end
end
