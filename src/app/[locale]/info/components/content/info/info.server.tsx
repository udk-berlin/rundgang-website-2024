import InfoContentInfoItem from '@/app/info/components/content/info/item/item.client';
import { HtmlProps } from '@/components/html/html';
import { getTranslations } from 'next-intl/server';
const keys = [
  'arrival',
  'awareness',
  'wristbands',
  'accessibility',
  'payment',
  'fire',
  'entry',
  'opening',
  'food',
  'lostnfound',
  'opening_times',
  'press',
  'program',
  'recycling',
  'registration',
  'reservation',
  'safety',
  'other',
] as const;

export default async function InfoContentInfo() {
  const t = await getTranslations('Info.faqs');
  const infoItems = keys
    .map((k) => ({ id: k, title: t(`${k}.title`), text: t.raw(`${k}.text`) }))
    .sort((a, b) => a.title.localeCompare(b.title));
  return (
    <InfoContentInfoContainer>
      {infoItems.map((item) => (
        <InfoContentInfoItem key={item.id} item={item} />
      ))}
      <div className="grow-[1] rounded-md bg-white"></div>
    </InfoContentInfoContainer>
  );
}

function InfoContentInfoContainer({ children }: HtmlProps) {
  return (
    <div className="col-span-2 flex h-[calc(100vh-3*var(--height-md)-3*var(--border))] max-h-[calc(100vh-3*var(--height-md)-3*var(--border))] min-h-[calc(100vh-3*var(--height-md)-3*var(--border))] flex-col gap-border overflow-y-scroll">
      {children}
    </div>
  );
}
