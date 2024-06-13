import { Filter, Filters } from '@/types/types';
import { createStore } from 'zustand/vanilla';

export type AppState = {
  format?: string;
  language?: string;
  faculty?: string;
  location?: string;
  faculties: Filter[];
  formats: Filter[];
  languages: Filter[];
  selectedTags: Filter[];
  existing: Filters;
};

export type AppActions = {
  setFaculty: (x: string) => void;
  setLanguage: (x: string) => void;
  setFormat: (x: string) => void;
  setSelectedTags: (data: Filter[]) => void;
  setExisting: (data: Filters) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  faculties: [],
  formats: [],
  languages: [],
  selectedTags: [],
  existing: { faculties: [], formats: [], languages: [] },
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,

    setFaculty: (faculty: string) => set(() => ({ faculty: faculty })),
    setLanguage: (language: string) => set(() => ({ language: language })),
    setFormat: (format: string) => set(() => ({ format: format })),
    setSelectedTags: (selectedTags: Filter[]) =>
      set(() => ({ selectedTags: selectedTags })),
    setExisting: (existing: Filters) => set(() => ({ existing: existing })),
  }));
};
