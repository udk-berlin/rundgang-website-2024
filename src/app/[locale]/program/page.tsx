import { getFilteredGraphQLItems } from '@/api/graphql/items';
import Program from '@/app/program/components/program.server';
import ProgramContainer from '@/app/program/components/container.client';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ProgramFilters from '@/app/program/components/filters/filters';

export type ProgramPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Program');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export const revalidate = 0;

export default async function Page({ searchParams }: ProgramPageProps) {
  const items = await getFilteredGraphQLItems(searchParams);
  return (
    <>
      <ProgramFilters searchParams={searchParams} items={items} />
      <Program items={items} />
    </>
  );
}
