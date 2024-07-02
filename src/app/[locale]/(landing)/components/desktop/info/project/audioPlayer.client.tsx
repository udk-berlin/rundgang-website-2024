'use client';
import AudioPlayer from '@/components/audioPlayer';
import { LandingInfoProps } from '@/app/(landing)/components/info/info.server';

export default function LandingInfoProjectAudioPlayer({
  language,
}: LandingInfoProps) {
  return (
    <div className="ml-auto">
      <AudioPlayer
        src={`/assets/projects/${language}/audio.mp3`}
        width={25}
        height={25}
      />
    </div>
  );
}
