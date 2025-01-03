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
import { useEffect, useState } from "react";
import Order from "../Order/Order";

const Cart = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const currentUser = useUserStore((state) => state.currentUser);
  const { cartItems, loading, error, totalPrice, fetchCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="relative">
        {children}

        {cartItems.length > 0 && (
          <Badge className="absolute -right-2 -top-2 w-[13px]  flex items-center justify-center text-xs">
            {cartItems.length}
          </Badge>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:min-w-[640px] lg:min-w-[860px] lg:px-[104px] overflow-y-auto">
      <button className="absolute right-3 sm:right-12 top-8" onClick={() => setOpen(false)}>
        <img src="/x-md.svg" alt="CLOSE" />
      </button>
        {error && currentUser.id && (
          <p className="text-red">Произошла ошибка</p>
        )}
        {loading && !error && <p className="text-pink">Загрузка...</p>}
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
                {cartItems.map((item) => (
                  <CartItem key={item.id} product={item} loading={loading} />
                ))}
              </div>
              {/* CONTROLS */}
              <div className="mt-4">
                <div className="flex items-center gap-9 justify-self-end">
                  <p className="text-lg flex flex-col gap-2">
                    <span className="text-xs text-[#545454] text-right">
                      К оплате
                    </span>
                    {totalPrice} руб
                  </p>
                </div>
                <Order setCloseCartModal={setOpen} loading={loading}>
                  <button
                    disabled={loading}
                    className="text-center py-4 bg-black w-full text-white mt-2 hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Оформить заказ
                  </button>
                </Order>
              </div>
            </div>
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
