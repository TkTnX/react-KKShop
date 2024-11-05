import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { useRef } from "react";
import Product from "../../Product";
import { ProductType } from "../../../types";

const ProductsWithSale = ({
  products,
  loading,
  error,
}: {
  products: ProductType[];
  loading: boolean;
  error: boolean;
}) => {
  const swiperRef = useRef(null);

  if (error && !loading) return null;

  return (
    <div className=" mt-16">
      {/* TOP */}
      <div className="flex items-center justify-between container">
        <h4 className="text-xl md:text-3xl">Акционные товары</h4>
        {/* buttons */}
        <div className="flex items-center gap-4">
          <button
            className="hover:opacity-60"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img
              className="rotate-180"
              src="/arrow-right-black.svg"
              alt="Next"
            />
          </button>

          <button
            className="hover:opacity-60"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src="/arrow-right-black.svg" alt="Next" />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <Swiper
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        initialSlide={3}
        breakpoints={{
          840: {
            spaceBetween: 56,
            slidesPerView: 2.2,
          },
          680: {
            slidesPerView: 2.2,
          },
        }}
        className="mt-8 sliderWithSale"
      >
        {loading &&
          [...new Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="h-[520px] w-full bg-lightGray" />
            </SwiperSlide>
          ))}
        {!loading &&
          products.length > 0 &&
          products
            .filter((product) => product.isSale)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default ProductsWithSale;
