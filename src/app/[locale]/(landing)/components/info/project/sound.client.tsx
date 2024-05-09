'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function LandingInfoProjectSound() {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <Image
      className="cursor-pointer"
      onClick={() => setIsMuted(!isMuted)}
      src={`/assets/${isMuted ? 'unmute' : 'mute'}.svg`}
      width={20}
      height={20}
      alt={isMuted ? 'Unmute' : 'Mute'}
    />
  );
}
