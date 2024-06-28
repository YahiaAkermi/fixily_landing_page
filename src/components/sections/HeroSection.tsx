import { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  return (
    <section className="px-20 h-[734px] bg-secondary flex items-center justify-around font-lato w-full max-md:flex-col max-md:h-auto max-md:gap-5 max-md:pt-6">
      <div className="flex flex-col justify-around gap-4 max-md:items-center">
        <h1 className="text-[46px] font-semibold text-myblack">
          <Trans i18nKey="hero.h1" />
        </h1>
        <p className="text-lightblack  tracking-wide">{t("hero.subtitle")}</p>
        <div className="flex flex-1 items-center gap-5">
          <img src="/assets/images/apple.png" alt="" />
          <img src="/assets/images/google.png" alt="" />
        </div>
      </div>
      <div>
        <img
          src="/assets/images/hero_image.png"
          alt=""
          className="h-[589px] w-[419px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
