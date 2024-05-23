'use client';
import cx from 'classnames';

export default function SmoothButton({
  onButtonClick,
  children,
  bottom = false,
  top = false,
  color = 'secondary',
}: any) {
  return (
    <button
      onClick={onButtonClick}
      className={cx(
        'group absolute h-10 w-10 hover:bg-primary hover:text-highlight',
        `bg-${color}`,
        bottom
          ? 'bottom-gutter-xxs right-gutter-xxs rounded-br-md rounded-tl-md'
          : '',
        top ? 'right-0 top-0 rounded-bl-md ' : '',
      )}
    >
      {children}
      {bottom && (
        <>
          <div
            className={`bg-transparent group-hover:bg-transparent absolute -top-4 right-0 h-4 w-2 rounded-br-md shadow-[0_8px_0_0_rgb(var(--${color}))] group-hover:shadow-none`}
          ></div>
          <div
            className={`bg-transparent group-hover:bg-transparent absolute -left-4 bottom-0 h-2 w-4 rounded-br-md shadow-[8px_0_0_0_rgb(var(--${color}))] group-hover:shadow-none`}
          ></div>
        </>
      )}
      {top && (
        <>
          <div className="bg-transparent absolute -left-4 top-0 h-2 w-4 rounded-tr-lg shadow-[8px_0_0_0_rgb(var(--primary))]"></div>
          <div className="group-hover:bg-transparent bg-transparent absolute -bottom-4 right-0 h-4 w-2 rounded-tr-lg shadow-[0_-8px_0_0_rgb(var(--primary))] group-hover:shadow-none"></div>
        </>
      )}
    </button>
  );
}
