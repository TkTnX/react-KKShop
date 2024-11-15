import DeliveryRules from "../components/shared/pages/Delivery/DeliveryRules";
import DeliveryVariants from "../components/shared/pages/Delivery/DeliveryVariants";

const Delivery = () => {
  return (
    <div className="container mt-12">
      <h2 className="text-5xl lg:text-[80px] font-bold ">Доставка</h2>
      {/* Delivery types */}
      <div className="mt-6 flex flex-col lg:flex-row items-center justify-between bg-grey-light">
        <div className=" bg-grey-light p-5 md:p-11 flex-1 border-b border-b-grey lg:border-b-0">
          <h4 className="font-bold font-second text-lg tracking-[0.04em]">
            Пункты выдачи
          </h4>
          <p className="text-[#464646] leading-[1.3] max-w-[400px] mt-3">
            Выбирайте наиболее удобный для вас пункт выдачи и дату получения
            заказа
          </p>
        </div>
        <div className="w-[2px] h-[87px] bg-[#e3e3e3] hidden lg:block" />
        <div className="bg-grey-light p-5 md:p-11 flex-1 border-b border-b-grey lg:border-b-0">
          <h4 className="font-bold font-second text-lg tracking-[0.04em]">
            Экспресс-доставка
          </h4>
          <p className="text-[#464646] leading-[1.3] max-w-[400px] mt-3">
            Получайте товар уже на следующий день действует на товары с пометкой
            )
          </p>
        </div>
        <div className="w-[2px] h-[87px] bg-[#e3e3e3] hidden lg:block" />
        <div className="bg-grey-light p-5 md:p-11 flex-1 ">
          <h4 className="font-bold font-second text-lg tracking-[0.04em]">
            Профессионально и безопасно
          </h4>
          <p className="text-[#464646] leading-[1.3] max-w-[400px] mt-3">
            Мы серьёзно относимся к процессу доставки и доверяем её только
            профессионалам своего дела.
          </p>
        </div>
      </div>

      {/* Delivery variants */}

      <DeliveryVariants />

      {/* Delivery rules */}
      <DeliveryRules />
    </div>
  );
};

export default Delivery;
