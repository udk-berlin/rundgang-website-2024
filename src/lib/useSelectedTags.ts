import React, { useEffect } from 'react';
import { useAppStore } from '@/lib/useAppContext';
import { useSearchParams } from 'next/navigation';

export default function useSelectedTags() {
  const searchParams = useSearchParams();
  const formats = useAppStore((state) => state.formats);
  const faculties = useAppStore((state) => state.faculties);
  const languages = useAppStore((state) => state.languages);
  const selectedTags = useAppStore((state) => state.selectedTags);
  const setSelectedTags = useAppStore((state) => state.setSelectedTags);
  const setFaculty = useAppStore((state) => state.setFaculty);
  const setLanguage = useAppStore((state) => state.setLanguage);
  const setFormat = useAppStore((state) => state.setFormat);

  useEffect(() => {
    // can change here if we accept multiple tags per category
    const format = searchParams.get('format');
    const faculty = searchParams.get('faculty');
    const language = searchParams.get('lang');
    const filteredList = [
      ...formats.filter((f) => f.id == format),
      ...faculties.filter((f) => f.id == faculty),
      ...languages.filter((f) => f.id == language),
    ];
    if (format) {
      setFormat(format);
    }
    if (faculty) {
      setFaculty(faculty);
    }
    if (language) {
      setLanguage(language);
    }
    setSelectedTags(filteredList);
  }, [searchParams]);

  return selectedTags;
}
