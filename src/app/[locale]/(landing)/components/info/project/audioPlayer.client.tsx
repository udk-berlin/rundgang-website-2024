'use client';
import { ProjectLanguages } from '@/projects';
import AudioPlayer from '@/components/audioPlayer';

export default function LandingInfoProjectAudioPlayer({
  languageSearchParam,
}: {
  languageSearchParam: ProjectLanguages;
}) {
  return (
    <div className="ml-auto">
      <AudioPlayer
        src={`/assets/projects/${languageSearchParam}/audio.mp3`}
        width={30}
        height={30}
      />
    </div>
  );
}
