import Content from '@/components/modal/content.server';
import Modal from '@/components/modal/modal';
import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Imprint' });
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      images: ['/assets/ogimages/zh.png'],
    },
  };
}

export default function Page(props: any) {
  unstable_setRequestLocale(props.params.locale);
  return (
    <Modal>
      <Content title="Imprint" />
    </Modal>
  );
}
