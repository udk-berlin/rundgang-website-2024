'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Unmute from '@/components/icons/unmute';
import Mute from '@/components/icons/mute';

export type AudioPlayerProps = {
  src: string;
  width: number;
  height: number;
};

export default function AudioPlayer({ src, width, height }: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const t = useTranslations('errors');

  return (
    <div className="w-full">
      <audio autoPlay muted={!isMuted} loop>
        <source src={src} type="audio/mpeg" />
        {t('audiPlayer')}
      </audio>
      <div
        className="h-auto w-full cursor-pointer dark:invert"
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted && <Unmute width={width} height={height} />}
        {!isMuted && <Mute width={width} height={height} />}
      </div>
    </div>
  );
}
