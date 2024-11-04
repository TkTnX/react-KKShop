import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { products } from "../../../contants";
import { useRef } from "react";
import Product from "../../Product";

const ProductsWithSale = () => {
  const swiperRef = useRef(null);

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
        loop={true}
        centeredSlides={true}
        breakpoints={{
          840: {
            spaceBetween: 56,
            slidesPerView: 2.2
          },
          680: {
            slidesPerView: 2.2
          }

        }}
        className="mt-8 sliderWithSale"
      >
        {products
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
