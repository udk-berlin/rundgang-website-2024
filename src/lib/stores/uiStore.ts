import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Item } from '@/types/item';

export type UIStore = {
  savedItems: Item['id'][];
  allMuted: string;
  toggleMute: (mute: string) => void;
  saveItem: (data: Item['id']) => void;
  removeItem: (data: Item['id']) => void;
  removeAll: () => void;
};

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      savedItems: ['design'],
      allMuted: 'none',
      toggleMute: (mute: string) => set(() => ({ allMuted: mute })),
      saveItem: (data: Item['id']) => {
        set((state) => ({
          savedItems: state.savedItems.includes(data)
            ? state.savedItems
            : [...state.savedItems, data],
        }));
      },
      removeItem: (data: Item['id']) => {
        set((state) => ({
          savedItems: state.savedItems.filter(
            (item) => item != data || item == 'design',
          ),
        }));
      },
      removeAll: () => {
        set(() => ({
          savedItems: ['design'],
        }));
      },
    }),
    {
      name: 'UIStore',
      partialize: (state) => ({ savedItems: state.savedItems }),
    },
  ),
);
