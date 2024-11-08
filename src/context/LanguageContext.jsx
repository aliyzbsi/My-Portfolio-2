import { createContext, useContext } from "react";
import useLocaleStorage from "../hooks/useLocaleStorage";
import tr_data from "../locales/tr.json";
import en_data from "../locales/en.json";

import { toast } from "react-toastify";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useLocaleStorage("Lang", "tr");

  const t = (key) => {
    try {
      const translate = lang === "tr" ? tr_data : en_data;

      return translate[key] || key;
    } catch (error) {
      toast.error("Çeviri hatası");
      console.error(error);
      return key;
    }
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
