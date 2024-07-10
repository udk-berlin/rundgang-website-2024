import { usePathname, useRouter } from '@/navigation';
import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

const useQuery = (param: string) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const value = useMemo(() => {
    return searchParams.get(param);
  }, [searchParams, param]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const oldValue = params.get(name) ?? '';
      if (decodeURIComponent(oldValue) == value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams],
  );

  const changeParameter = (value: string) => {
    // @ts-expect-error
    router.push(pathname + '?' + createQueryString(param, value));
  };

  return {
    createQueryString,
    changeParameter,
    value,
  };
};
export default useQuery;
