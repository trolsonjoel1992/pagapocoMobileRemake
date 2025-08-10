import { darkColor, lightColor } from '@/src/constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  // Leer el tema guardado al iniciar
  React.useEffect(() => {
    AsyncStorage.getItem('theme').then(value => {
      if (value === 'dark' || value === 'light') setTheme(value);
    });
  }, []);

  const colors = theme === 'light' ? lightColor : darkColor;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme); // Guardar el tema
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
