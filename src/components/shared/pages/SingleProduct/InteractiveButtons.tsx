import { toast } from "react-toastify";
import { useCartStore } from "../../../../store/useCartStore";
import { ProductType } from "../../../../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../ui/tooltip";
import { useState } from "react";

const InteractiveButtons = ({ product }: { product: ProductType }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isFav, setIsFav] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Товар добавлен в корзину!", { delay: 500 });
  };

  return (
    <div className="flex sm:grid grid-cols-2 xl:flex items-center gap-2 md:gap-5 mt-5">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            onClick={handleAddToCart}
            className="col-span-2 xl:col-span-1 bg-[#1a1a1a] text-white py-2 px-2 md:px-10  h-14 hover:opacity-80 "
          >
            Добавить в корзину
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white py-3 px-3 block">
            Вы можете добавить продукт в корзину
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            onClick={() => setIsFav(!isFav)}
            className="bg-[#1a1a1a] text-white p-4 h-14 hover:opacity-80 flex items-center justify-center"
          >
            <img
              className="w-6 h-6"
              src={isFav ? "/heart-white-fill.svg" : "/heart-white.svg"}
              alt="Favorite"
            />
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white py-3 px-3 block">
            Вы можете добавить продукт в избранное
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger className="bg-[#1a1a1a] text-white p-4 h-14 hover:opacity-80 flex items-center justify-center">
            <img src="/compare.svg" alt="Compare" />
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white py-3 px-3 block">
            Вы можете добавить продукт в сравнение
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default InteractiveButtons;
