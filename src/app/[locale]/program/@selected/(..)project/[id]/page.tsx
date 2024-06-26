import { getParsedItem } from '@/api/rest/item';
import { ReactNodeProps } from '@/types/types';
import Project from '@/app/project/[id]/components/project.server';

export type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));
  return (
    <PageContainer>
      <Project item={item} withCloseOption />
    </PageContainer>
  );
}

function PageContainer({ children }: ReactNodeProps) {
  return (
    <div className="order-1 col-span-3 w-full md:order-3 md:col-span-1">
      <div className="fixed mt-content-header h-content-body max-h-content-body min-h-content-body w-[100vw] overflow-y-auto border-l-border border-r-border bg-primary md:w-[40vw] md:border-l-0">
        {children}
      </div>
    </div>
  );
}
