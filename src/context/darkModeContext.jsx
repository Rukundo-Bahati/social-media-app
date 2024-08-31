import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  // Retrieve the darkMode value from localStorage, defaulting to false if it's not set
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "false" // Corrected line
  );

  const toggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode); // Toggle the darkMode value
  };

  useEffect(() => {
    // Update the darkMode value in localStorage whenever it changes
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
