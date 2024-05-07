export type ResponsiveSize = 'sm' | 'md' | 'lg';
export type LandingFilter = {
  header: LocalizesObject<string>;
  values: LocalizesObject<string>[];
};
export type LocalizesObject<T> = {
  de: T;
  en: T;
};
