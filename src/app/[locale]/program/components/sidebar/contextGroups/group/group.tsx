import { ItemFilterableContext } from '@/types/item';
import SidebarToggleContainer from '@/app/program/components/sidebar/toggle/container.client';
import ContextTag from '@/components/contextTag/contextTag.server';
import { ReactNodeProps } from '@/types/types';
import ProgramSidebarContextGroupHeader from '@/app/program/components/sidebar/contextGroups/group/header';

export type ProgramSidebarContextGroupProps = {
  translationKey: 'faculty' | 'format' | 'language';
  contexts: ItemFilterableContext[];
};

export default function ProgramSidebarContextGroup({
  translationKey,
  contexts,
}: ProgramSidebarContextGroupProps) {
  return (
    <ProgramSidebarContextGroupContainer>
      <ProgramSidebarContextGroupHeader
        key="header"
        translationKey={translationKey}
      />
      <div
        key="tags"
        className="w-full border-r-border border-t-border border-primary bg-primary"
      >
        <div className="flex w-full flex-col gap-border">
          {contexts.map((context) => (
            <SidebarToggleContainer key={context.id}>
              <ContextTag type="button" context={context} />
            </SidebarToggleContainer>
          ))}
        </div>
      </div>
    </ProgramSidebarContextGroupContainer>
  );
}

function ProgramSidebarContextGroupContainer({ children }: ReactNodeProps) {
  return <div className="w-full">{children}</div>;
}
