import { Link } from "react-router-dom";
import { useUserStore } from "../../../../store/useUserStore";

const ChangeUserData = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  return (
    <div className=" flex flex-col sm:flex-row flex-start gap-3 md:gap-[92px] text-left">
      <h6 className="text-xl font-bold sm:w-1/3">Ваши данные</h6>
      <div className="w-2/3 grid gap-4">
        {currentUser.name ? (
          <p className="font-bold text-xs sm:text-lg">Имя: {currentUser.name}</p>
        ) : (
          <Link to={"/profile"}>Добавить имя</Link>
        )}
        {currentUser.email ? (
          <p className="font-bold text-xs sm:text-lg">Почта: {currentUser.email}</p>
        ) : (
          <Link to={"/profile"}>Добавить почту</Link>
        )}
        {currentUser.phoneNumber ? (
          <p className="font-bold text-xs sm:text-lg">
            Телефон: {currentUser.phoneNumber}
          </p>
        ) : (
          <Link to={"/profile"}>Добавить телефон</Link>
        )}
      </div>
    </div>
  );
};

export default ChangeUserData;
