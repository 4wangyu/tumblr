json.video_attachment do
  video.video.attached? ? (json.partial! '/api/shared/attachment', attachment: video.video) : nil
end