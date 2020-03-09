json.extract! audio, :track, :artist
json.audio_attachment do
  audio.audio.attached? ? (json.partial! '/api/shared/attachment', attachment: audio.audio) : nil
end
json.album_art_attachment do
  audio.album_art.attached? ? (json.partial! '/api/shared/attachment', attachment: audio.album_art) : nil
end