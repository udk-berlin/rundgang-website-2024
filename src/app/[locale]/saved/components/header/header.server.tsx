import SavedHeaderTitle from '@/app/saved/components/header/title.server';
import SavedHeaderRemoveAll from '@/app/saved/components/header/removeAll.client';
import { ReactNodeProps } from '@/types/types';

export default function SavedHeader() {
  return (
    <SavedHeaderContainer>
      <SavedHeaderTitle />
      <SavedHeaderRemoveAll />
    </SavedHeaderContainer>
  );
}

function SavedHeaderContainer({ children }: ReactNodeProps) {
  return (
    <div className="grid h-content-header max-h-content-header min-h-content-header w-screen grid-cols-3 md:grid-cols-5 gap-border border-x-border border-b-border border-primary bg-primary">
      {children}
    </div>
  );
}
