import ChooseCity from "../../ChooseCity";

const ChangeCity = () => {
  return (
    <div className=" flex flex-start gap-[92px] text-left">
      <h6 className="text-xl font-bold w-1/3">Населенный пункт</h6>
      <div className="w-2/3">
        <ChooseCity className="!text-lg" />
      </div>
    </div>
  );
}

export default ChangeCity