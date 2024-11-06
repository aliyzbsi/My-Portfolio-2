import { createContext, useContext, useEffect } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useLocaleStorage("mode", true);

  const toggleMode = () => {
    setMode(!mode);
  };
  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  return useContext(ModeContext);
};
