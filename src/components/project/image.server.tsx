import Image from '@/components/image';
import { ProjectCardProps } from '@/components/project/card.server';
import SaveButton from '@/components/savebutton.client';
import {Link} from "@/navigation";

export default function ProjectCardImage({ item }: ProjectCardProps) {
  return (
    <div className="relative w-full overflow-hidden">
        <Link
            href={{
                pathname: `/project/[id]`,
                params: { id: item.id },
            }}
        >
            <Image
                className="rounded-md bg-primary"
                src={item.thumbnail != '' ? item.thumbnail : '/assets/placeholder.png'}
            />
        </Link>
        <SaveButton itemId={item.id} />
    </div>
  );
}
