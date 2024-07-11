import { useCallback, useEffect } from 'react';
import Cross from '../icons/cross';
import { useSearchStore } from '@/lib/stores/searchStore';
import { useTranslations } from 'next-intl';

export default function Search({}) {
  const t = useTranslations('Filtering');
  const [search, setSearch, setSearchOpen] = useSearchStore((state) => [
    state.search,
    state.setSearch,
    state.setSearchOpen,
  ]);

  useEffect(() => {
    document?.getElementById('search')?.focus();
  }, []);

  const handleInputChange = useCallback(
    (e: any) => {
      setSearch(e.target.value);
    },
    [setSearch],
  );

  const closeSearch = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      setSearch('');
      setSearchOpen(false);
    },
    [setSearch, setSearchOpen],
  );

  return (
    <div className="relative h-tag">
      <input
        id="search"
        type="text"
        className="h-full rounded-md border-border border-primary bg-secondary px-gutter-xs text-primary"
        value={search && search}
        onChange={handleInputChange}
        placeholder={t('search')}
      />
      <button onClick={closeSearch}>
        <Cross
          width={15}
          height={15}
          className="absolute right-gutter-xs top-[8px] m-auto rotate-45"
        />
      </button>
    </div>
  );
}
