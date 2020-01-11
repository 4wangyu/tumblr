json.extract! audio, :track, :artist
json.audio_url audio.audio_file.attached? ? url_for(audio.audio_file) : nil
json.album_art_url audio.album_art_file.attached? ? url_for(audio.album_art_file) : nil