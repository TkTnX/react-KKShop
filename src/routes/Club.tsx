import { Link } from "react-router-dom";

const Club = () => {
  return (
    <div className="flex flex-col xl:flex-row items-stretch gap-3 5xl:gap-20 mt-10 sm:mt-20 container">
      {/* LEFT */}
      <div className="relative xl:h-fit">
        <img
          className="object-cover w-full h-80 xl:h-full"
          src="/club.jpg"
          alt="Club image"
        />
        <div className="absolute bottom-3 left-3 sm:left-14 ">
          <p className="text-xs sm:text-base">
            Тоник для лица освежающий охлаждающий
          </p>
          <h3 className="text-4xl sm:text-[80px] tracking-[0.04em] font-second leading-[1]">
            Skindom
          </h3>
          <Link
            className="bg-black flex items-center gap-3 hover:bg-grey duration-150 w-fit py-2  sm:py-4 px-5 sm:px-10 text-white text-sm sm:text-base"
            to="/catalog"
          >
            ПЕРЕЙТИ К АКЦИИ{" "}
            <img src="/arrow-right-white.svg" alt="Arrow Right" />
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="xl:max-w-[735px]">
        <h2 className="text-3xl vsm:text-5xl sm:text-[80px] font-bold leading-[1]">
          Клуб косметологов
        </h2>
        <div className="mt-3 sm:mt-10">
          <h6 className="text-lg sm:text-xl font-medium">
            Как вступить в клуб косметологов?
          </h6>
          <p className="mt-5">
            Вступить в клуб косметологов могут только специалисты индустрии
            красоты. Участникам клуба доступны специальные цены и профобъёмы на
            продукцию. Вступление в клуб остается на усмотрение администрации.
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-lg sm:text-xl font-medium">
            Для регистрации косметологов необходимо
          </h6>
          <div className="flex flex-col sm:flex-row items-start gap-6 mt-5">
            <p className="text-grey">
              <b className="text-black block">Московская область и др</b>
              Приехать к нам в офис по адресу: г. Москва, ул. Шаболовка, д. 34,
              стр. 7 <br /> <br />
              Предъявить документ о профессиональном образовании и паспорт
            </p>
            <p className="text-grey">
              <b className="text-black block">Регионам</b>
              Прислать сканы документа о профессиональном образовании и паспорт
              на электронную почту{" "}
              <a className="text-pink" href="mailto:sale@kkshop.ru">
                sale@kkshop.ru
              </a>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h6 className="text-lg sm:text-xl font-medium max-w-[500px]">
            Для вступления в клуб косметологов после предоставления документов
            вам необходимо
          </h6>
          <p className="text-grey">
            Пройти регистрацию на нашем сайте.
            <br />
            <br />
            После регистрации Вам будет дана возможность совершать покупки в
            нашем интернет-магазине по специальным ценам с выбором профобъёмов
            на продукцию.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Club;
