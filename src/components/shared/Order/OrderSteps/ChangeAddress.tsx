import { useOrderStore } from "../../../../store/useOrderStore";
import { Button } from "../../../ui/button";
import ChangeAddressMenu from "./ChangeAddressMenu";
const ChangeAddress = () => {
  const orderInfo = useOrderStore((state) => state.orderInfo);
  return (
    <div className=" flex flex-col sm:flex-row flex-start gap-3 md:gap-[92px] text-left">
      <h6 className="text-xl font-bold sm:w-1/3">Адрес</h6>
      <div className="w-2/3">
        {!orderInfo.address ? (
          <span className="text-pink text-right block">Адреса нет</span>
        ) : (
          <p className="text-lg">{orderInfo.address}</p>
        )}

        <ChangeAddressMenu>
          <Button className="bg-grey-light text-black mt-3" variant={"outline"}>
            Изменить адрес
          </Button>
        </ChangeAddressMenu>
      </div>
    </div>
  );
};

export default ChangeAddress;
