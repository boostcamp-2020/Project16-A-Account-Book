const calRem = (size: number): string => `${size / 16}rem`;

const fontSize = {
  xs: calRem(12),
  sm: calRem(14),
  md: calRem(16),
  lg: calRem(18),
  xl: calRem(20),
};

const len = {
  xs: '0.5rem',
  sm: '1.0rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '3.5rem',
};

const color = {
  black: '#000000',
  white: '#ffffff',
  blud: '#0000ff',
  red: '#ff0000',
  gray: '#e1e1e1',
  darkgray: '#bababc',

  lightBorder: '#e6e6e6',
  green: '#20C997',
  gray2: '#e9ecef',
};

const theme = {
  fontSize,
  color,
  len,
};

export default theme;
