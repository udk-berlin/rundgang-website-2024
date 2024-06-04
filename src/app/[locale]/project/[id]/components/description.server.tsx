import { ProjectProps } from '@/app/project/[id]/components/project.server';

export default function ProjectDescription({ item }: ProjectProps) {
  if (!item.descriptions) {
    return <></>;
  }
  return (
    <div className="w-full max-w-[50vw] p-gutter-xs">
      {item.descriptions.default}
    </div>
  );
}
