import { useState, useEffect } from "react";

const useAudioPlayer = ref => {
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [$audio, setAudioRef] = useState(null);

  useEffect(() => {
    setAudioRef(ref);

    if (!$audio || !$audio.current) return;

    const setAudioData = () => {
      const { duration, currentTime } = $audio.current;
      setDuration(duration);
      setTime(currentTime);
    };

    const setAudioTime = () => {
      const { currentTime } = $audio.current;
      setTime(currentTime)
    };

    $audio.current.addEventListener("loadeddata", setAudioData);
    $audio.current.addEventListener("timeupdate", setAudioTime);

    return () => {
      $audio.current.removeEventListener("loadeddata", setAudioData);
      $audio.current.removeEventListener("timeupdate", setAudioTime);
    };

  }, [$audio]);

  useEffect(() => {
    if ($audio && $audio.current) {
      playing ? $audio.current.play() : $audio.current.pause();
    }
  }, [playing]);

  return { time, duration, playing, setPlaying };
}

export default useAudioPlayer;
