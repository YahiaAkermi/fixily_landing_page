type Step = {
  imgUrl: string;
  title: string;
};

type StepsProps = {
  steps: Step[];
};

const GridSteps = ({ steps }: StepsProps) => {
  return (
    <ul className="grid-container ">
      {steps.map((step) => (
        <li className="flex flex-col items-center gap-5">
          <img src={step.imgUrl} alt={step.title} className="object-cover" />
          <h3 className="text-[24px]  font-semibold text-myblack text-center">
            {step.title}
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default GridSteps;
