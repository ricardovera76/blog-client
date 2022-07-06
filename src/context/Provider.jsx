import React from "react";
import { ThemeProvider } from "./ThemeContext";

const Provider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
