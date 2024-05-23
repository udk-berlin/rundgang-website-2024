export type ColorSchemePreferenceProps = {};
import { useEffect, useState } from 'react';

export const ColorSchemePreference = ({}: ColorSchemePreferenceProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDark(true);
      document.querySelector(':root').dataset.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = (isChecked: boolean) => {
    if (isChecked) {
      localStorage.theme = 'dark';
      document.querySelector(':root').dataset.theme = 'dark';
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      localStorage.theme = 'light';
      document.querySelector(':root').dataset.theme = 'light';
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  };

  return (
    <div className="h-full bg-secondary">
      <button
        onClick={({ target }) => toggleDarkMode(!isDark)}
        aria-label="dark mode"
        className="h-full w-full content-around bg-primary p-2 text-center font-noto text-xl text-secondary hover:bg-highlight hover:text-black"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-secondary"
        >
          <path d="M32.9199 19.688H23.5119L30.2319 26.408L26.3279 30.184L19.6719 23.528V33L14.2319 32.936V23.528L7.51192 30.248L3.73592 26.344L10.3919 19.688H0.919922V14.248H10.3919L3.67192 7.52798L7.51192 3.68797L14.2319 10.408V0.935974H19.6719V10.408L26.3919 3.68797L30.2319 7.52798L23.5119 14.248H32.9199V19.688Z" />
        </svg>
      </button>
    </div>
  );
};
