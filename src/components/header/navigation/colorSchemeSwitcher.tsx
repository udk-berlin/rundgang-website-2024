'use client';
import { useEffect, useState } from 'react';
import { HtmlProps } from '@/components/html/html';
import Light from '@/components/icons/light';

export default function ColorSchemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentIsDark =
      (localStorage.theme !== undefined && localStorage.theme === 'dark') ||
      (localStorage.theme === undefined &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    const theme = currentIsDark ? 'dark' : 'light';

    document.documentElement.classList.add(theme);

    localStorage.theme = theme;

    // @ts-ignore
    document.querySelector(':root').dataset.theme = theme;

    setIsDark(currentIsDark);
  }, []);

  const toggleDarkMode = () => {
    const previousTheme = isDark ? 'dark' : 'light';
    const theme = isDark ? 'light' : 'dark';

    document.documentElement.classList.remove(previousTheme);
    document.documentElement.classList.add(theme);

    localStorage.theme = theme;

    // @ts-ignore
    document.querySelector(':root').dataset.theme = theme;

    setIsDark(!isDark);
  };

  return (
    <ColorSchemeSwitcherContainer>
      <button
        onClick={toggleDarkMode}
        aria-label="dark mode"
        className="flex h-full w-full items-center justify-center rounded-border border-[1px] border-r-border border-t-border  border-primary bg-primary hover:bg-highlight"
      >
        <Light height={33} width={33} />
      </button>
    </ColorSchemeSwitcherContainer>
  );
}

function ColorSchemeSwitcherContainer({ children }: HtmlProps) {
  return <div className="h-full bg-primary">{children}</div>;
}
