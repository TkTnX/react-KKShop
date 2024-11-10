import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { useUserStore } from "../store/useUserStore";
import { useForm } from "react-hook-form";
import { loginFormType, loginSchema } from "../lib/zod/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const { handleLogin, currentUser, error, loading } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
console.log(currentUser)
  useEffect(() => {
    if (currentUser.id || currentUser.token) {
      navigate("/profile");
    }
  }, [currentUser]);

  const onSubmit = async (data: loginFormType) => {
    handleLogin(data);
    if (!error || currentUser.token) {
      toast.success("Вы успешно вошли в аккаунт!");
      navigate("/");
    } else toast.error("Что-то пошло не так");
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] container">
      <div className="border rounded p-5 md:p-10 w-full sm:w-auto">
        <h2 className="text-2xl md:text-5xl font-bold">С возвращением!</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex flex-col gap-3 "
        >
          <Input {...register("email")} type="email" placeholder="Почта" />
          {<p className="text-red">{errors.email?.message}</p>}

          <Input
            {...register("password")}
            type="password"
            placeholder="Пароль"
          />
          {<p className="text-red">{errors.password?.message}</p>}

          <button
            disabled={loading}
            className="bg-black text-white py-3 rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
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
