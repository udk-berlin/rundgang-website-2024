'use client';
import SmoothButton from '@/components/smoothButton';
import { useRouter } from '@/navigation';
import { useCallback } from 'react';
import Cross from '@/components/icons/cross';

export default function CloseButton() {
  const router = useRouter();

  const onCloseProject = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <SmoothButton onClick={onCloseProject} color="primary" top>
      <Cross
        className="absolute top-0 z-50 h-content-header w-content-header rotate-45 p-gutter-sm"
        color="secondary"
      />
    </SmoothButton>
  );
}
