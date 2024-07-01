'use server';

import ReactMarkdown from 'react-markdown';
import Image from '@/components/image';
import { ItemContentElement } from '@/types/item';
import AudioPlayer from '@/components/project/detail/content/audioPlayer';

export type ProjectContentElementProps = {
  element: ItemContentElement;
};

export default async function ProjectDetailContentElement({
  element,
}: ProjectContentElementProps) {
  switch (element.template) {
    case 'image':
      return <Image src={element.content} alt="project image" />;
    case 'audio':
      return <AudioPlayer item={element} />;
    case 'video':
      return (
        <div dangerouslySetInnerHTML={{ __html: element.formatted_content }} />
      );
    default:
      return (
        <div>
          <ReactMarkdown>{element.content}</ReactMarkdown>
        </div>
      );
  }
}
