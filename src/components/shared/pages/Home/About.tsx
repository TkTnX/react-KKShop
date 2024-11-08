import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { aboutItems } from "../../../../contants";
const About = () => {
  return (
    <div className="mt-16 container">
      {/* TOP */}
      <div className="flex gap-8 xl:gap-16 flex-col  items-center xl:items-start xl:flex-row">
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
        >
          <img src="/about.jpg" alt="About img" />
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          className="max-w-[680px]"
        >
          <h3 className="text-xl lg:text-3xl ">
            Ведущий эксперт на российском рынке профессиональной косметики из
            Кореи—ККshop™
          </h3>
          <p className="text-sm lg:text-base text-[#474747] mt-3 max-w-[619px]">
            Мы делаем мир профессиональной корейской косметики доступным для
            каждого косметолога в России, предоставляя возможность работать с
            лучшими достижениями корейских учёных и специалистов в области
            сохранения здоровья и ухода за кожей
          </p>
          <Link
            className="text-pink flex items-center gap-1 mt-5 hover:opacity-80 w-fit"
            to="/catalog"
          >
            Подробнее <img src="/arrow-right-pink.svg" alt="Arrow" />
          </Link>
        </motion.div>
      </div>
      {/* BOTTOM */}
      <div className="font-second mt-9 grid grid-cols-1 sm:grid-cols-2 lg:flex items-stretch justify-between gap-3 lg:gap-6">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="py-2 md:py-5 px-4 md:px-8 border border-gray-200 flex-1 text-xs md:text-lg text-[#464646] "
          >
            <p className="max-w-44 font-second">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
