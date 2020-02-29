class Api::ReblogsController < ApplicationController
  before_action :select_rebloggable, only: :create
  before_action :select_reblog, except: :create

  def create
    @reblog = Reblog.new(reblog_params);
    @reblog.user = current_user
    @reblog.reblogable = @reblogable

    if @reblog.save
      render :show, status: :created # 201
    else
      render json: @reblog.errors.full_messages, status: :unprocessable_entity # 422
    end

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
    params.require(:reblog).permit(:content, :all_tags)
  end

  def select_rebloggable
    if params[:reblog_id]
      @reblogable = Reblog.find_by_id(params[:reblog_id]) 
    elsif params[:post_id]
      @reblogable = UserPost.find_by_id(params[:post_id])
    end

    unless @reblogable
      render json: ['Post or Reblog not found'], status: :not_found and return # 404
    end
  end

  def select_reblog
    @reblog = Reblog.find_by_id(params[:id]);
    unless @reblog
      render json: ['Reblog not found'], status: :not_found and return # 404
    end
  end

end
