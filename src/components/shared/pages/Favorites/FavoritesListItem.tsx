import { toast } from "react-toastify";
import { useFavoritesStore } from "../../../../store/useFavorites";
import { ProductType } from "../../../../types";
import { useCartStore } from "../../../../store/useCartStore";


const FavoritesListItem = ({ product }: { product: ProductType }) => {
  const { switchFavorites, error } = useFavoritesStore();
  const {addToCart, error: cartError} = useCartStore() 
  const handleRemoveFromFavorites = async () => {
    await switchFavorites(product);

    if (error) {
      console.log(error);
      toast.error("Что-то пошло не так",{delay: 500});
    } else {
      toast.success("Товар удален из избранного",{delay: 500});
    }
  };


  const handleAddToCart = () => {
    addToCart(product);
    if (cartError) {
      console.log(cartError);
      toast.error("Что-то пошло не так");
    } else {
      toast.success("Товар добавлен в корзину!");
    }
  }

  return (
    <div className=" sm:min-w-[532px] w-fit">
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        {/* IMG */}
        <div className="max-w-24">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="w-full">
          <p className="text-sm text-[#434343]">{product.desc}</p>
          <h6 className="font-second text-lg tracking-[0.04em]">
            {product.title}
          </h6>
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              <button onClick={handleRemoveFromFavorites}>
                <img src="/heart-black-fill.svg" alt="Heart" />
              </button>
              <button onClick={handleAddToCart}>
                <img src="/cart.svg" alt="Cart" />
              </button>
            </div>
            <div className="flex items-center gap-6">
              {product.isSale && (
                <span className="text-lg text-grey line-through">
                  {product.price} руб
                </span>
              )}{" "}
              <p>
                {product.isSale ? product.priceWithSale : product.price} руб
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesListItem;
