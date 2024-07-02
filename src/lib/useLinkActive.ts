'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { usePathname } from '@/navigation';
import { useEffect, useState } from 'react';

export const useIsActive = (href: string) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const selPathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, selPathname, href]);

  return isActive;
};
