import React, { useContext } from 'react';
import { Toggle, ToggleSwitch } from './ThemeToggle.styled'
import { ThemeToggleContext } from 'styled/StyleProvider';

const ThemeToggle = () => {
  const { toggle } = useContext(ThemeToggleContext);
  return (
    <Toggle onClick={toggle}>
      <ToggleSwitch />
    </Toggle>
  );
};

export default ThemeToggle;
