import { Moon } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useState } from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";

function ColorSwitcher(props) {
  const { theme, setTheme } = props;
  // const [lightSwitch, setLightSwitch] = useState(null);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className="xxx"
      onClick={() => {
        toggleTheme();
      }}
    >
      <Moon
        className="moon"
        iconName="Stopwatch"
        // color="rgb(48, 53, 56)"
        size={30}
      />
      <span>Dark Mode</span>
    </div>
  );
}
export default ColorSwitcher;
