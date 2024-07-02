import { HtmlProps } from '@/components/html/html';
import AudioPlayer from '@/components/audioPlayer';

export default function DesignContentProjectAudioPlayer({
  languageSearchParam,
}) {
  return (
    <DesignContentProjectAudioContainer>
      <AudioPlayer
        src={`/assets/projects/${languageSearchParam}/audio.mp3`}
        width={25}
        height={25}
      />
    </DesignContentProjectAudioContainer>
  );
}

function DesignContentProjectAudioContainer({ children }: HtmlProps) {
  return <div className="ml-auto w-[6vw] md:w-[1.8vw]">{children}</div>;
}
