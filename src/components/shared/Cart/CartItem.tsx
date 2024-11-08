const CartItem = () => {
  const isSale = true;
  const price = 2300;
  const priceWithSale = 1300;
  return (
    <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5 relative border-b border-b-grey-light pb-4">
      <img
        className="w-[126px] h-[126px] object-contain"
        src="/products/01.png"
        alt="Product"
      />
      <div className="grid gap-2 text-left">
        <p className="text-sm text-[#434343] max-w-80">
          Бальзам-ополаскиватель для волос с экстрактами 3 черных семян и 7
          черных плодов
        </p>
        <h6 className="font-bold font-second text-lg tracking-[0.04em] text-black">
          Woosin R&B Black Food 3.7
        </h6>
        <p className="text-sm text-[#434343]">50 мл</p>
      </div>
      {/* CONTROLS TOP */}
      <div className="flex items-center gap-3 absolute top-0 right-0">
        <button className="bg-[#f6f6f6] rounded-full p-2 w-6 h-6 hover:bg-[#e6e6e6]">
          <img src="/minus.svg" alt="Minus" />
        </button>
        <p className="text-black">1</p>
        <button className="bg-[#f6f6f6] rounded-full p-2 w-6 h-6 hover:bg-[#e6e6e6]">
          <img src="/plus.svg" alt="Plus" />
        </button>
        <button className="hover:opacity-80">
          <img src="/x.svg" alt="delete" />
        </button>
      </div>

      {/* PRICES */}
      <div className=" vsm:absolute bottom-4 right-0">
        {isSale && (
          <p className="text-xs text-[#915167] text-right">
            Скидка {price - priceWithSale} руб
          </p>
        )}
        <div className="flex items-center gap-6 mt-1">
          {isSale && (
            <p className="text-lg text-[#b9b9b9] ">{priceWithSale} руб</p>
          )}
          <p className="text-lg text-black">{price} руб</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
