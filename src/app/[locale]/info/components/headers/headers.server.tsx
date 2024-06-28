import InfoHeader from '@/app/info/components/headers/header.server';
import { sizeToHeightClassName } from '@/styles/constants';
import { cn } from '@/lib/utils';
import { infoHeaders } from '@/data';
import { HtmlProps } from '@/components/html/html';

const indexToColSpanClassName: string[] = ['col-span-3', 'col-span-2'];

export default function InfoHeaders() {
  return (
    <InfoHeadersContainer>
      {infoHeaders.map((header, index) => (
        <InfoHeader
          key={header.en}
          className={indexToColSpanClassName[index]}
          header={header}
        />
      ))}
    </InfoHeadersContainer>
  );
}

function InfoHeadersContainer({ children }: HtmlProps) {
  return (
    <div
      className={cn(
        'h-content-header max-h-content-header border-x-border border-b-border rounded-border min-h-content-header grid grid-cols-5 bg-secondary text-primary',
        sizeToHeightClassName['md'],
      )}
    >
      {children}
    </div>
  );
}
