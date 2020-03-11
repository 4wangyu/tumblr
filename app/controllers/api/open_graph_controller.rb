class Api::OpenGraphController < ApplicationController
  def fetch
    req = OpenGraphReader.fetch(select_target_url)

    if req
      @og = req.og
    else 
      render json: {message: 'Endpoint could not be read'}, status: :unprocessable_entity 
    end
  end

  private 

  def select_target_url
    params.require(:target).permit(:url)[:url]
  end
end
