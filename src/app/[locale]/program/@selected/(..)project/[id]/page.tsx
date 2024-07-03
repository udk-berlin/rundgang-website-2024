import { getParsedItem } from '@/api/rest/item';
import { ReactNodeProps } from '@/types/types';
import SelectedProject from '@/components/project/detail/selectedProject';

export type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const item = await getParsedItem(decodeURIComponent(params.id));
  return (
    <PageContainer>
      <SelectedProject item={item} />
    </PageContainer>
  );
}

function PageContainer({ children }: ReactNodeProps) {
  return (
    <div className="order-1 col-span-3 w-full md:order-3 md:col-span-1">
      <div className="fixed mt-content-header h-content-body max-h-content-body min-h-content-body w-[100vw] overflow-y-auto border-x-border bg-primary md:w-[40vw] md:border-x-0">
        {children}
      </div>
    </div>
  );
}
