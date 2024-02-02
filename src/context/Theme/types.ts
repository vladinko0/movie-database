export interface Theme {
  cornflowerBlue: string;
  frenchPass: string;
  shineGray: string;
  white: string;
}

export type ThemeContextType = {
  theme: Theme;
};

export interface ThemeProps {
  children: React.ReactNode;
}
