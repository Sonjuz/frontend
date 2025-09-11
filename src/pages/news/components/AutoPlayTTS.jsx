// AutoPlayTTS.jsx
import { useEffect, useRef } from 'react';

export default function AutoPlayTTS({ ttsUrl, onEnded }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!ttsUrl) return;
    // 자동재생 시도
    const audio = audioRef.current;
    audio.load(); // preload 보장
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [ttsUrl]);

  return (
    <div className='w-full'>
      <audio
        ref={audioRef}
        src={ttsUrl}
        autoPlay
        preload='auto'
        onEnded={onEnded}
      />
    </div>
  );
}
