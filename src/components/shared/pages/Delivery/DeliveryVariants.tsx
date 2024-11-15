import { Link } from "react-router-dom";
import { useUserStore } from "../../../../store/useUserStore";
import { cities } from "../../../../contants";
import CartItem from "../../Cart/CartItem";
import { useCartStore } from "../../../../store/useCartStore";

const DeliveryVariants = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  const { cartItems, totalPrice } = useCartStore();

  return (
    <div className="mt-[74px] flex flex-col-reverse lg:flex-row items-stretch justify-between gap-12 ">
      {/* LEFT */}
      <div className="flex flex-col ">
        <h3 className="font-bold text-3xl border-b border-b-grey-light pb-5">
          Варианты доставки в г.{currentUser.city || "Москва"}
        </h3>
        <p className="mt-4 text-[#565656]">
          <b className="text-xl text-black">Доставка от 400 ₽</b> <br /> при
          заказе от 40 000 ₽ - Бесплатно
        </p>
        <div className="grid mt-4">
          <b className="text-xl font-bold">Самовывоз</b>
          <Link
            className="text-pink font-normal hover:underline w-fit"
            to="/contacts"
          >
            {cities.length} магазинов
          </Link>
        </div>

        <div className="mt-6">
          {cartItems && cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  product={item}
                  loading={false}
                  isCart={false}
                />
              ))}
              <div className="mt-2">
                {totalPrice < 40000 ? (
                  <p className="text-pink ">
                    Доставка {totalPrice * 0.1 + 400} руб
                  </p>
                ) : (
                  <p>
                    Доставка <b className="text-pink">бесплатно</b>
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-1 bg-grey-light py-6 px-9">
              <div className="w-10 h-10 md:w-auto md:h-auto">
                <img src="/cartIconBig.svg" alt="Cart" />
              </div>
              <p className="text-xs md:text-lg text-grey">
                Добавьте товары в корзину, и мы рассчитаем точные условия
                доставки для вашего заказа
              </p>
            </div>
          )}
        </div>
        {cartItems && cartItems.length === 0 && (
          <Link
            to="/catalog"
            className="bg-black text-white py-1 px-10 w-full text-lg mt-auto hover:opacity-80 block text-center"
          >
            Перейти в каталог
          </Link>
        )}
      </div>
      {/* RIGHT */}
      <div>
        <img src="/deliveryImg.jpg" alt="Image" />
      </div>
    </div>
  );
};

export default DeliveryVariants;
