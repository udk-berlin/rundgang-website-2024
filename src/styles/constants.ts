export const sizeToTextClassName: { [key: string]: string } = {
  xs: 'text-xs',
  sm: 'text-sm',
  m: 'text-m',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
};

export const smHeightClassName =
  'h-sm max-h-sm min-h-sm desktop:h-desktop-sm desktop:max-h-desktop-sm desktop:min-h-desktop-sm';

export const mdHeightClassName =
  'h-md max-h-md min-h-md desktop:h-desktop-md desktop:max-h-desktop-md desktop:min-h-desktop-md';

export const sizeToHeightClassName = {
  sm: smHeightClassName,
  md: mdHeightClassName,
};
