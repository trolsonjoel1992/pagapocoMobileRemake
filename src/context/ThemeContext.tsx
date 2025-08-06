import { darkColor, lightColor } from '@/src/constants/colors';
import React, { createContext, useContext, useState } from 'react';

type ThemeType = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: ThemeType;
  colors: typeof lightColor;
  toggleTheme: () => void;
}>({
  theme: 'light',
  colors: lightColor,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const colors = theme === 'light' ? lightColor : darkColor;

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
