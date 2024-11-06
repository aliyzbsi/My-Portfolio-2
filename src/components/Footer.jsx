import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext";
import { useMode } from "../context/ThemeContext";

function Footer() {
  const { mode } = useMode();
  const { t } = useLanguage();
  return (
    <footer className=" dark:bg-[#252128] flex justify-center ">
      <div className="flex flex-col items-center justify-center p-20  gap-8 w-full md:w-1/2 text-center ">
        <h1 className="font-[700] text-[40px] text-center w-80 md:w-144 text-[#4731D3] dark:text-[#8F88FF]">
          {t("footerText")}
        </h1>
        <p className="text-[20px] dark:text-white">{t("footerAltText")}</p>
        <a
          className="text-[#4731D3] dark:text-[#8F88FF] underline"
          href="mailto:aliyzbsi68@hotmail.com"
        >
          aliyzbsi68@hotmail.com
        </a>
        <div className="flex  text-lg gap-2">
          <a
            className="flex gap-2 items-center w-full border-2 justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            href="https://github.com/aliyzbsi"
          >
            <FaGithub color={mode ? "white" : "black"} size={35} />
          </a>
          <a
            className="flex gap-2 items-center w-full border-2 justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
            href="https://www.linkedin.com/in/aliyuzbasi/"
          >
            <FaLinkedin color={mode ? "white" : "#0077B5"} size={35} />
          </a>
          <a
            className="flex gap-2 items-center w-full border-2 justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-[#E4405F] hover:bg-[#E4405F] hover:text-white"
            href="https://www.instagram.com/aliyzbsi/"
          >
            <FaInstagram size={35} color={mode ? "white" : "#E4405F"} />
          </a>

          <a
            className="flex gap-2 items-center w-full border-2 justify-between p-2 rounded-xl dark:hover:bg-white dark:hover:text-[#0078d4] hover:bg-[#0078d4] hover:text-white"
            href="mailto:aliyzbsi68@hotmail.com"
          >
            <PiMicrosoftOutlookLogoFill
              color={mode ? "white" : "#0078d4"}
              size={35}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
