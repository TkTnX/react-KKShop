import { useState } from "react";
import { motion } from "framer-motion";
import { cities } from "../contants";

const ChooseCity = () => {
  const [openCity, setOpenCity] = useState(false);
  const [currentCity, setCurrentCity] = useState("Санкт-Петербург");

  const handleChooseCity = (city: string) => {
    setCurrentCity(city);
    setOpenCity(false);
  };

  return (
    <>
      <button
        onClick={() => setOpenCity(!openCity)}
        className="flex items-center text-xs sm:text-sm gap-1 sm:gap-3 min-w-[140px]"
      >
        {currentCity}
        <img src="/arrow-down-pink.svg" alt="Open!" />
      </button>

      {openCity && (
        <motion.ul
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          className="absolute flex flex-col gap-3 text-sm bg-[#323232] top-[50px] p-3 rounded-b-[10px] z-10"
        >
          {cities.map((city, index) => (
            <li onClick={() => handleChooseCity(city)} key={index}>
              <button>{city}</button>
            </li>
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default ChooseCity;
