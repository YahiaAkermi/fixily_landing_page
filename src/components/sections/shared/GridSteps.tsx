import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Step = {
  imgUrl: string;
  title_fr: string;
  title_ar: string;
  content_fr: string;
  content_ar: string;
};

type StepsProps = {
  steps: Step[];
  showEtape: boolean;
};

const GridSteps = ({ steps, showEtape }: StepsProps) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(navigator.language);

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
    setLanguage(lng);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-5 font-lato">
      <ul
        className={`grid-steps w-full ${
          language.substring(0, 2) === "ar" ? "rtl" : ""
        }`}
      >
        {(language.substring(0, 2) === "ar" ? [...steps].reverse() : steps).map(
          (step, index) => (
            <li key={index} className="flex flex-col items-center gap-5">
              <img
                src={step.imgUrl}
                alt={
                  language.substring(0, 2) === "ar"
                    ? step.title_ar
                    : step.title_fr
                }
                className={`object-cover h-[250px] w-[250px] ${
                  !showEtape ? "rounded-lg w-[300px]" : ""
                }`}
              />
              <div
                className={`flex flex-col gap-3 text-center ${
                  !showEtape ? "max-sm:px-3 max-w-[400px]" : ""
                }`}
              >
                {showEtape && (
                  <h3 className="text-[24px] font-semibold text-myblack text-center">
                    {`${t("howSection.etape")} ${index + 1}`}
                  </h3>
                )}
                <p className="text-[24px] font-semibold text-myblack text-center">
                  {language.substring(0, 2) === "ar"
                    ? step.title_ar
                    : step.title_fr}
                </p>
                <p className="text-lightblack">
                  {language.substring(0, 2) === "ar"
                    ? step.content_ar
                    : step.content_fr}
                </p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default GridSteps;
