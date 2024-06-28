'use client';
import cx from 'classnames';
import {ReactNodeProps} from "@/types/types";

const bgMapper: {[key: string]: string} = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  highlight: 'bg-highlight'
}

const hoverBgMapper: {[key: string]: string} = {
  primary: 'hover:bg-secondary',
  secondary: 'hover:bg-primary',
  highlight: 'hover:bg-highlight'
}

const shadowMapper: {[key: string]: any} = {
  bottom: {
    tr: {
      primary: 'shadow-[0_8px_0_0_rgb(var(--primary))] group-hover:shadow-[0_8px_0_0_rgb(var(--secondary))]',
      secondary: 'shadow-[0_8px_0_0_rgb(var(--secondary))] group-hover:shadow-[0_8px_0_0_rgb(var(--primary))]',
      highlight: 'shadow-[0_8px_0_0_rgb(var(--highlight))] group-hover:shadow-[0_8px_0_0_rgb(var(--highlight))]',
    },
    bl: {
      primary: 'shadow-[8px_0_0_0_rgb(var(--primary))] group-hover:shadow-[8px_0_0_0_rgb(var(--secondary))]',
      secondary: 'shadow-[8px_0_0_0_rgb(var(--secondary))] group-hover:shadow-[8px_0_0_0_rgb(var(--primary))]',
      highlight: 'shadow-[8px_0_0_0_rgb(var(--highlight))] group-hover:shadow-[8px_0_0_0_rgb(var(--highlight))]',
    },
  },
  top: {
    tl: {
      primary: 'shadow-[8px_0_0_0_rgb(var(--primary))] group-hover:shadow-[8px_0_0_0_rgb(var(--secondary))]',
      secondary: 'shadow-[8px_0_0_0_rgb(var(--secondary))] group-hover:shadow-[8px_0_0_0_rgb(var(--primary))]',
      highlight: 'shadow-[8px_0_0_0_rgb(var(--highlight))] group-hover:shadow-[8px_0_0_0_rgb(var(--highlight))]',
    },
    br: {
      primary: 'shadow-[0_-8px_0_0_rgb(var(--primary))] group-hover:shadow-[0_-8px_0_0_rgb(var(--secondary))]',
      secondary: 'shadow-[0_-8px_0_0_rgb(var(--secondary))] group-hover:shadow-[0_-8px_0_0_rgb(var(--primary))]',
      highlight: 'shadow-[0_-8px_0_0_rgb(var(--highlight))] group-hover:shadow-[0_-8px_0_0_rgb(var(--highlight))]',
    }
  }
}


export type SmoothButtonProps = {
  onClick?: (e: any) => void,
  bottom?: boolean;
  top?: boolean;
  color?: 'primary' | 'secondary' | 'highlight';
  title?: string;
} & ReactNodeProps

export default function SmoothButton({
  onClick = (_) => {},
  children,
  bottom = false,
  top = false,
  color = 'secondary',
  title = '',
}: SmoothButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={cx(
        'group absolute h-content-header w-content-header hover:text-highlight',
          bgMapper[color], hoverBgMapper[color],
        bottom ? 'bottom-0 right-0 rounded-tl-border rounded-br-border' : '',
        top ? 'right-0 top-0 rounded-bl-border rounded-tr-border' : '',
      )}
      title={title}
    >
      {children}
      {bottom && (
        <>
          <div className={cx('group-hover:bg-transparent absolute -top-4 right-0 h-4 w-2 rounded-br-border', shadowMapper.bottom.tr[color])}/>
          <div className={cx('group-hover:bg-transparent absolute -left-4 bottom-0 h-2 w-4 rounded-br-border', shadowMapper.bottom.bl[color])}/>
        </>
      )}
      {top && (
        <>
          <div className={cx("group-hover:bg-transparent absolute -left-4 top-0 h-2 w-4 rounded-tr-lg", shadowMapper.top.tl[color])}></div>
          <div className={cx("group-hover:bg-transparent absolute -bottom-4 right-0 h-4 w-2 rounded-tr-lg", shadowMapper.top.br[color])}></div>
        </>
      )}
    </button>
  );
}
