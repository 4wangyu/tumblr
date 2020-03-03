json.extract! audio, :track, :artist
json.audio_url audio.audio.attached? ? url_for(audio.audio) : nil
json.album_art_url audio.album_art.attached? ? url_for(audio.album_art) : nil