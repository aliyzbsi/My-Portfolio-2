import { createContext, useContext } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";
import tr_data from "../locales/tr.json";
import en_data from "../locales/en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useLocaleStorage("Lang", "tr");

  const t = (key) => {
    const translate = lang === "tr" ? en_data : tr_data;
    return translate[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
