export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type LandingFilter = {
  header: LocalizesObject<string>;
  values: LocalizesObject<string>[];
};
export type LocalizesObject<T> = {
  de: T;
  en: T;
};

export type InfoItem = {
  id: number;
  title: string;
  content: string;
};
