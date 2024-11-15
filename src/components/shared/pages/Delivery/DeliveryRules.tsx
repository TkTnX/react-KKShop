import { useState } from "react";
import { cn } from "../../../../lib/utils";
import DeliveryTextFirst from "./DeliveryTextFirst";
import DeliveryTextSecond from "./DeliveryTextSecond";

const DeliveryRules = () => {
  const [selectedType, setSelectedType] = useState(0);
  return (
    <div className="mt-24">
      <h3 className="font-bold text-2xl sm:text-3xl border-b border-b-grey-light ">
        Правила предоставления услуг
      </h3>

      {/* Select type */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-6">
        <button
          onClick={() => setSelectedType(0)}
          className={cn(
            "text-lg py-1 px-5 bg-grey-light tracking-[0.04em] text-center hover:opacity-80 duration-150",
            { "bg-black text-white": selectedType === 0 }
          )}
        >
          Доставка
        </button>
        <button
          onClick={() => setSelectedType(1)}
          className={cn(
            "text-lg py-1 px-5 bg-grey-light tracking-[0.04em] text-center hover:opacity-80 duration-150",
            { "bg-black text-white": selectedType === 1 }
          )}
        >
          Правила приема товара
        </button>
      </div>

      {/* Selected type Info */}

      <div className=" mt-11 max-w-[1200px]">
        {selectedType === 0 ? <DeliveryTextFirst /> : <DeliveryTextSecond />}
      </div>
    </div>
  );
};

export default DeliveryRules;
