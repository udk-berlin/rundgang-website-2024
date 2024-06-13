import { HtmlProps } from '@/components/html/html';
import DesignSidebarTitle from '@/app/design/components/sidebar/title.server';
import DesignSidebarText from '@/app/design/components/sidebar/text.server';

export default function DesignSidebar() {
  return (
    <DesignSidebarContainer>
      <DesignSidebarTitle key="title" />
      <DesignSidebarText key="text" />
    </DesignSidebarContainer>
  );
}

function DesignSidebarContainer({ children }: HtmlProps) {
  return (
    <div className="col-span-2 bg-primary md:col-span-1">
      <div className="md:rounded-border border-border h-content min-h-content fixed w-[66.666666%] overflow-y-scroll border-y-[1px] border-l-[1px] bg-primary md:w-[20vw] md:bg-secondary">
        {children}
      </div>
    </div>
  );
}
