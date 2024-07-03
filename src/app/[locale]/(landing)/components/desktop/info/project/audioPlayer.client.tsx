'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Unmute from '@/components/icons/unmute';
import Mute from '@/components/icons/mute';
import { LandingInfoProps } from '../info.server';

export default function LandingInfoProjectAudioPlayer({
  language,
}: LandingInfoProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setIsMuted] = useState(true);

  const setPlay = useCallback(() => {
    setIsMuted(false);
    if (audioRef?.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }, [audioRef]);

  const onEnded = useCallback(() => {
    setIsMuted(true);
    if (audioRef?.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audioRef]);

  const t = useTranslations('errors');

  return (
    <div className="ml-auto">
      <div className="w-full">
        <audio ref={audioRef} onEnded={onEnded}>
          <source
            src={`/assets/projects/${language}/audio.mp3`}
            type="audio/mpeg"
          />
          {t('audiPlayer')}
        </audio>
        <div className="h-auto w-full cursor-pointer" onClick={setPlay}>
          {!muted && <Unmute width={25} height={25} />}
          {muted && <Mute width={25} height={25} />}
        </div>
      </div>
    </div>
  );
}
