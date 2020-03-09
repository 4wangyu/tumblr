import { useState, useEffect } from "react";

const useAudioPlayer = ref => {
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [srcAttr, setSrcAttr] = useState(undefined);

  let $audio;

  const reset = () => {
    setPlaying(false);
    setSrcAttr(undefined)
  };

  useEffect(() => {
    $audio = ref;

    const setAudioData = () => {
      setDuration($audio.current.duration);
      setTime($audio.current.currentTime);
    };

    const setAudioTime = () => setTime($audio.current.currentTime);

    $audio.current.addEventListener("loadeddata", setAudioData);

    $audio.current.addEventListener("timeupdate", setAudioTime);

    playing ? $audio.current.play() : $audio.current.pause();


    return () => {
      $audio.current.pause();
      $audio.current.removeEventListener("loadeddata", setAudioData);
      $audio.current.removeEventListener("timeupdate", setAudioTime);
    };
  });

  useEffect(() => {
    $audio.current.src = srcAttr
  }, [srcAttr]);

  return { time, duration, playing, setPlaying, srcAttr, setSrcAttr, reset };
}

export default useAudioPlayer;
