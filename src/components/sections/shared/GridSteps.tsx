import { useEffect } from "react";
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
};

const GridSteps = ({ steps }: StepsProps) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <ul className="grid-steps w-full">
        {steps.map((step, index) => (
          <li className="flex flex-col items-center gap-5">
            <img
              src={step.imgUrl}
              alt={step.title_fr}
              className="object-cover h-[250px] w-[250px]"
            />
            <div className="flex flex-col gap-3 text-center">
              <h3 className="text-[24px]  font-semibold text-myblack text-center">
                {`${t("howSection.etape")} ${index + 1}`}
              </h3>
              <p className="text-[24px]  font-semibold text-myblack text-center">
                {navigator.language.substring(0, 2) === "ar"
                  ? step.title_ar
                  : step.title_fr}
              </p>
              <p className="text-lightblack">
                {navigator.language.substring(0, 2) === "ar"
                  ? step.content_ar
                  : step.content_fr}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GridSteps;
