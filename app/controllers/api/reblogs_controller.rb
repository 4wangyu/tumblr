class Api::ReblogsController < ApplicationController
  before_action :select_reblog, except: :create

  def create
    @reblog = Reblog.new(reblog_params);
    @reblog.user = User.first

    if @reblog.save
      render :show, status: :created # 201
    else
      render json: @reblog.errors.full_messages, status: :unprocessable_entity # 422
    end
  end

  def show

  end

  def update

  end

  def destroy 
    if @reblog.user != current_user
      render json: ['Unauthorized'], status: :unauthorized # 401
    else 
      @reblog.destroy
      render json: @reblog.id
    end
  end

  private

  def reblog_params
    params.require(:reblog).permit(:post_id, :parent_id, :caption, :all_tags)
  end

  def select_reblog
    @reblog = Reblog.find_by_id(params[:id]);
    unless @reblog
      render json: ['Reblog not found'], status: :not_found and return # 404
    end
  end

end
