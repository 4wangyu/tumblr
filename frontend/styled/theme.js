
import α from 'color-alpha';

export const popColors = {
  redOrange: '#ff492f',
  pizzazz: '#ff8a00',
  malachite: '#00cf35',
  dodgerBlue: '#00b8ff',
  cornflowerBlue: '#7c5cff',
  hotPink: '#ff62ce',
  emerald: '#33da58'
};;

const baseColors = {
  highlight: popColors.dodgerBlue,
  highlightAlt: '#9da6af',
  warning: popColors.redOrange,
  success: popColors.malachite,
  support: α('#444', .5),
  supportLight: '##e7e7e7'
};

const lightPalette = {
  primary: '#001935',
  secondary: '#fff',
  tertiary: '#f2f2f2',
  text: '#000',
  textLight: α('#000', .65),
};

const darkPalette = {
  primary: '#121212',
  secondary: '#222',
  tertiary: '#1c1c1c',
  text: '#fff',
  textLight: α('#fff', .80),
};

export const lightTheme = {
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
    iconSm: '2rem',
    iconMd: '3.5rem',
    iconLg: '5rem'
  },
  colors: {
    ...popColors,
    ...baseColors,
    ...lightPalette
  }
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    ...darkPalette
  }
};