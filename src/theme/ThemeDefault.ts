import { ThemeType } from './Theme.types';

const theme: ThemeType = {
  colors: {
    primary: '#24396d',
    secondary: '#F5F5F5',
    error: '#FF3A29',
    white: '#ffffff',
    black: '#474a51',
    gray: {
      100: '#F5F5F5',
      200: '#D2D2D2',
      300: '#FDFDFD',
      400: '#dedce4',
      500: '#C6C3D0',
      600: '#cecece',
      700: '#524E69',
    },
    text: {
      dark: '#524E69',
      md: '#9490AC',
      light: '#B6B3C6',
    },
    button: {
      secondary: '#BA5624',
    },
    buttonHover: {
      secondary: '#DD7F50',
    },
    alert: {
      info: '#2472BA',
      success: '#5BA980',
      warning: '#FFB200',
      error: '#FF3A29',
    },
    alertBackground: {
      info: '#EAF3FB',
      success: '#EEF6F2',
      warning: '#FFFAF0',
      error: '#FFF1F0',
    },
    borderColor: {
      base: '#b9bea5',
    },
  },
  fontSize: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    base: '1.4rem',
    lg: '2.6rem',
    xl: '3.2rem',
    heading1: '3.2rem',
    heading2: '4.0rem',
  },
  lineHeight: {
    base: '140%',
    high: '44px',
  },
  fontFamily: {
    base: 'Open Sans',
    secondary: 'Roboto',
    inter: 'Inter',
    mont: 'Montserrat',
  },
  fontWeight: {
    base: 400,
    bold: 700,
  },
  breakpoint: {
    sm: '450px',
    md: '768px',
    lg: '1170px',
    xl: '1440px',
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.05rem',
    sm: '1rem',
    md: '1.5rem',
    base: '2rem',
    lg: '2.5rem',
    xl: '3.5rem',
    xxl: '4.5rem',
    large: '5rem',
    superLarge: '6rem',
    extraLarge: '7.5rem',
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
  },
};

export default theme;
