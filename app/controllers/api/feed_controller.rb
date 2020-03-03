class Api::FeedController < ApplicationController
  def dashboard
    @posts = Post.includes(:user, :content, :tags, :likers);

    headers['X-Post-Reblog-Count'] = @posts.count;

    if (params[:offset] && params[:limit])
      @posts = @posts.drop(params[:offset].to_i).first(params[:limit].to_i)
    else 
      @posts = @posts.first(50)
    end
    # posts_user_ids = User.find(@posts.pluck(:user_id)
    # # Step.joins(:project).where(projects: { collection_id: @collection.id }).pluck(:'steps.id')ImPost
    # reblogs_post_user_id = @reblogs.pluck(post: :user_id)
    # reblogs_parent_user_id = @reblogs.pluck(:parent_id)
    # reblogs_user_id =

    @users = User.includes(:posts, :followees).all
    # .find(@posts.pluck(:user_id))
    @reblogs = Reblog.includes(:post, :parent, :user).all
  end

  def trending
  end

  def search
  end
end
