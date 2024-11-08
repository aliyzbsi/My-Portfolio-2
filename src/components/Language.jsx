import axios from "axios";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";

function Language() {
  const { lang, setLang } = useLanguage();
  const translateFn = async () => {
    try {
      await axios.post("https://reqres.in/api/workintech");
      const translate = lang === "tr" ? "en" : "tr";
      setLang(translate);
      toast.success("Çeviri Başarılı..");
    } catch (error) {
      console.error(error);
      toast.error("Çeviri Hatası !", error);
    }
  };
  return (
    <div className="flex p-2 items-center">
      {lang === "tr" ? (
        <button onClick={translateFn} className="text-xs dark:text-white">
          <span className="font-semibold text-[#CBF281] hover:underline">
            TÜRKÇE
          </span>
          'YE GEÇ
        </button>
      ) : (
        <button onClick={translateFn} className="text-xs dark:text-white">
          SWITCH TO
          <span className="font-semibold text-[#CBF281] hover:underline">
            {" "}
            ENGLISH
          </span>
        </button>
      )}
    </div>
  );
}

export default Language;
