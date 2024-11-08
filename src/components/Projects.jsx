import { useEffect, useState } from "react";

import trData from "../locales/tr.json";
import enData from "../locales/en.json";
import proje1mobil from "../../public/assets/yeniResimler/proje1mobil.png";
import proje2mobil from "../../public/assets/yeniResimler/ecommerceMobil.png";
import proje3mobil from "../../public/assets/yeniResimler/toDoMobil.png";
import proje4mobil from "../../public/assets/yeniResimler/porfolyoMobil.png";
import proje5mobil from "../../public/assets/yeniResimler/reduxMobil.png";
import proje1 from "../../public/assets/yeniResimler/proje1.png";
import proje2 from "../../public/assets/yeniResimler/ecommerce.png";
import proje3 from "../../public/assets/yeniResimler/todo.png";
import proje4 from "../../public/assets/yeniResimler/proje5.png";
import proje5 from "../../public/assets/yeniResimler/proje4.png";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const projectImages = {
  1: proje1,
  2: proje2,
  3: proje3,
  4: proje4,
  5: proje5,
};

const projectImagesMobile = {
  1: proje1mobil,
  2: proje2mobil,
  3: proje3mobil,
  4: proje4mobil,
  5: proje5mobil,
};

function Projects() {
  const { t, lang } = useLanguage();
  const [projects, setProjects] = useState(trData.projects);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setProjects(lang === "tr" ? trData.projects : enData.projects);
  }, [lang]);

  return (
    <section className="flex flex-col items-center bg-[#CBF281] dark:bg-[#1A210B]  overflow-hidden border-t">
      <div className="w-full max-w-screen-lg flex flex-col ">
        <h1 className="text-3xl font-semibold text-[#4731D3] dark:text-[#CBF281]  py-4 ">
          {t("projectTitle")}
        </h1>
        <div className="flex flex-col gap-4 py-4">
          {projects.map((project, index) => (
            <div key={index} className="  ">
              <div className="flex flex-col  md:flex-row md:h-96 rounded-xl bg-white    dark:bg-[#2B2727] shadow-lg ">
                <div className="w-full md:w-3/5  overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
                  <img
                    src={
                      isMobile
                        ? projectImagesMobile[project.id]
                        : projectImages[project.id]
                    }
                    alt={`${project.name} photo`}
                    className="h-96 w-full object-contain md:object-contain md:h-full "
                  />
                </div>
                <div className="flex flex-col justify-between p-10 gap-2 h-full w-full ">
                  <div>
                    <h2 className="text-[32px] font-semibold text-[#4731D3] dark:text-[#C1BAED] mb-2">
                      {project.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((item, techIndex) => (
                        <span
                          className="bg-[#4731D3] dark:bg-[#8173DA] text-white dark:text-white font-semibold text-sm rounded-full px-3 py-1"
                          key={techIndex}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.githubUrl}
                      className="text-black   dark:text-[#CBF281] dark:hover:text-blue-300 scale-90 hover:scale-100 duration-200 underline"
                    >
                      {t("github")}
                    </a>
                    <a
                      href={project.url}
                      className="flex items-center gap-2 text-black  dark:text-[#CBF281] dark:hover:text-blue-300 scale-90 hover:scale-100 duration-200 underline"
                    >
                      {t("goApp")} <FaRegArrowAltCircleRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
