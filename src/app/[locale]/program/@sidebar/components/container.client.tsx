"use client"
import {ReactNodeProps} from '@/types/types';
import {usePathname} from "@/navigation";
import cx from "classnames";

export default function SidebarContainer({ children }: ReactNodeProps) {
    const pathname = usePathname()
    return (
        <div className={cx("col-span-2 order-2 md:order-1 w-full", pathname === '/project/[id]' ? 'md:col-span-2' : 'md:col-span-1')}>
            <div className={cx("fixed max-h-content min-h-content h-content overflow-y-scroll w-[66.666vw] transition-[width] duration-700", pathname === '/project/[id]' ? 'md:w-[40vw]' : 'md:w-[20vw]')}>
                {children}
            </div>
        </div>
    );
}
