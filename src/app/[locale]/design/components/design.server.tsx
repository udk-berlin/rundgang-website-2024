import { HtmlProps } from '@/components/html/html';
import DesignContent from '@/app/design/components/content/content.server';
import DesignSidebar from '@/app/design/components/sidebar/sidebar.server';

export default function Design() {
  return (
    <DesignContainer>
      <DesignContent />
      <DesignSidebar />
    </DesignContainer>
  );
}

function DesignContainer({ children }: HtmlProps) {
  return (
    <main className="relative">
      <div
        id="design-control-left-element"
        className="max-h-content min-h-content fixed left-[0vw] h-content w-screen overflow-hidden transition-[left] duration-700 md:left-0"
      >
        <div className="grid w-[166.666666vw] grid-cols-5 md:w-screen">
          {children}
        </div>
      </div>
    </main>
  );
}
