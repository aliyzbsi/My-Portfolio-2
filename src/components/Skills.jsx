import { useLanguage } from "../context/LanguageContext";
import { skills } from "../data/skills";
import { FaStar } from "react-icons/fa";

function Skills() {
  const { t } = useLanguage();
  const maxRating = 5;

  return (
    <section className="dark:bg-[#252128] py-8">
      <div className="flex justify-center items-center md:items-start  flex-col gap-8 md:flex-row ">
        <div>
          <h1
            translate="no"
            className="font-[700] text-[40px] text-[#4832D3] text-center"
          >
            {t("skillsTitle")}
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="flex  items-center  px-4 py-2  ">
              <div className="flex items-center gap-2 font-semibold">
                <img
                  src={skill.img}
                  loading="lazy"
                  className="w-12 h-12"
                  alt={`${skill.name} logo`}
                />
                <p className="text-[16px] font-[500] dark:text-white">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
