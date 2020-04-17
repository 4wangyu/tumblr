class Api::TagsController < ApplicationController
  before_action :select_post

  def search 
    @tag_names = Tag.name_like(params[:query])

    render json: @tag_names
  end
end
