import React, { createContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { themeBase, palettes } from './theme';
export const PaletteToggleContext = createContext();

const paletteNames = Object.keys(palettes);

const StyleProvider = ({ children }) => {

  const [{ palette }, setThemeState] = useState({ palette: 'True Blue' });

  const toggle = () => {
    const idx = (paletteNames.indexOf(palette) + 1) % paletteNames.length;
    const newPalette = paletteNames[idx];
    window.localStorage.setItem('theme-palette', newPalette)
    setThemeState({ palette: newPalette });
  };

  const theme = useMemo(
    () => ({
      ...themeBase,
      colors: {
        ...themeBase.colors,
        ...palettes[palette]
      }
    }),
    [palette]
  )

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme-palette');
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localTheme && paletteNames.includes(palette)) {
      setThemeState({ palette: localTheme });
    } else if (prefersDarkMode) {
      setThemeState({ palette: 'Dark Mode' });
    }
  }, []);

  return (
    <PaletteToggleContext.Provider value={{ toggle, palette }}>
      <ThemeProvider
        theme={theme}
      >
        <>
          {children}
          <GlobalStyle />
        </>
      </ThemeProvider>
    </PaletteToggleContext.Provider>
  );
};

export default StyleProvider;