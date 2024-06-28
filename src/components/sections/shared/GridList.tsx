type Category = {
  imgUrl: string;
  title: string;
};

type CategoryProps = {
  categories: Category[];
};

const GridList = ({ categories }: CategoryProps) => {
  return (
    <ul className="grid-container ">
      {categories.map((category) => (
        <li className="flex flex-col items-center gap-5">
          <img
            src={category.imgUrl}
            alt={category.title}
            className="object-cover"
          />
          <h3 className="text-[24px]  font-semibold text-myblack text-center">
            {category.title}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default GridList;
