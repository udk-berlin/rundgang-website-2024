import { ReactNodeProps } from '@/types/types';
import { Item } from '@/types/item';
import Image from '@/components/image';
import SaveButton from '@/components/saveButton.client';
import ProjectDetailImageCloseButton from '@/components/project/detail/image/closeButton';

export type ProjectDetailImageProps = {
  item: Item;
  withCloseOption?: boolean;
};

export default function ProjectDetailImage({
  item,
  withCloseOption = false,
}: ProjectDetailImageProps) {
  return (
    <ProjectDetailImageContainer>
      <Image src={item.thumbnail_full_size} alt="thumbnail" />
      {withCloseOption && <ProjectDetailImageCloseButton />}
      <SaveButton itemId={item.id} />
    </ProjectDetailImageContainer>
  );
}

function ProjectDetailImageContainer({ children }: ReactNodeProps) {
  return <div className="relative w-full">{children}</div>;
}
