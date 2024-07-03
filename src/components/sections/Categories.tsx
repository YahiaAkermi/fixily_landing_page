import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GridList from "./shared/GridList";
// import { categories } from "@/data/data";
import axios from "axios";
import Explore from "./Explore";

const Categories = () => {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState(null || []);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || i18n.language
  );

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fixily.up.railway.app/api/v1/services/categories/"
        );
        setCategories(response.data);
        if (response.data) console.log(JSON.stringify(categories));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-full flex flex-col justify-between items-center gap-9 my-5 font-lato">
      <Explore />
      <h1 className="text-[46px] max-md:text-[24px] max-lg:text-[32px] font-semibold text-myblack text-center">
        {t("categories.h1")}
      </h1>
      <GridList categories={categories} language={language} />
      <button className="bg-primary w-[222px] h-[62px] rounded-full text-[20px] font-semibold text-myblack mt-3">
        {t("categories.btn_text")}
      </button>
    </section>
  );
};

export default Categories;
