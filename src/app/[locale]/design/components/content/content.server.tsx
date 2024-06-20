import { HtmlProps } from '@/components/html/html';
import DesignContentHeader from '@/app/design/components/content/header.server';
import DesignContentProjects from '@/app/design/components/content/projects.server';
import DesignContentOpenSidebar from '@/app/design/components/content/openSidebar.client';

export default function DesignContent() {
  return (
    <DesignContentContainer>
      <DesignContentOpenSidebar key="open-sidebar" />
      <DesignContentHeader key="content-header" />
      <DesignContentProjects key="content-projects" />
    </DesignContentContainer>
  );
}

function DesignContentContainer({ children }: HtmlProps) {
  return <div className="col-span-3 md:col-span-4">{children}</div>;
}
