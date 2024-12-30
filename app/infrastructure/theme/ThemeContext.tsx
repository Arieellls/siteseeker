import React, { createContext, useContext, useState } from "react";
import theme from ".";

const lightTheme = {
  background: `${theme.colors.bg.primary}`,
  text: `${theme.colors.text.primary}`,
  header: "white",
};

const darkTheme = {
  background: `${theme.colors.bg.secondary}`,
  text: `${theme.colors.text.secondary}`,
  header: `${theme.colors.bg.header}`,
  border: `${theme.colors.text.secondary}`,
};

const ThemeContext = createContext({
  theme: lightTheme,
  isDarkMode: false,
  toggleTheme: () => {},
  setDarkMode: (isDark: boolean) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const setDarkMode = (isDark: boolean) => setIsDarkMode(isDark);

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, toggleTheme, setDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
