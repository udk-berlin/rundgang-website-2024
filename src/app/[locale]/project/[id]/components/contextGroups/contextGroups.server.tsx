'use server';

import { ProjectProps } from '@/app/project/[id]/components/project.server';
import ProjectContextGroup from '@/app/project/[id]/components/contextGroups/contextGroup.server';

export default async function ProjectContextGroups({
  item,
}: Pick<ProjectProps, 'item'>) {
  return (
    <div className="flex gap-gutter-sm">
      <ProjectContextGroup
        contextGroupKey="format"
        contextGroup={item.formats}
      />
      <ProjectContextGroup
        contextGroupKey="faculty"
        contextGroup={item.faculties}
      />
      <ProjectContextGroup
        contextGroupKey="location"
        contextGroup={item.locations}
      />
      <ProjectContextGroup
        contextGroupKey="language"
        contextGroup={item.languages}
      />
      {/*<ProjectFilterTagsGroup translation="language" filters={item.languages} />*/}
    </div>
  );
}
