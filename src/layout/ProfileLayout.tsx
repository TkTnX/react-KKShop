import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useEffect } from "react";
import { profileMenuItems } from "../contants";
import { cn } from "../lib/utils";

const ProfileLayout = () => {
    const navigate = useNavigate();
    const location = useLocation()
  const { currentUser, handleLogout } = useUserStore();
    
  useEffect(() => {
    if (!currentUser.id) {
      navigate("/sign-in");
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;
  return (
    <div className="container mt-24 flex flex-col xl:flex-row items-start justify-between gap-10">
      {/* LEFT */}
      <div className="min-w-[300px]">
        <div className="flex items-center gap-4">
          <h4 className="text-3xl xl:max-w-28">{currentUser.name}</h4>
          <img
            className="rounded-full w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] object-cover ml-2"
            src={currentUser.avatarUrl || "/avatar.svg"}
            alt="Avatar"
          />
        </div>
        <div className="mt-10 ml-11">
          <ul className=" text-2xl text-grey ">
            {profileMenuItems.map((item) => (
              <li className={cn("text-left", { "text-black": location.pathname === item.link})} key={item.link}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}

            <li>
              <button
                className="hover:text-black text-left"
                onClick={handleLogout}
              >
                выйти
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
