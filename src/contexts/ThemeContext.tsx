import React, { createContext, useState, useContext } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: (prevTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const initialTheme = localStorage.getItem('__timini_theme_bg__') || 'black';
  const [theme, setTheme] = useState<string>(initialTheme);

  const toggleTheme = (prevTheme: string) => {
    setTheme(prevTheme);
    localStorage.setItem('__timini_theme_bg__', prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};