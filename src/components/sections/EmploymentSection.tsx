import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const EmploymentSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <section className="h-auto w-full flex justify-center items-center font-lato  py-8">
      <div className="flex max-xl:flex-col max-xl:gap-4 gap-5 items-center max-md:w-full max-md:px-5">
        <img
          src="/assets/images/workers.png"
          alt="workers"
          className="object-cover h-[363px] w-[345px] "
        />
        <div className="relative max-md:bg-myblue max-md:rounded-2xl max-md:py-2 ">
          <img
            src="/assets/images/shape.png"
            alt="shape"
            className="max-md:hidden w-[767px] h-auto max-md:w-[300px] "
          />
          <div className="md:absolute top-[60px] left-[75px] z-10 ">
            <div className="w-full flex flex-col justify-between gap-3 px-4 py-3 max-md:gap-6">
              <h1 className="text-[46px] max-md:text-[24px] max-lg:text-[32px] font-bold text-white ">
                {t("workersSection.h1")}
              </h1>
              <p className="text-[20px]  font-semibold text-white word-spacing">
                {<Trans i18nKey="workersSection.subtitle" />}
              </p>
              <p className="text-base   text-white word-spacing">
                {<Trans i18nKey="workersSection.para" />}
              </p>
              <div className="flex justify-center items-center max-md:pt-1 pt-4 ">
                <button className="bg-primary text-myblack text-[18px] lg:text-[20px]  rounded-3xl lg:w-[222px] w-[150px] py-2 lg:h-[62px] font-semibold font-lato ">
                  {t("navbar.rejoindre")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmploymentSection;
