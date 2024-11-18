import { useCartStore } from "../../../store/useCartStore";
import { useOrderStore } from "../../../store/useOrderStore";

const OrderRight = () => {
  const { cartItems, totalPrice } = useCartStore();
  const deliveryType = useOrderStore(state => state.orderInfo.deliveryType);

  return (
    <div className=" lg:w-1/3">
      <div className="flex items-center justify-between">
        <div>
          <b className="text-2xl font-bold">Ваш заказ</b> / 1 шт.
        </div>
        <button className="text-grey">Изменить</button>
      </div>
      {/* ITEMS */}
      <div className="mt-6 flex items-center gap-3 overflow-x-auto scrollbar pb-2">
        {cartItems.map((item) => (
          <img
            key={item.id}
            className="w-[100px] h-[86px] object-cover"
            src={item.img}
            alt={item.title}
          />
        ))}
      </div>

      {/* TOTAL */}
      <div className=" mt-6">
        <div className="border-b border-b-[#c4c4c4] pb-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-grey">Сумма заказа</p>{" "}
            <span className="text-sm">{totalPrice} руб</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-grey">Доставка</p>{" "}
            <span className="text-sm">{deliveryType}</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-self-end text-right">
          <p className="text-xs text-grey">Итого</p>
          <h6 className="text-lg">{totalPrice} руб</h6>
        </div>
      </div>
    </div>
  );
}

export default OrderRight