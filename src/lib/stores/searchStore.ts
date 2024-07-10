import { create } from 'zustand';

export type SearchState = {
  search: string;
  searchOpen: boolean;
};

export type SearchActions = {
  setSearch: (search: string) => void;
  setSearchOpen: (open: boolean) => void;
};

export type SearchStore = SearchState & SearchActions;

export const useSearchStore = create<SearchStore>((set) => ({
  searchOpen: false,
  search: '',
  setSearch: (search) => set(() => ({ search: search })),
  setSearchOpen: (isOpen) => set(() => ({ searchOpen: isOpen })),
}));
