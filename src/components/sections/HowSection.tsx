import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

const HowSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <section className="h-[1008px] w-full bg-secondary py-14 font-lato px-[180px]">
      <div className="flex flex-col justify-between gap-8">
        <h1 className="text-[46px] max-md:text-[24px] max-lg:text-[32px] font-semibold text-myblack ">
          {t("howSection.h1")}
        </h1>
        <p className="text-lightblack">
          <Trans i18nKey="howSection.para" />
        </p>
      </div>
    </section>
  );
};

export default HowSection;
