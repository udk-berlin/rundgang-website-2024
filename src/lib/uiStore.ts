import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Item } from '@/types/item';

export type UIStore = {
  savedItems: Item['id'][];
  menuOpen: boolean;
  saveItem: (data: Item['id']) => void;
  removeItem: (data: Item['id']) => void;
  removeAll: () => void;
  setMenuOpen: () => void;
};

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      savedItems: [],
      menuOpen: false,
      setMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen })),
      saveItem: (data: Item['id']) => {
        set((state) => ({
          savedItems: state.savedItems.includes(data)
            ? state.savedItems
            : [...state.savedItems, data],
        }));
      },
      removeItem: (data: Item['id']) => {
        set((state) => ({
          savedItems: state.savedItems.filter((item) => item != data),
        }));
      },
      removeAll: () => {
        set(() => ({
          savedItems: [],
        }));
      },
    }),
    {
      name: 'UIStore',
      partialize: (state) => ({ savedItems: state.savedItems }),
    },
  ),
);
