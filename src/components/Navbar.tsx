import { Link, useLocation } from "react-router-dom";
import { navbar } from "../contants";

const Navbar = ({
  size,
  setOpen,
}: {
  size: "sm" | "lg";
  setOpen?: (b: boolean) => void;
}) => {
  const location = useLocation();
  return (
    <nav
      className={` xl:block ${
        size === "sm"
          ? "h-full flex items-center justify-center text-white"
          : "hidden"
      }`}
    >
      <ul
        className={`flex items-center gap-4 ${
          size === "sm" ? "flex-col text-xs" : "flex-row"
        }`}
      >
        {navbar.map((item) => (
          <li
            onClick={() => setOpen && setOpen(false)}
            className={`text-lg ${
              location.pathname === item.link ? "border-b-2 border-b-black" : ""
            }`}
            key={item.link}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
