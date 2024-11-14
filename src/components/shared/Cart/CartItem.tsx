import { cn } from "../../../lib/utils";
import { useCartStore } from "../../../store/useCartStore";
import { CartItemType } from "../../../types";

const CartItem = ({ product, loading }: { product: CartItemType; loading: boolean }) => {
  const { removeFromCart, increaseCount, decreaseCount } = useCartStore();
  return (
    <div
      className={cn(
        "flex flex-col items-start sm:flex-row sm:items-center gap-5 relative border-b border-b-grey-light pb-4",
        { "opacity-50 pointer-events-none": loading }
      )}
    >
      <img
        className="w-[126px] h-[126px] object-contain"
        src={product.img}
        alt={product.title}
      />
      <div className="grid gap-2 text-left">
        <p className="text-sm text-[#434343] max-w-80">{product.desc}</p>
        <h6 className="font-bold font-second text-lg tracking-[0.04em] text-black">
          {product.title}
        </h6>
        <p className="text-sm text-[#434343]">{product.size} мл</p>
      </div>
      {/* CONTROLS TOP */}
      <div className="flex items-center gap-3 absolute top-0 right-0">
        <button
          disabled={product.count === 1}
          onClick={() => decreaseCount(product)}
          className="bg-[#f6f6f6] rounded-full p-2 w-6 h-6 hover:bg-[#e6e6e6] disabled:opacity-50 disabled:pointer-events-none"
        >
          <img src="/minus.svg" alt="Minus" />
        </button>
        <p className="text-black">{product.count}</p>
        <button
          onClick={() => increaseCount(product)}
          className="bg-[#f6f6f6] rounded-full p-2 w-6 h-6 hover:bg-[#e6e6e6]"
        >
          <img src="/plus.svg" alt="Plus" />
        </button>
        <button
          onClick={() => removeFromCart(product)}
          className="hover:opacity-80"
        >
          <img src="/x.svg" alt="delete" />
        </button>
      </div>

      {/* PRICES */}
      <div className=" vsm:absolute bottom-4 right-0">
        {product.isSale && (
          <p className="text-xs text-[#915167] text-right">
            Скидка {(product.price - product.priceWithSale!) * product.count}{" "}
            руб
          </p>
        )}
        <div className="flex items-center gap-6 mt-1">
          <p
            className={cn("text-lg text-black", {
              "text-[#b9b9b9]": product.isSale,
            })}
          >
            {product.price * product.count} руб
          </p>
          {product.isSale && (
            <p className="text-lg text-black ">
              {product.priceWithSale! * product.count} руб
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
