import { cn } from "../../../../lib/utils";
import { useOrderStore } from "../../../../store/useOrderStore";

const ChangePaymentType = () => {
  const orderInfo = useOrderStore((state) => state.orderInfo);
  const changePaymentType = useOrderStore((state) => state.changePaymentType);
  return (
    <div className="max-w-[400px] ml-auto">
      <p className="text-sm">
        бесконтактная доставка действует для всех заказов, оплаченных онлайн
      </p>
      <div className="flex flex-col sm:flex-row items-center mt-2">
        <button
          onClick={() => changePaymentType("Card")}
          className={cn(
            " text-left p-2 border border-grey-light w-[124px] h-[60px] flex items-center justify-center ",
            {
              "border-black": orderInfo.paymentType === "Card",
            }
          )}
        >
          <img src="/cards.svg" alt="Card" />
        </button>
        <button
          onClick={() => changePaymentType("Gpay")}
          className={cn(
            " text-left p-2 border border-grey-light w-[124px] h-[60px] flex items-center justify-center ",
            {
              "border-black": orderInfo.paymentType === "Gpay",
            }
          )}
        >
          <img src="/googlePay.svg" alt="Google Pay" />
        </button>
        <button
          onClick={() => changePaymentType("Cash")}
          className={cn(
            " text-left p-2 border border-grey-light w-[124px] h-[60px] flex items-center justify-center text-xs",
            {
              "border-black": orderInfo.paymentType === "Cash",
            }
          )}
        >
          <p>При получении</p>
        </button>
      </div>
      <p className="text-sm text-[#515151] mt-2">Оплата курьеру банковской картой или наличными.</p>
      <p className="text-sm text-[#515151] mt-2">
        Обратите внимание! Подарочные сертификаты и бонусы к оплате не
        принимаются.
      </p>
    </div>
  );
};

export default ChangePaymentType;
