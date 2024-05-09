import { infoItems } from '@/data';
import InfoContentInfoItem from '@/app/info/components/content/info/item/item.client';
import { HtmlProps } from '@/components/html/html';

export default function InfoContentInfo() {
  return (
    <InfoContentInfoContainer>
      {infoItems.map((item) => (
        <InfoContentInfoItem key={item.en.id} item={item.en} />
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
