'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ProjectLanguages } from '@/projects';

export default function LandingInfoProjectSound({
  lang,
}: {
  lang: ProjectLanguages;
}) {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <div>
      <audio autoPlay muted={!isMuted} loop>
        <source src={`/assets/projects/${lang}/audio.mp3`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Image
        className="cursor-pointer dark:invert"
        onClick={() => setIsMuted(!isMuted)}
        src={`/assets/svg/${isMuted ? 'unmute' : 'mute'}.svg`}
        width={30}
        height={30}
        alt={isMuted ? 'Unmute' : 'Mute'}
      />
    </div>
  );
}
