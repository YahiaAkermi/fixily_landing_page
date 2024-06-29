import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import GridSteps from "./shared/GridSteps";
import { steps } from "@/data/data";

const HowSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <section className="h-auto w-full bg-secondary py-14 font-lato px-[180px] max-md:px-7 ">
      <div className="flex flex-col justify-between gap-8">
        <h1 className="text-[46px] max-md:text-[24px] max-lg:text-[32px] font-semibold text-myblack ">
          {t("howSection.h1")}
        </h1>
        <p className="text-lightblack">
          <Trans i18nKey="howSection.para" />
        </p>
        <GridSteps steps={steps} showEtape={true} />
      </div>
    </section>
  );
};

export default HowSection;
