import { HtmlProps } from '@/components/html/html';

export default function DesignContentProjectAudio() {
  return (
    <DesignContentProjectAudioContainer>
      Audio
    </DesignContentProjectAudioContainer>
  );
}

function DesignContentProjectAudioContainer({ children }: HtmlProps) {
  return <div className="ml-auto">{children}</div>;
}
