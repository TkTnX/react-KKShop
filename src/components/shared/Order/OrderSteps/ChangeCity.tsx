import ChooseCity from "../../ChooseCity";

const ChangeCity = () => {
  return (
    <div className=" flex flex-col sm:flex-row flex-start gap-3 md:gap-[92px] text-left">
      <h6 className="text-xl font-bold sm:w-1/3">Населенный пункт</h6>
      <div className="w-2/3">
        <ChooseCity className="!text-lg" />
      </div>
    </div>
  );
};

export default ChangeCity;
