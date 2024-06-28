'use client';
import SmoothButton from '@/components/smoothButton';
import { useRouter } from '@/navigation';
import { useCallback } from 'react';
import Plus from "@/components/icons/add";

export default function CloseButton() {
  const router = useRouter();

  const onCloseProject = useCallback(() => {
    router.back();
  }, [router]);

  return (
      <SmoothButton onClick={onCloseProject} color="primary" top>
        <Plus className="rotate-45 absolute z-50 top-0 w-content-header h-content-header p-gutter-sm" color="secondary"/>
      </SmoothButton>
  );
}
