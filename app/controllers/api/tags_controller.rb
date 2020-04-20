class Api::TagsController < ApplicationController

  def search 
    @tag_names = Tag.name_like(params[:query])

    render json: @tag_names
  end
  
end
