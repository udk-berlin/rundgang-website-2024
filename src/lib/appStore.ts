import { Filter, Filters, ProgramItem } from '@/types/graphql';
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
  savedItems: ProgramItem[];
  numberSaved: number;
  existing: Filters;
};

export type AppActions = {
  setFaculty: (x: string) => void;
  setLanguage: (x: string) => void;
  setFormat: (x: string) => void;
  initTags: (data: Filters) => void;
  saveItem: (data: ProgramItem) => void;
  removeItem: (data: ProgramItem) => void;
  setSelectedTags: (data: Filter[]) => void;
  setExisting: (data: Filters) => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  faculties: [],
  formats: [],
  languages: [],
  selectedTags: [],
  numberSaved: 0,
  savedItems: [],
  existing: { faculties: [], formats: [], languages: [] },
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,

    setFaculty: (faculty: string) => set(() => ({ faculty: faculty })),
    setLanguage: (language: string) => set(() => ({ language: language })),
    setFormat: (format: string) => set(() => ({ format: format })),

    initTags: (data: Filters) => {
      set(() => ({
        faculties: data.faculties,
        formats: data.formats,
        languages: data.languages,
      }));
    },
    saveItem: (data: ProgramItem) => {
      set((state) => ({
        savedItems: [...state.savedItems, data],
        numberSaved: state.numberSaved + 1,
      }));
    },
    removeItem: (data: ProgramItem) => {
      set((state) => ({
        savedItems: state.savedItems.filter((item) => item.id != data.id),
        numberSaved: state.numberSaved - 1,
      }));
    },
    setSelectedTags: (selectedTags: Filter[]) =>
      set(() => ({ selectedTags: selectedTags })),
    setExisting: (existing: Filters) => set(() => ({ existing: existing })),
  }));
};
