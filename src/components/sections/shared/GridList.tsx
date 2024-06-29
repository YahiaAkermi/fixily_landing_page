type Category = {
  id: number;
  name_ar: string;
  name_en: string;
  image: string;
};

type CategoryProps = {
  categories: Category[];
  language: string; // Assume language is passed as a prop
};

const GridList = ({ categories, language }: CategoryProps) => {
  return (
    <ul className="grid-container">
      {categories.map((category) => (
        <li key={category.id} className="flex flex-col items-center gap-5">
          <img
            src={category.image}
            alt={language === "ar" ? category.image : category.name_en}
            className="object-cover"
          />
          <h3 className="text-[24px] font-semibold text-myblack text-center">
            {language === "ar" ? category.name_ar : category.name_en}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default GridList;
