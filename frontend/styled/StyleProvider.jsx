import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { lightTheme, darkTheme } from './theme';
export const ThemeToggleContext = createContext();

const StyleProvider = ({ children }) => {

  const [{ mode }, setThemeState] = useState({ mode: 'light' });

  const toggle = () => {
    const newMode = (mode === 'light' ? 'dark' : 'light');
    window.localStorage.setItem('theme', newMode)
    setThemeState({ mode: newMode });
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
        theme={mode === 'light' ? lightTheme : darkTheme}
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