import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useEffect } from "react";
import { Input } from "../components/ui/input";

const Profile = () => {
  const navigate = useNavigate();
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
      <div>
        <div className="flex items-center gap-4">
          <h4 className="text-3xl xl:max-w-28">{currentUser.name}</h4>
          <img
            className="rounded-full w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] object-cover"
            src={currentUser.avatarUrl || "/avatar.svg"}
            alt="Avatar"
          />
        </div>
        <div className="mt-10 ml-11">
          <ul className=" text-2xl text-grey ">
            <li>
              <button className="text-black text-left">
                личная информация
              </button>
            </li>
            <li>
              <button className="hover:text-black text-left">избранное</button>
            </li>
            <li>
              <button className="hover:text-black text-left">
                мои покупки
              </button>
            </li>
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
        <h2 className="text-5xl xl:text-9xl font-bold">Личная информация</h2>
        <form className="mt-10 grid gap-5 w-full xl:max-w-[400px]">
          <Input type="text" placeholder="Имя" />
          <Input type="password" placeholder="Пароль" />
          <Input type="text" placeholder="Ссылка на изображение" />
          <Input type="text" placeholder="Дата рождения" />
          <Input type="email" placeholder="Ваша почта" />
          <Input type="tel" placeholder="Ваш номер телефона" />
          <Input type="text" placeholder="Ваш город" />
          <div className="flex items-center gap-4 max-w-[400px]">
            <input type="checkbox" />
            <p className="text-xs">
              Я даю согласие на обработку своих персональных данных в
              соответсвии с{" "}
              <a className="text-pink" href="#!">
                Политикой в отношении обработки персональных данных
              </a>
              и{" "}
              <a className="text-pink" href="#!">
                Пользовательским соглашением.
              </a>
            </p>
          </div>
          <button className="bg-black font-second text-white py-4 mt-7 rounded hover:opacity-80">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
