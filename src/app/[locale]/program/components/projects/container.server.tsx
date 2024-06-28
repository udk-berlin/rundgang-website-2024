"use client"
import { ReactNodeProps } from '@/types/types';
import {usePathname} from "@/navigation";
import cx from "classnames";

export default async function ProgramProjectsContainer({ children }: ReactNodeProps) {
    const pathname = usePathname()
    return (
      <div className="min-h-content-body bg-primary border-x-border md:border-r-border md:border-l-[1px]">
          <div className={cx("grid grid-cols-1 wrap gap-border", pathname === '/project/[id]' ? 'md:grid-cols-3' : 'md:grid-cols-4' )}>
              {children}
          </div>
      </div>
  );
}
