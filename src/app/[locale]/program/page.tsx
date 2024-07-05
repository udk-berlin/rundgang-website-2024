import { getFilteredGraphQLItems } from '@/api/graphql/items';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProgramSidebar from '@/app/program/components/sidebar/sidebar';
import Program from '@/app/program/components/program/program.server';

export type ProgramPageProps = {
  params: { locale: string };
  searchParams: { [key: string]: string | undefined };
};

export async function generateMetadata({
  params: { locale },
}: ProgramPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Program' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export const revalidate = 600;

export default async function Page({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  return (
    <>
      <ProgramSidebar searchParams={searchParams} items={items} />
      <Program items={items} />
    </>
  );
}
