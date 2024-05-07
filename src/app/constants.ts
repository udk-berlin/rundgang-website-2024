import { LandingFilter } from '@/types/types';

export const landingFilters: LandingFilter[] = [
  {
    header: { de: 'Fakultät / Zentrum', en: 'Faculty / Center' },
    values: [
      { de: 'Fakultät Musik', en: 'Faculty Music' },
      { de: 'Fakultät Gestaltung', en: 'Faculty Gestaltung' },
    ],
  },
  {
    header: { de: 'Format', en: 'Format' },
    values: [
      { de: 'Lesung', en: 'Reading' },
      { de: 'Ausstellung', en: 'Exhibition' },
    ],
  },
  {
    header: { de: 'Sprache', en: 'Language' },
    values: [
      { de: 'Deutsch', en: 'Deutsch' },
      { de: 'English', en: 'English' },
    ],
  },
];
