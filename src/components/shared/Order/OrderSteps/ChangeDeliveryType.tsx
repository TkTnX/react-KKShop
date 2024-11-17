import { cn } from "../../../../lib/utils";
import { useOrderStore } from "../../../../store/useOrderStore";

const ChangeDeliveryType = () => {
  const changeDeliveryType = useOrderStore((state) => state.changeDeliveryType);
  const orderInfo = useOrderStore((state) => state.orderInfo);
  return (
    <div className=" flex flex-start gap-[92px] ">
      <h6 className="text-xl font-bold w-1/3">Способ доставки</h6>
      <div className="flex items-center w-2/3">
        <button
          onClick={() => changeDeliveryType("delivery")}
          className={cn(" text-left p-2 border border-grey-light", {
            "border-black": orderInfo.deliveryType === "Курьер",
          })}
        >
          <b className="font-bold text-lg">Курьер</b>
          <p>Служба доставки</p>
          <span className="inline-block text-[#616161] mt-4">Бесплатно</span>
        </button>
        <button
          onClick={() => changeDeliveryType("pickup")}
          className={cn(" text-left p-2 border border-grey-light", {
            "border-black": orderInfo.deliveryType === "Самовывоз",
          })}
        >
          <b className="font-bold text-lg">Самовывоз</b>
          <p>Пункты выдачи</p>
          <span className="inline-block text-[#616161] mt-4">Бесплатно</span>
        </button>
      </div>
    </div>
  );
};

export default ChangeDeliveryType;
