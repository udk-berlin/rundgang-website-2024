'use server';

import { ProjectProps } from '@/app/project/[id]/components/project.server';
import ProjectContextGroup from '@/app/project/[id]/components/contextGroups/contextGroup.server';
import ContextTag from '@/components/contextTag/contextTag.server';
import { ItemContext } from '@/types/item';

export default async function ProjectContextGroups({
  item,
}: Pick<ProjectProps, 'item'>) {
  return (
    <div className="wrap grid grid-cols-2 gap-gutter-md">
      <ProjectContextGroup
        contextGroupKey="format"
        contextGroup={item.formats}
      />
      <ProjectContextGroup
        contextGroupKey="language"
        contextGroup={item.languages}
      />
      <ProjectContextGroup
        contextGroupKey="faculty"
        contextGroup={item.faculties}
      />
      <ProjectContextGroup
        contextGroupKey="location"
        contextGroup={item.locations}
      />
      <div>
        {item.times.map((t) => {
          const contexts: ItemContext[] = [];
          if (t.start.getDay() === t.end.getDay()) {
            contexts.push({
              id: 'start-day',
              name: `${t.start.toLocaleDateString('de-de', {
                weekday: 'short',
                month: 'long',
                day: 'numeric',
              })}, ${t.start.toLocaleTimeString('de-de', {
                hour: '2-digit',
                minute: '2-digit',
              })} - ${t.end.toLocaleTimeString('de-de', {
                hour: '2-digit',
                minute: '2-digit',
              })}`,
            });
          } else if (t.start.getDay() !== t.end.getDay()) {
            contexts.push({
              id: 'start-day',
              name: `${t.start.toLocaleDateString('de-de', {
                weekday: 'short',
                month: 'long',
                day: 'numeric',
              })}, ${t.start.toLocaleTimeString('de-de', {
                hour: '2-digit',
                minute: '2-digit',
              })} - ${t.end.toLocaleDateString('de-de', {
                weekday: 'short',
                month: 'long',
                day: 'numeric',
              })}, ${t.end.toLocaleTimeString('de-de', {
                hour: '2-digit',
                minute: '2-digit',
              })}`,
            });
          }

          return (
            <div key={t.start.toString()} className="flex gap-gutter-xs">
              {contexts.map((context) => (
                <ContextTag key={context.id} context={context} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
