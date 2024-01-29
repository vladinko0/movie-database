export interface Theme {
  homeGradient1: string;
  homeGradient2: string;
}

export type ThemeContextType = {
  theme: Theme;
};

export interface ThemeProps {
  children: React.ReactNode;
}
