import ReactMarkdown from 'react-markdown';
import Image from '@/components/image';
import { ItemContent } from '@/types/item';
import AudioPlayer from '@/app/project/[id]/components/audioplayer';

const ContentElement = ({ item }: { item: ItemContent }) => {
  if (item.template == 'image') {
    return <Image src={item.content} />;
  } else if (item.template == 'audio') {
    return <AudioPlayer item={item} />;
  } else if (item.template == 'video') {
    return (
      <div dangerouslySetInnerHTML={{ __html: item.formatted_content }}></div>
    );
  } else {
    return (
      <div>
        <ReactMarkdown>{item.content}</ReactMarkdown>
      </div>
    );
  }
};

export default ContentElement;
