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
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-full sm:min-w-[640px] lg:min-w-[860px] lg:px-[104px] overflow-y-auto">
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
              <button className="text-center py-4 bg-black w-full text-white mt-2 hover:opacity-80">Оформить заказ</button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
