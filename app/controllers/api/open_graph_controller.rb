class Api::OpenGraphController < ApplicationController
  def fetch
    req = OpenGraphReader.fetch(select_target_url)

    if req
      @og = req.og
    else 
      render json: {message: 'Target url could not be scraped'}, status: :unprocessable_entity 
    end
  end

  private 

  def select_target_url
    params.require(:target).permit(:url)[:url]
  end
end
