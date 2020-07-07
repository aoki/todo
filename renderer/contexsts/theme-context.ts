import { createContext, useCallback, useState } from "react";

interface Theme {
  name: string;
  background?: string;
  color?: string;
}

const LightTheme: Theme = {
  name: "light",
  background: "white",
  color: "black",
};

const DarkTheme: Theme = {
  name: "dark",
  background: "black",
  color: "white",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

type ThemeContext = {
  theme: Theme;
  setTheme: (newTheme: string) => void;
};

const defaultContext: ThemeContext = {
  theme: LightTheme,
  setTheme: () => { },
};

export const ThemeContext = createContext<ThemeContext>(defaultContext);

export const useTheme = (): ThemeContext => {
  const [theme, _setTheme] = useState<Theme>(LightTheme);

  const setTheme = useCallback((newTheme: string): void => {
    const theme = themes[newTheme] ? themes[newTheme] : LightTheme;
    _setTheme(theme);
    console.log(theme)
  }, [theme]);

  return { theme, setTheme };
};
