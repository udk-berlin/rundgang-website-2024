"use client"
import { ReactNodeProps } from '@/types/types';
import {usePathname} from "@/navigation";
import cx from "classnames";

export default function ProgramContainer({ children }: ReactNodeProps) {
    const pathname = usePathname()

    return (
      <div className={cx("order-1 md:order-2 relative max-h-content min-h-content h-content w-full", pathname === '/project/[id]' ? 'md:col-span-3' : 'md:col-span-4')}>
          {children}
      </div>
  );
}

