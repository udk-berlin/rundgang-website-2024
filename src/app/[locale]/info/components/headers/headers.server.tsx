import InfoHeader from '@/app/info/components/headers/header.server';
import { sizeToHeightClassName } from '@/styles/constants';
import { cn } from '@/lib/utils';
import { HtmlProps } from '@/components/html/html';

const indexToColSpanClassName: string[] = ['col-span-2', 'col-span-3'];
const translations: ('about' | 'information')[] = ['about', 'information'];

export default function InfoHeaders() {
  return (
    <InfoHeadersContainer>
      {translations.map((translation, index) => (
        <InfoHeader
          key={translation}
          className={indexToColSpanClassName[index]}
          translation={translation}
        />
      ))}
    </InfoHeadersContainer>
  );
}

function InfoHeadersContainer({ children }: HtmlProps) {
  return (
    <div
      className={cn(
        'hidden h-content-header max-h-content-header min-h-content-header grid-cols-5 rounded-border border-x-border border-b-border bg-secondary text-primary md:grid',
        sizeToHeightClassName['md'],
      )}
    >
      {children}
    </div>
  );
}
