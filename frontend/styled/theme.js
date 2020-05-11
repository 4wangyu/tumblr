import α from 'color-alpha';

export const popColors = {
  redOrange: '#ff492f',
  pizzazz: '#ff8a00',
  malachite: '#00cf35',
  dodgerBlue: '#00b8ff',
  cornflowerBlue: '#7c5cff',
  hotPink: '#ff62ce',
  emerald: '#33da58',
  linkWater: '#e6eff7'
};

const baseColors = {
  warning: popColors.redOrange,
  success: popColors.malachite,
  support: α('#444', .5),
  supportLight: '##e7e7e7'
};

const trueBluePalette = {
  primary: '#001935',
  secondary: '#fff',
  tertiary: '#f2f2f2',
  quaternary: '#8f8f8f',
  border: '#e4e4e4',
  divider: '#e9e9e9',
  text: α('#121212', .95),
  textLight: α('#000', .50),
  highlight: popColors.dodgerBlue,
  highlightHover: popColors.linkWater,
  highlightAlt: '#e5e7ea',
};

export const themeBase = {
  fontUrl: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900|Open+Sans:400,600,700,800&display=swap',
  titleFont: "'Open Sans', sans-serif",
  font: "'Montserrat', sans-serif",
  fontWeights: {
    title: 700,
    heading: 600,
    subHeading: 500,
    text: 400
  },
  fontSizes: {
    title: '4rem',
    titleLg: '6rem',
    sm: '1.3rem',
    md: '1.4rem',
    semiLg: '1.5rem',
    lg: '1.7rem',
    xl: '2.1rem',
    iconSm: '2rem',
    iconMd: '3.5rem',
    iconLg: '5rem'
  },
  colors: {
    ...popColors,
    ...baseColors,
    ...trueBluePalette
  },
};

const darkModePalette = {
  primary: '#1A1A1A',
  secondary: '#222',
  tertiary: '#1c1c1c',
  border: '#606060',
  divider: '#1f1f1f',
  text: '#fff',
  textLight: α('#fff', .75),
  highlightHover: α('#fff', .25),
  highlightAlt: '#393939'
};

const lowContrastPalette = {
  primary: '#1A2735',
  secondary: '#36465D',
  tertiary: '#3F4E64',
  border: '#bababa',
  divider: α('#bfbfbf', .1),
  text: '#bfbfbf',
  textLight: α('#bfbfbf', .65),
  highlightHover: α('#bfbfbf', .25),
  highlightAlt: '#47576d'
};

export const palettes = {
  'True Blue': trueBluePalette,
  'Dark Mode': darkModePalette,
  'Low-Contrast Classic': lowContrastPalette
};