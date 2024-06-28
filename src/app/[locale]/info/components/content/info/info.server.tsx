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
    <div className="col-span-3 flex h-content-body max-h-content-body min-h-content-body flex-col gap-border overflow-y-scroll">
      {children}
    </div>
  );
}
