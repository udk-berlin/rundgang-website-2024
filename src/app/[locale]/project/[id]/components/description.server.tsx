import { ProjectProps } from '@/app/project/[id]/components/project.server';

export default function ProjectDescription({ item }: ProjectProps) {
  if (!item.descriptions) {
    return <></>;
  }
  return <div>{item.descriptions.default}</div>;
}
