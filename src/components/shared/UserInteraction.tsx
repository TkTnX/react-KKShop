import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";

const UserInteraction = () => {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <button>
          <img src="/search.svg" alt="Search" />
        </button>
      </li>
      <li>
        <button>
          <img src="/heart.svg" alt="Favorite" />
        </button>
      </li>
      <li>
        <Link to="/sign-in">
          <img src="/profile.svg" alt="Profile" />
        </Link>
      </li>
      <li>
        <Cart>
          <img src="/cart.svg" alt="Cart" />
        </Cart>
      </li>
    </ul>
  );
};

export default UserInteraction;
