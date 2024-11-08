import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import trData from "../locales/tr.json";
import enData from "../locales/en.json";
import profileImage from "../../public/assets/profileSectionImage.png";
function Profile() {
  const { t, lang } = useLanguage();
  const [personelInfo, setPersonelInfo] = useState(trData.personelInfo || []);

  useEffect(() => {
    try {
      if (lang === "tr") {
        setPersonelInfo(trData.personelInfo);
      } else {
        setPersonelInfo(enData.personelInfo);
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  }, [lang]);

  const infoFields =
    personelInfo.length > 0
      ? [
          {
            title: "dateOfBirthTitle",
            value: personelInfo[0]?.dateOfBirth || "Bilinmiyor",
          },
          {
            title: "residenceTitle",
            value: personelInfo[0]?.residenceAdr || "Bilinmiyor",
          },
          {
            title: "educationTitle",
            value: personelInfo[0]?.education || "Bilinmiyor",
          },
          {
            title: "preferredRoleTitle",
            value: personelInfo[0]?.preferredRole.join(", ") || "Bilinmiyor",
          },
        ]
      : [];
  return (
    <section className="flex flex-col justify-center items-center h-full  bg-[#4731D3] md:h-auto border-t dark:bg-[#171043] py-8">
      <div className="max-w-5xl w-full  ">
        <h1 className="text-[36px] md:text-center lg:text-start text-start   font-semibold text-[#CBF281] ">
          {t("profileTitle")}
        </h1>
        <div className="flex flex-col  p-4 lg:p-0 items-center lg:flex-row  relative text-white">
          <div className="relative  flex-1 mx-auto md:w-1/3 md:max-w-md   lg:max-w-lg ">
            <div className=" relative rounded-xl z-10 flex flex-col items-start gap-6  ">
              <h2 className=" font-[400] text-lg sm:text-xl md:text-[30px] pb-4 ">
                {t("basicInfo")}
              </h2>
              {infoFields.map((field, idx) => (
                <p
                  key={idx}
                  className="flex w-full justify-between text-[#CBF281]   font-medium transform transition-all duration-300 hover:scale-105 "
                >
                  {t(field.title)}:{" "}
                  <span className="w-1/2  text-start font-normal">
                    {field.value}
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className="flex md:w-1/3 ">
            <img src={profileImage} alt="profileImageProfile" />
          </div>
          <div className="flex-1  mx-auto rounded-xl  md:w-1/3 md:max-w-md lg:max-w-lg ">
            <h2 className="text-start font-[400] text-lg sm:text-xl md:text-[30px]  text-white">
              {t("aboutMeTitle")}
            </h2>
            <p className="text-start text-base sm:text-lg md:text-sm dark:text-white py-4 ">
              {t(personelInfo[0].aboutMe)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
