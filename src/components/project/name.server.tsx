import { ProjectCardProps } from '@/components/project/card.server';

export default function ProjectCardName({ item }: ProjectCardProps) {
  return <div className="p-gutter-md text-sm leading-[2]">{item.name}</div>;
}
