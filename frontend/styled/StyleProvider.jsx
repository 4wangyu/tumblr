import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { lightTheme, darkTheme } from './theme';
const ThemeToggleContext = createContext();
export const useTheme = () => useContext(ThemeToggleContext);

const StyleProvider = ({ children }) => {

  const [themeState, setThemeState] = useState({ mode: 'light' });

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? 'dark' : 'light');
    window.localStorage.setItem('theme', mode)
    setThemeState({ mode });
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme && /^dark$|^light$/.test(localTheme)) {
      setThemeState({ mode: localTheme });
    } else if (prefersDarkMode) {
      setThemeState({ mode: 'dark' });
    }

  }, []);

  return (
    <ThemeToggleContext.Provider value={{ toggle }}>
      <ThemeProvider
        theme={themeState.mode === 'light' ? lightTheme : darkTheme}
      >
        <>
          {children}
          <GlobalStyle />
        </>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default StyleProvider;