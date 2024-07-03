import { getFilteredGraphQLItems } from '@/api/graphql/items';
import Program from '@/app/program/components/program.server';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProgramFilters from '@/app/program/components/filters/filters';

export type ProgramPageProps = {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
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

export const revalidate = 120;

export default async function Page({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  return (
    <>
      <ProgramFilters searchParams={searchParams} items={items} />
      <Program items={items} />
    </>
  );
}
