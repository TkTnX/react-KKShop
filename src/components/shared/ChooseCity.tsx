import { useEffect, useState } from "react";
import { cities } from "../../contants";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "../ui/sheet";
import { cn } from "../../lib/utils";
import { useUserStore } from "../../store/useUserStore";

const ChooseCity = () => {
  const [openCity, setOpenCity] = useState(false);
  const { currentUser, handleChangeProfile } = useUserStore();
  const [currentCity, setCurrentCity] = useState(currentUser.city || "");

  const handleChooseCity = async (city: string) => {
    setCurrentCity(city);
    setOpenCity(false);
    await handleChangeProfile({ city });
  };

  useEffect(() => {
    if (currentUser.city) {
      setCurrentCity(currentUser.city);
    }
  }, [currentCity, currentUser.city]);

  return (
    <>
      <button
        onClick={() => setOpenCity(!openCity)}
        className="flex items-center text-xs sm:text-sm gap-1 sm:gap-3 min-w-[140px]"
      >
        {currentCity}
        <img src="/arrow-down-pink.svg" alt="Open!" />
      </button>

      <Sheet open={openCity} onOpenChange={setOpenCity}>
        <SheetContent className="w-full vsm:w-auto lg:min-w-[860px]">
          <SheetTitle className="flex items-center gap-2 border-b pb-2">
            <img src="/russian-flag.svg" alt="RU" />
            Россия
          </SheetTitle>
          <SheetDescription>
            <span className="text-5xl lg:text-[80px] font-bold text-grey-light inline-block leading-[200%]">
              Найти город
            </span>
          </SheetDescription>

          <p className="text-grey">
            Вы можете выбрать <span className="text-black">более 3</span>{" "}
            населённых пунктов по всей Российской Федерации.
          </p>
          <ul className="mt-6 grid gap-2">
            {cities.map((city, index) => (
              <li
                className="w-fit"
                onClick={() => handleChooseCity(city)}
                key={index}
              >
                <button
                  className={cn("hover:text-pink", {
                    "text-pink": city === currentCity,
                  })}
                >
                  {city}
                </button>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ChooseCity;
