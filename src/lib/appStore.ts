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
  savedItems: ProgramItem.id[];
  existing: Filters;
  menuOpen: boolean;
};

export type AppActions = {
  setFaculty: (x: string) => void;
  setLanguage: (x: string) => void;
  setFormat: (x: string) => void;
  initTags: (data: Filters) => void;
  saveItem: (data: ProgramItem.id) => void;
  removeItem: (data: ProgramItem.id) => void;
  setSelectedTags: (data: Filter[]) => void;
  setExisting: (data: Filters) => void;
  setMenuOpen: () => void;
};

export type AppStore = AppState & AppActions;

export const defaultInitState: AppState = {
  faculties: [],
  formats: [],
  languages: [],
  selectedTags: [],
  savedItems: [],
  existing: { faculties: [], formats: [], languages: [] },
  menuOpen: false,
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
    saveItem: (data: ProgramItem.id) => {
      set((state) => ({
        savedItems: state.savedItems.includes(data)
          ? state.savedItems
          : [...state.savedItems, data],
      }));
    },
    removeItem: (data: ProgramItem.id) => {
      set((state) => ({
        savedItems: state.savedItems.filter((item) => item != data),
      }));
    },
    setSelectedTags: (selectedTags: Filter[]) =>
      set(() => ({ selectedTags: selectedTags })),
    setExisting: (existing: Filters) => set(() => ({ existing: existing })),
    setMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen })),
  }));
};
