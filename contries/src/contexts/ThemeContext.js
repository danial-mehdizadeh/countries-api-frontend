import { createContext } from "react";

export const themes = {
  dark: "",
  light: "bg-primary",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
