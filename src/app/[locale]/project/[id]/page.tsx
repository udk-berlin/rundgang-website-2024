import Project from './components/project.server';
import { getParsedItem } from '@/api/rest/item';
import { ReactNodeProps } from '@/types/types';

export type ProjectsPageProps = {
  params: { id: string };
};

export default async function Page({ params }: ProjectsPageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));
  return (
    <PageContainer>
      <Project item={item} />
    </PageContainer>
  );
}

function PageContainer({ children }: ReactNodeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {children}
    </main>
  );
}
