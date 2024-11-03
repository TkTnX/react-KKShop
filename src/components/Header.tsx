import { Link } from "react-router-dom";
import ChooseCity from "./ChooseCity";
import UserInteraction from "./UserInteraction";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Header = () => {
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
        <div className="  flex items-center gap-10 xl:gap-12">
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
