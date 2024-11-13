import { ProductType } from "../../../../types";

const FavoritesListItem = ({ product }: { product: ProductType }) => {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        {/* IMG */}
        <div className="max-w-24">
          <img src="/products/06.png" alt="Product img" />
        </div>
        <div>
          <p className="text-sm text-[#434343]">
            Комплекс для выпрямления волос c экстрактом хны
          </p>
          <h6 className="font-second text-lg tracking-[0.04em]">
            R&B Henna Spa Therapy Magic Straight Cream
          </h6>
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              <button>
                <img src="/heart-black-fill.svg" alt="Heart" />
              </button>
              <button>
                <img src="/cart.svg" alt="Cart" />
              </button>
            </div>
            <div className="flex items-center gap-6">
              {product.isSale && (
                <span className="text-lg text-grey line-through">2300 руб</span>
              )}{" "}
              <p>1300 руб</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesListItem;
