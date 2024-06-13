'use client';
import SmoothButton from '@/components/smoothbutton';
import { useRouter } from '@/navigation';
import { useCallback } from 'react';

export default function CloseButton() {
  const router = useRouter();
  const onCloseProject = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <SmoothButton onButtonClick={onCloseProject} top>
      <div className="rotate-45 text-lg text-primary hover:text-black">+</div>
    </SmoothButton>
  );
}
