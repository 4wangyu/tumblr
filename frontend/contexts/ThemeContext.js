import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const ThemeToggleContext = createContext();

export const useTheme = () => useContext(ThemeToggleContext);

const ThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = useState({ mode: 'light' });

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    window.localStorage.setItem('theme', mode)
    setThemeState({ mode });
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let mode = 'light';
    if (localTheme) {
      mode = localTheme;
    } else if (prefersDarkMode) {
      mode = 'dark';
    }
    setThemeState({ mode });

  }, []);

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <StyledProvider
        theme={themeState.mode === 'light' ? lightTheme : darkTheme}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </StyledProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;