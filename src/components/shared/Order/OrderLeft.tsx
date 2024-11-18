import { ChevronDown } from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import { useUserStore } from "../../../store/useUserStore";
import {
  ChangeAddress,
  ChangeCity,
  ChangeDate,
  ChangeDeliveryType,
  ChangePaymentType,
  ChangeUserData,
} from "./OrderSteps";
import { useOrderStore } from "../../../store/useOrderStore";
import { useCartStore } from "../../../store/useCartStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OrderLeft = ({ setOpen }: { setOpen: (b: boolean) => void }) => {
  const currentUser = useUserStore((state) => state.currentUser);
  const navigate = useNavigate();
  const { orderInfo, createOrder } = useOrderStore();

  const cartItems = useCartStore((state) => state.cartItems);
  if (!currentUser.id) return null;

  const [openedAccordeons, setOpenedAccordeons] = useState<number[]>([]);
  const handleToggleAccordeon = (id: number) => {
    if (openedAccordeons.includes(id)) {
      setOpenedAccordeons(
        openedAccordeons.filter((accordeonId) => accordeonId !== id)
      );
    } else {
      setOpenedAccordeons([...openedAccordeons, id]);
    }
  };

  const handleSubmit = async () => {
    if (!orderInfo.address) return toast.error("Пожалуйста, укажите адрес");
    if (!orderInfo.city) return toast.error("Пожалуйста, укажите город");

    const orderId = await createOrder(orderInfo, cartItems);

    if (orderId) {
      navigate(`/order/${orderId}`);
      setOpen(false);
    }
  };

  return (
    <div className="w-full md:w-auto lg:w-2/3 flex flex-col gap-14">
      {/* 1/3 */}
      <div>
        <div className=" flex items-start gap-10 group ">
          <p className="text-3xl text-grey group-hover:text-black duration-150">
            1/3
          </p>
          <button
            onClick={() => handleToggleAccordeon(1)}
            className="text-left w-full border-b border-b-grey-light pb-4"
          >
            <div>
              <div className="flex items-center justify-between w-full ">
                <h4 className="text-3xl font-medium text-grey group-hover:text-black duration-150">
                  Адрес и доставка
                </h4>{" "}
                <ChevronDown
                  className={cn(" duration-300", {
                    "rotate-180 ": openedAccordeons.includes(1),
                  })}
                  color="#585858"
                />
              </div>
              <p className="text-sm text-grey opacity-0 group-hover:opacity-100 duration-150">
                Выбрать способ доставки
              </p>
            </div>
          </button>
        </div>
        {/* 1/3 ACCORDEON */}
        <div
          className={cn("duration-300 text-left grid gap-20", {
            "max-h-0 overflow-hidden opacity-0 ": !openedAccordeons.includes(1),
            "max-h-[1000px] overflow-visible opacity-100 mt-12":
              openedAccordeons.includes(1),
          })}
        >
          {/* CITY */}
          <ChangeCity />
          {/* DELIVERY TYPE */}
          <ChangeDeliveryType />
          {/* ADDRESS */}
          <ChangeAddress />
          {/* DATE */}
          <ChangeDate />
        </div>
      </div>
      {/* 2/3 */}
      <div>
        <div className=" flex items-start gap-10 group ">
          <p className="text-3xl text-grey group-hover:text-black duration-150">
            2/3
          </p>
          <button
            onClick={() => handleToggleAccordeon(2)}
            className="text-left w-full border-b border-b-grey-light pb-4"
          >
            <div>
              <div className="flex items-center justify-between w-full ">
                <h4 className="text-3xl font-medium text-grey group-hover:text-black duration-150">
                  Получатель
                </h4>{" "}
                <ChevronDown
                  className={cn(" duration-300", {
                    "rotate-180 ": openedAccordeons.includes(2),
                  })}
                  color="#585858"
                />
              </div>
              <p className="text-sm text-grey opacity-0 group-hover:opacity-100 duration-150">
                Данные о получателе
              </p>
            </div>
          </button>
        </div>
        {/* 2/3 ACCORDEON */}
        <div
          className={cn("duration-300 ", {
            "max-h-0 overflow-hidden opacity-0": !openedAccordeons.includes(2),
            "max-h-[1000px] overflow-visible opacity-100 mt-12":
              openedAccordeons.includes(2),
          })}
        >
          {/* USER DATA */}
          <ChangeUserData />
        </div>
      </div>
      {/* 3/3 */}
      <div>
        <div className=" flex items-start gap-10 group ">
          <p className="text-3xl text-grey group-hover:text-black duration-150">
            3/3
          </p>
          <button
            onClick={() => handleToggleAccordeon(3)}
            className="text-left w-full border-b border-b-grey-light pb-4"
          >
            <div>
              <div className="flex items-center justify-between w-full ">
                <h4 className="text-3xl font-medium text-grey group-hover:text-black duration-150">
                  Оплата
                </h4>{" "}
                <ChevronDown
                  className={cn(" duration-300", {
                    "rotate-180 ": openedAccordeons.includes(3),
                  })}
                  color="#585858"
                />
              </div>
              <p className="text-sm text-grey opacity-0 group-hover:opacity-100 duration-150">
                Выбрать способ оплаты
              </p>
            </div>
          </button>
        </div>
        {/* 3/3 ACCORDEON */}
        <div
          className={cn("duration-300 ", {
            "max-h-0 overflow-hidden opacity-0": !openedAccordeons.includes(3),
            "max-h-[1000px] overflow-visible opacity-100 mt-12":
              openedAccordeons.includes(3),
          })}
        >
          {/* PAYMENT TYPE */}
          <ChangePaymentType />
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="rounded-none text-lg tracking-[0.04em] max-w-[350px] ml-auto w-full"
      >
        Оформить заказ
      </Button>
    </div>
  );
};

export default OrderLeft;
