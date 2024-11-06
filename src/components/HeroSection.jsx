import { useLanguage } from "../context/LanguageContext";
import { useMode } from "../context/ThemeContext";
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
function HeroSection() {
  const { t } = useLanguage();
  const { mode } = useMode();
  return (
    <section
      className="p-8 md:p-16 pt-32 flex  min-h-screen "
      style={
        mode
          ? {
              background: "rgb(23,16,67)",
              backgroundImage:
                "linear-gradient(90deg, rgba(23,16,67,1) 67%, rgba(26,33,11,1) 67%)",
            }
          : {
              background: "rgb(71,49,211)",
              backgroundImage:
                "linear-gradient(90deg, rgba(71,49,211,1) 67%, rgba(203,242,129,1) 67%)",
            }
      }
    >
      <div className="flex flex-col  w-full text-white gap-8 md:px-20">
        <p className="font-[700] text-[32px] text-[#CBF281]">almila</p>
        <div className="flex h-full items-center md:flex-row flex-col">
          <div className="w-full md:w-3/5  py-4 ">
            <p className="text-[54px] w-3/4 font-[700] text-[#CBF281]">
              {t("headerAboutMe")}
            </p>
            <p className="mt-4 text-[24px] font-[400]">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded">
                <FaGithub size={25} /> Github
              </button>
              <button className="bg-white flex items-center gap-2 text-black py-3 px-4 rounded">
                <FaLinkedin size={25} /> Linkedin
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5 px-4  flex items-start justify-start">
            <img
              src="../../public/assets/yeniResimler/myPhoto1.png"
              alt="Developer"
              className="rounded-lg shadow-lg w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;