import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import GridList from "./shared/GridList";
import { categories } from "@/data/data";

const Categories = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);
  return (
    <section className="w-full flex flex-col justify-between items-center gap-9 my-5 font-lato">
      <h1 className="text-[46px] max-md:text-[24px] max-lg:text-[32px] font-semibold text-myblack text-center">
        {t("categories.h1")}
      </h1>
      <GridList categories={categories} />
      <button className="bg-primary w-[222px] h-[62px] rounded-full text-[20px] font-semibold text-myblack mt-3">
        {t("categories.btn_text")}
      </button>
    </section>
  );
};

export default Categories;
