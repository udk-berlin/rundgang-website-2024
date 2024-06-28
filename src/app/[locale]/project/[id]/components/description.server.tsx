import { ProjectProps } from '@/app/project/[id]/components/project.server';

export default function ProjectDescription({ item }: Pick<ProjectProps, 'item'>) {
  if (!item.descriptions) {
    return <></>;
  }
  return (
    <div className="w-full pt-gutter-sm">
      {Object.entries(item.descriptions).map(([language, content]) => {
        return (
        <div>
          <div>{language}</div>
          <div>{content}</div>
        </div>
        )
      })}
    </div>
  );
}
