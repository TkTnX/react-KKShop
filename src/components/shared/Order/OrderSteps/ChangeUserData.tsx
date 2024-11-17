import { Link } from "react-router-dom";
import { useUserStore } from "../../../../store/useUserStore";

const ChangeUserData = () => {
  const currentUser = useUserStore((state) => state.currentUser);
  console.log(currentUser);
  return (
    <div className=" flex flex-start gap-[92px] text-left">
      <h6 className="text-xl font-bold w-1/3">Ваши данные</h6>
      <div className="w-2/3 grid gap-4">
        {currentUser.name ? (
          <p className="font-bold text-lg">Имя: {currentUser.name}</p>
        ) : (
          <Link to={"/profile"}>Добавить имя</Link>
        )}
        {currentUser.email ? (
          <p className="font-bold text-lg">Почта: {currentUser.email}</p>
        ) : (
          <Link to={"/profile"}>Добавить почту</Link>
        )}
        {currentUser.phoneNumber ? (
          <p className="font-bold text-lg">Телефон: {currentUser.phoneNumber}</p>
        ) : (
          <Link to={"/profile"}>Добавить телефон</Link>
        )}
      </div>
    </div>
  );
};

export default ChangeUserData;