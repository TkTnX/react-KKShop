import { useState } from "react";
import { useOrderStore } from "../../../../store/useOrderStore";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
const ChangeAddress = () => {
  const [openChangeAddress, setOpenChangeAddress] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const changeAddress = useOrderStore((state) => state.changeAddress);
  const orderInfo = useOrderStore((state) => state.orderInfo);
  const handleSubmit = () => {
    if (inpValue !== "") {
      changeAddress(inpValue);
      setOpenChangeAddress(false);
      setInpValue("");
    }
  };

  return (
    <div className=" flex flex-start gap-[92px] text-left">
      <h6 className="text-xl font-bold w-1/3">Адрес</h6>
      <div className="w-2/3">
        {!orderInfo.address ? (
          <span className="text-pink text-right block">Адреса нет</span>
        ) : (
          <p className="text-lg">{orderInfo.address}</p>
        )}
        {openChangeAddress && (
          <>
            <Input
              disabled={!openChangeAddress}
              onChange={(e) => setInpValue(e.target.value)}
              value={inpValue}
              placeholder="Ваш адрес"
              className="mt-2"
            />
            <Button onClick={handleSubmit} className="mr-2">
              Применить
            </Button>
          </>
        )}
        <Button
          onClick={() => setOpenChangeAddress(!openChangeAddress)}
          variant={"outline"}
          className="bg-grey-light text-black mt-3"
        >
          Изменить адрес
        </Button>
      </div>
    </div>
  );
};

export default ChangeAddress;
