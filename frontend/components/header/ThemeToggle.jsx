import React, { useContext, useMemo } from 'react';
import { Toggle, ToggleCheckbox, ToggleLabel } from './ThemeToggle.styled'
import { ThemeToggleContext } from 'styled/StyleProvider';

const ThemeToggle = () => {
  const { toggle, mode } = useContext(ThemeToggleContext);
  const isDarkMode = useMemo(() => mode === 'dark', [mode])

  return (
    <Toggle onClick={toggle}>
      <ToggleCheckbox checked={isDarkMode} />
      <ToggleLabel />
    </Toggle>
  );
};

export default ThemeToggle;
