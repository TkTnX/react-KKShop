import { Link } from "react-router-dom";
import { ProductType } from "../types";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="border-2 border-lightGray">
      <Link
        to={`/catalog/${product.id}`}
        className="flex items-center justify-center  md:h-[400px] relative"
      >
        {product.isSale && (
          <div className="text-white bg-[#ff3465] w-7 h-7 md:w-14 md:h-14 flex items-center justify-center absolute top-0 left-0 font-medium md:font-bold text-xs">
            SELL
          </div>
        )}
        <img src={product.img} alt={product.title} />
      </Link>
      <div className="mt-3 p-6 pb-9 bg-lightGray">
        <h6 className="font-second font-bold text-xl tracking-[0.07em]">
          {product.title}
        </h6>
        <div className="flex items-start xl:items-center justify-normal xl:justify-between flex-col xl:flex-row ">
          <p className="text-xs text-[#5c5c66]">{product.desc}</p>
          <div className="flex items-end gap-2">
            <p className="text-black font-bold">
              {product.isSale ? product.priceWithSale : product.price} руб
            </p>
            {product.isSale && (
              <p className="text-sm text-[#bcbcbc] font-normal">
                {product.price} руб
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
