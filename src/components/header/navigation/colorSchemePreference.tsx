export type ColorSchemePreferenceProps = {};
import { useEffect, useState } from 'react';

export const ColorSchemePreference = ({}: ColorSchemePreferenceProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = (isChecked: boolean) => {
    if (isChecked) {
      localStorage.theme = 'dark';
      document.querySelector(':root').dataset.theme = 'dark';
      setIsDark(true);
    } else {
      localStorage.theme = 'light';
      document.querySelector(':root').dataset.theme = 'light';
      setIsDark(false);
    }
  };

  return (
    <div className="h-full bg-primarybg">
      <div className="text-md h-full content-around bg-primary text-center text-primarybg hover:bg-secondary hover:text-black">
        <label htmlFor="darkmodecheck" className="">
          *
        </label>
        <input
          checked={isDark}
          type="checkbox"
          className="absolute m-0 h-full w-full p-0"
          id="darkmodecheck"
          onChange={({ target }) => toggleDarkMode(target.checked)}
          aria-label="Dark mode toggle"
        />
      </div>
    </div>
  );
};
