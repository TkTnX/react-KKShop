import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import CartItem from "./CartItem";

const Cart = ({ children }: { children: React.ReactNode }) => {
  const isAuth = false;

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-full sm:min-w-[640px] lg:min-w-[860px] lg:px-[104px] overflow-y-auto">
        {!isAuth ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl sm:text-5xl font-bold">
                Покупай со скидкой
              </h2>
              <p className="mt-4 text-black">
                Зарегистрируйтесь, чтобы получить скидку по бонусной карте,
                начать копить бонусы и оплачивать покупки подарочными
                сертификатами.
              </p>
              <a
                className="block py-3 bg-black hover:opacity-80 text-white mt-8"
                href="#!"
              >
                Войти / Зарегистрироваться
              </a>
              <button className="text-[#3f3f3f] mt-4">
                Продолжить как гость
              </button>
            </div>
          </div>
        ) : (
          <SheetHeader>
            <SheetTitle className="text-5xl font-bold flex flex-col gap-2 sm:block">
              Корзина <span className="font-normal text-3xl">/ 1 шт.</span>
            </SheetTitle>
            <SheetDescription>
              <p className="mt-8 text-3xl">быстрая доставка</p>
              <div className="grid gap-8 mt-8 max-h-[550px] overflow-y-auto scrollbar pr-2">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </div>
              {/* CONTROLS */}
              <div className="mt-4">
                <div className="flex items-center gap-9 justify-self-end">
                  <p className="text-lg flex flex-col gap-2 text-[#915167]">
                    <span className="text-xs text-[#545454] text-right">
                      Скидка
                    </span>
                    -2000 руб
                  </p>
                  <p className="text-lg flex flex-col gap-2">
                    <span className="text-xs text-[#545454] text-right">
                      К оплате
                    </span>
                    2600 руб
                  </p>
                </div>
                <button className="text-center py-4 bg-black w-full text-white mt-2 hover:opacity-80">
                  Оформить заказ
                </button>
              </div>
            </SheetDescription>
          </SheetHeader>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
