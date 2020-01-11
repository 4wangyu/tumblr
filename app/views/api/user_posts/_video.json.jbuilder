json.extract! video, :caption
json.video_url video.video_file.attached? ? url_for(video.video_file) : nil