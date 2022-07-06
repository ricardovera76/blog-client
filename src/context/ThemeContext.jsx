import React from "react";

const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const themeSwitcher = () => {
    setTheme((prevState) => (prevState === " light" ? "dark" : "light"));
  };
  const value = { theme, themeSwitcher };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
