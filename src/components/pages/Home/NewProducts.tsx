import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import { products } from "../../../contants";
import Product from "../../Product";
const NewProducts = () => {
  const swiperRef = useRef(null);

  return (
    <div className="container mt-16">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h4 className="text-xl md:text-3xl">Новинки</h4>
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
        slidesPerView={1}
        className="mt-8"
        breakpoints={{
          1629: {
            spaceBetween: 56,
            slidesPerView: 4,
          },
          1515: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          740: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewProducts;
