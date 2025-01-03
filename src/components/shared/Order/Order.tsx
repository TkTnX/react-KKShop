import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { useState } from "react";
import OrderRight from "./OrderRight";
import OrderLeft from "./OrderLeft";

const Order = ({
  children,
  loading,
  setCloseCartModal,
}: {
  children: React.ReactNode;
  loading: boolean;
  setCloseCartModal: (b: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleCloseAll = () => {
    setOpen(false);
    setCloseCartModal(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        disabled={loading}
        className="text-center py-4 bg-black w-full text-white mt-2 hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none"
        asChild
      >
        {children}
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-full p-0 flex flex-col overflow-y-auto md:scrollbar "
      >
        {/* TOP */}
        <div className="flex items-center justify-between pt-8 px-5">
          <button onClick={() => setOpen(false)}>
            <img src="/arrow-left-big.svg" alt="Back!" />
          </button>
          <Link onClick={handleCloseAll} to="/">
            <img className="max-w-[150px] vsm:w-auto vsm:h-auto" src="/logoLg.png" alt="Logo" />
          </Link>
          <button onClick={handleCloseAll}>
            <SheetTitle>
              <img src="/x-big.svg" alt="Close!" />
            </SheetTitle>
          </button>
        </div>
        <SheetDescription></SheetDescription>
        <div className="max-w-[1200px] mx-auto mt-20 flex items-start justify-between gap-3 lg:gap-[120px] px-3 flex-col-reverse md:flex-row">
          {/* LEFT */}
          <OrderLeft setCloseCartModal={setCloseCartModal} setOpen={setOpen} />
          {/* RIGHT */}
          <OrderRight setOpen={setOpen} />
        </div>
        <SheetFooter className="bg-black text-white mt-auto">
          <div className="container flex items-center md:justify-between py-11 flex-wrap gap-3 justify-center flex-col vsm:flex-row">
            <div className="flex items-center gap-11 flex-col vsm:flex-row">
              <div className="grid gap-1">
                <p className="text-[#acacac]">служба поддержки 24/7</p>
                <a
                  className="hover:text-pink duration-150"
                  href="tel:88007707021"
                >
                  8 800 770 70 21
                </a>
              </div>
              <div className="grid gap-1">
                <p className="text-[#acacac]">электронная почта</p>
                <a
                  className="hover:text-pink duration-150"
                  href="mailto:krasnoyarsk@kkshop.ru"
                >
                  krasnoyarsk@kkshop.ru
                </a>
              </div>
            </div>
            <div className="flex flex-col vsm:flex-row items-center gap-7">
              <a className="text-[#acacac] hover:text-white" href="#!">
                заказы и доставка
              </a>
              <a className="text-[#acacac] hover:text-white" href="#!">
                возврат товара
              </a>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Order;
