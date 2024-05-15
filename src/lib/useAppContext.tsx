'use client';
import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import { type AppStore, createAppStore, AppState } from './appStore';

export const AppStoreContext = createContext<StoreApi<AppStore> | null>(null);

export interface AppStoreProviderProps {
  initState: AppState;
  children: ReactNode;
}

const AppContextConsumer = AppStoreContext.Consumer;

export const AppStoreProvider = ({
  initState,
  children,
}: AppStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AppStore>>();
  if (!storeRef.current) {
    storeRef.current = createAppStore(initState);
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = <T,>(selector: (store: AppStore) => T): T => {
  const appStoreContext = useContext(AppStoreContext);

  if (!appStoreContext) {
    throw new Error(`useAppStore must be use within AppStoreProvider`);
  }

  return useStore(appStoreContext, selector);
};

export { AppContextConsumer };
