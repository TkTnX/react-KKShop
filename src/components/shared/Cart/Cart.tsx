import { Link } from "react-router-dom";
import { useCartStore } from "../../../store/useCartStore";
import { useUserStore } from "../../../store/useUserStore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CartItem from "./CartItem";
import { Badge } from "../../ui/badge";
import { CartItemType } from "../../../types";
import { useEffect, useState } from "react";

const Cart = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useUserStore((state) => state.currentUser);
  const { cartItems, loading, error, totalPrice, totalPriceWithSale } =
    useCartStore();
  const [cartItemsCurrent, setCartItemsCurrent] = useState<CartItemType[]>(
    currentUser.cartItems || []
  );

  useEffect(() => {
    if (currentUser.cartItems && currentUser.cartItems.length > 0) {
      cartItemsCurrent.push(...currentUser.cartItems);
      setCartItemsCurrent(currentUser.cartItems);
    } else {
      setCartItemsCurrent(cartItems);
    }
  }, [currentUser, cartItems]);

  console.log({
    currentUser: currentUser.cartItems,
    cartItems,
    cartItemsCurrent,
  });
  return (
    <Sheet>
      <SheetTrigger className="relative">
        {children}

        {cartItems.length > 0 && (
          <Badge className="absolute -right-2 -top-2 w-[13px]  flex items-center justify-center text-xs">
            {cartItems.length}
          </Badge>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:min-w-[640px] lg:min-w-[860px] lg:px-[104px] overflow-y-auto">
        {error && <p className="text-red">Произошла ошибка</p>}
        {loading && <p className="text-pink">Загрузка...</p>}
        {!currentUser.id || cartItems.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <SheetTitle className="text-3xl sm:text-5xl font-bold">
                Покупай со скидкой
              </SheetTitle>
              <SheetDescription className="mt-4 text-black">
                Зарегистрируйтесь или добавьте товар в корзину, чтобы получить
                скидку по бонусной карте, начать копить бонусы и оплачивать
                покупки подарочными сертификатами.
              </SheetDescription>
              {!currentUser.id && (
                <Link
                  to="/sign-in"
                  className="block py-3 bg-black hover:opacity-80 text-white mt-8"
                >
                  Войти / Зарегистрироваться
                </Link>
              )}
            </div>
          </div>
        ) : (
          <SheetHeader>
            <SheetTitle className="text-5xl font-bold flex flex-col gap-2 sm:block">
              Корзина{" "}
              <span className="font-normal text-3xl">
                / {cartItems.length} шт.
              </span>
            </SheetTitle>
            <div>
              <SheetDescription className="mt-8 text-3xl">
                быстрая доставка
              </SheetDescription>
              <div className="grid gap-8 mt-8 max-h-[550px] overflow-y-auto scrollbar pr-2">
                {cartItemsCurrent.map((item) => (
                  <CartItem key={item.id} product={item} />
                ))}
              </div>
              {/* CONTROLS */}
              <div className="mt-4">
                <div className="flex items-center gap-9 justify-self-end">
                  {totalPriceWithSale > 0 && (
                    <p className="text-lg flex flex-col gap-2 text-[#915167]">
                      <span className="text-xs text-[#545454] text-right">
                        Скидка
                      </span>
                      -{totalPriceWithSale} руб
                    </p>
                  )}
                  <p className="text-lg flex flex-col gap-2">
                    <span className="text-xs text-[#545454] text-right">
                      К оплате
                    </span>
                    {totalPrice} руб
                  </p>
                </div>
                <button className="text-center py-4 bg-black w-full text-white mt-2 hover:opacity-80">
                  Оформить заказ
                </button>
              </div>
            </div>
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
