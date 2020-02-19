import α from 'color-alpha';

export const font = {
  url: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900|Open+Sans:400,600,700,800&display=swap',
  family: {
    primary: "'Montserrat', sans-serif",
    title: "'Open Sans', sans-serif"
  },
  weight: {
    regular: 400,
    medium: 500, // Not available for 'Open Sans'
    semiBold: 600,
    bold: 700,
    black: 900,
  }
}

export const colors = {
  midnightBlue: '#001935',
  dodgerBlue: '#00B8FF',
  fadedBlack: α('black', .65),
  redOrange: '#FF492F',
  emerald: '#33DA58'
};

export default {
  font,
  colors
}