'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Unmute from '@/components/icons/unmute';
import Mute from '@/components/icons/mute';
import { useUIStore } from '@/lib/uiStore';
import { useStore } from 'zustand';

export type AudioPlayerProps = {
  src: string;
  width: number;
  height: number;
};

export default function AudioPlayer({ src, width, height }: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(true);
  const allMuted = useStore(useUIStore, (state) => state.allMuted);
  const toggleMute = useStore(useUIStore, (state) => state.toggleMute);

  useEffect(() => {
    if (allMuted == 'mute') {
      setIsMuted(true);
    } else if (allMuted == 'unmute') {
      setIsMuted(false);
    }
  }, [allMuted]);

  const setIsSingleMuted = useCallback(() => {
    setIsMuted(!isMuted);
    toggleMute('none');
  }, [isMuted, toggleMute]);

  const t = useTranslations('errors');

  return (
    <div className="w-full">
      <audio autoPlay muted={isMuted} loop>
        <source src={src} type="audio/mpeg" />
        {t('audiPlayer')}
      </audio>
      <div className="h-auto w-full cursor-pointer" onClick={setIsSingleMuted}>
        {!isMuted && <Unmute width={width} height={height} />}
        {isMuted && <Mute width={width} height={height} />}
      </div>
    </div>
  );
}
