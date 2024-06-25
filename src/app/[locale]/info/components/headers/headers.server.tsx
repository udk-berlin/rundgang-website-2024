import InfoHeader from '@/app/info/components/headers/header.server';
import { sizeToHeightClassName } from '@/styles/constants';
import { cn } from '@/lib/utils';
import { infoHeaders } from '@/data';
import { HtmlProps } from '@/components/html/html';

const indexToColSpanClassName: string[] = ['col-span-2', 'col-span-3'];

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
        'mx-border mb-border grid grid-cols-5 rounded-md bg-secondary text-primary',
        sizeToHeightClassName['md'],
      )}
    >
      {children}
    </div>
  );
}
