json.extract! video, :caption
json.video_url video.video.attached? ? url_for(video.video) : nil