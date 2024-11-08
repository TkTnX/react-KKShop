import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" hero">
      {/* WRAPPER */}
      <div className="container">
        {/* HERO TEXT */}
        <div className="h-[calc(100vh-540px)] text-center  flex items-center justify-center flex-col sm:text-left sm:h-auto sm:block  xl:pt-[90px] xl:pl-[172px]">
          <h1 className="text-6xl sm:text-[100px] font-medium font-third leading-[1.5]">
            SKINDOM
          </h1>
          <p className="text-xl sm:text-2xl">Специальные цены только до 30 апреля</p>

          <Link
            className="bg-black px-6 py-4 text-white flex items-center gap-3 hover:opacity-80 w-fit mt-11"
            to="/catalog"
          >
            Перейти в каталог <img src="/arrow-right-white.svg" alt="Catalog" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
