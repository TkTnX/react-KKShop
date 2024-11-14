import { toast } from "react-toastify";
import { useCartStore } from "../../../../store/useCartStore";
import { ProductType } from "../../../../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../ui/tooltip";
import { useEffect, useState } from "react";
import { useFavoritesStore } from "../../../../store/useFavorites";
import { cn } from "../../../../lib/utils";
import { useUserStore } from "../../../../store/useUserStore";
import { Link } from "react-router-dom";

const InteractiveButtons = ({ product }: { product: ProductType }) => {
  const currentUser = useUserStore((state) => state.currentUser);
  const {addToCart, loading} = useCartStore();
  const switchFavorites = useFavoritesStore((state) => state.switchFavorites);
  const { fetchFavorites, favorites } = useFavoritesStore();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favorites.some((item) => item.id === product.id));
    fetchFavorites();
  }, []);



  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Товар добавлен в корзину!", { delay: 500 });
  };

  const handleSwitchFavorite = () => {
    switchFavorites(product);
    setIsFav(!isFav);
    toast.success(`Товар ${isFav ? "удален из" : "добавлен в"} избранное`, {
      delay: 500,
    });
  };

  if(!currentUser.id) return (
    <Link to="/sign-in" className="bg-black text-white py-3 px-3 block text-center hover:opacity-80 text-xs mt-2">
      Войдите в аккаунт, чтобы добавить товар в корзину
    </Link>
  );

  return (
    <div
      className={cn(
        "flex sm:grid grid-cols-2 xl:flex items-center gap-2 md:gap-5 mt-5",
        {
          "pointer-events-none opacity-50": loading,}
      )}
    >
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
            onClick={handleSwitchFavorite}
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
