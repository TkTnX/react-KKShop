import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] container">
      <div className="border rounded p-5 md:p-10 w-full sm:w-auto">
        <h2 className="text-2xl md:text-5xl font-bold">С возвращением!</h2>
        <form className="mt-5 flex flex-col gap-3 ">
          <Input type="email" placeholder="Почта" />
          <Input type="password" placeholder="Пароль" />
          <button
            className="bg-black text-white py-3 rounded-lg hover:opacity-80 "
            type="submit"
          >
            Войти
          </button>
        </form>
        <Link to="/sign-up" className="text-grey mt-3 block">
          Ещё нет аккаунта?
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
