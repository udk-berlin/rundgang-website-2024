'use server';
import { useTranslations } from 'next-intl';
import {ReactNodeProps} from "@/types/types";

export type SidebarFilterGroupHeaderProps = {
    translation: 'faculty' | 'format' | 'language';
};

export default async function SidebarFilterGroupHeader({ translation }: SidebarFilterGroupHeaderProps) {
  const t = useTranslations();

  return (
      <SidebarFilterGroupHeaderContainer>
          {t(translation, {count: 2})}:
      </SidebarFilterGroupHeaderContainer>
  );
}

function SidebarFilterGroupHeaderContainer({ children }: ReactNodeProps) {
    return (
        <div className="bg-primary text-secondary text-xs px-gutter-sm min-h-content-header flex items-center">
            {children}
        </div>
    );
}