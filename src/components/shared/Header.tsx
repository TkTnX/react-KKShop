import { Link } from "react-router-dom";
import ChooseCity from "../shared/ChooseCity";
import UserInteraction from "../shared/UserInteraction";
import Navbar from "../shared/Navbar";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";
import { useUserStore } from "../../store/useUserStore";

const Header = () => {
  const { handleAuthMe } = useUserStore();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      handleAuthMe(token);
    }
  }, []);

  return (
    <header className="">
      {/* TOP */}
      <div className="  bg-[#323232] text-white ">
        <div className="container flex items-center justify-between h-[50px]">
          {/* LEFT */}
          <ChooseCity />

          {/* RIGHT */}
          <a href="tel:84952592500" className="text-xs sm:text-xl">
            8 495 259 25 00
          </a>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="container flex flex-col gap-3 vsm:gap-0 vsm:flex-row items-center justify-between mt-8">
        <div className="w-full justify-between vsm:w-auto vsm:justify-normal  flex items-center gap-10 xl:gap-12">
          {/* MOBILE MENU */}

          <MobileMenu />

          {/* LOGO */}
          <div>
            <Link to="/">
              <img src="/logo.png" alt="Logo" />
            </Link>
          </div>
          {/* NAVBAR */}
          <Navbar size="lg" />
        </div>

        {/* USER INTERACTION */}
        <UserInteraction />
      </div>
    </header>
  );
};

export default Header;
