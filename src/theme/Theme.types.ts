type ColorsVariant = {
  primary?: string;
  secondary?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
};

type ColorsText = {
  dark: string;
  md: string;
  light: string;
};

type BorderColor = {
  base: string;
};

type ColorsAlert = {
  info: string;
  success: string;
  warning: string;
  error: string;
};

type ColorsAlertBackground = {
  info: string;
  success: string;
  warning: string;
  error: string;
};

type ColorsButton = {
  secondary: string;
};

type ColorsButtonHover = {
  secondary: string;
};

type Colors = {
  primary: string;
  secondary: string;
  error: string;
  white: string;
  black: string;
  gray: ColorsVariant;
  text: ColorsText;
  button: ColorsButton;
  buttonHover: ColorsButtonHover;
  alert: ColorsAlert;
  alertBackground: ColorsAlertBackground;
  borderColor: BorderColor;
};

type FontSize = {
  xs: string;
  sm: string;
  md: string;
  base: string;
  lg: string;
  xl: string;
  heading1: string;
  heading2: string;
};

type Breakpoint = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type Spacing = {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  base: string;
  lg: string;
  xl: string;
  xxl: string;
  large: string;
  superLarge: string;
  extraLarge: string;
};

type FontFamily = {
  base: string;
  secondary: string;
  inter: string;
  mont: string;
};

type FontWeight = {
  base: number;
  bold: number;
};

type LineHeight = {
  base: string;
  high: string;
};

type Radius = {
  sm: string;
  md: string;
  lg: string;
  xs: string;
};

export type ThemeType = {
  colors: Colors;
  fontSize: FontSize;
  fontFamily: FontFamily;
  breakpoint: Breakpoint;
  spacing: Spacing;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  radius: Radius;
};
