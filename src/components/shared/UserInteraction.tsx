import { useUserStore } from "../../store/useUserStore";
import Cart from "./Cart/Cart";
import { Link } from "react-router-dom";

const UserInteraction = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  return (
    <ul className="flex items-center gap-5">
      <li>
        <button>
          <img src="/search.svg" alt="Search" />
        </button>
      </li>
      <li className="h-[31px]">
        <Link  to="/profile/favorites">
          <img
            
            src="/heart.svg"
            alt="Favorite"
          />
        </Link>
      </li>
      {currentUser.id ? (
        <li className="h-[31px]">
          <Link to="/profile">
            <img
              src={
                currentUser.avatarUrl ? currentUser.avatarUrl : "/profile.svg"
              }
              className="object-contain max-w-[50px]"
              alt="profile"
            />
          </Link>
        </li>
      ) : (
        <li className="h-[31px]">
          <Link to="/sign-in">
            <img src="/profile.svg" alt="Profile" />
          </Link>
        </li>
      )}

      <li>
        <Cart>
          <img src="/cart.svg" alt="Cart" />
        </Cart>
      </li>
    </ul>
  );
};

export default UserInteraction;
