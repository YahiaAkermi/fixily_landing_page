import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Explore = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <section className="h-[400px] flex justify-center items-center xl:px-[400px] max-lg:px-[200px] max-md:px-[30px] font-lato">
      <div className="w-full  flex flex-col justify-around items-center gap-5">
        <h1 className="text-[46px] max-md:text-[24px] max-lg:text-[32px] font-semibold text-myblack text-center">
          {t("explore.h1")}
        </h1>
        <div className="min-w-[448px] h-[86px] border border-myblue rounded-lg relative p-3 flex justify-between items-center">
          <input
            type="email"
            placeholder={t("explore.placeholder")}
            className="border-none ring-0 outline-none ml-2 h-[80px] w-[70%]"
          />

          <div className="bg-myblue w-[55px] h-[55px] flex justify-center items-center rounded-lg absolute right-2 hover:cursor-pointer">
            <img src="/assets/images/loop.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
