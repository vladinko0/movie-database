import React, {createContext, useContext} from 'react';
import {appTheme} from './appTheme';
import {ThemeProps, ThemeContextType} from './types';

const themeContextValue = {
  theme: appTheme(),
};
export const ThemeContext = createContext<ThemeContextType>(themeContextValue);

const Theme: React.FC<ThemeProps> = ({children}) => {
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

export default Theme;
