import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "../store/useUserStore";
import { registerFormType, registerSchema } from "../lib/zod/registerSchema";
import { toast } from "react-toastify";
const SignUp = () => {
  const navigate = useNavigate();
  const { handleRegister, currentUser, error, loading } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<registerFormType> = (data) => {
    handleRegister(data);
    if (!error || currentUser.token) {
      navigate("/");

      toast.success("Вы успешно зарегистрировались!");
    } else toast.error("Что-то пошло не так");
  };

  console.log(currentUser);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] container">
      <div className="border rounded p-5 md:p-10 w-full sm:w-auto">
        <h2 className="text-2xl md:text-5xl font-bold">
          войти или <br /> зарегистрироваться
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 flex flex-col gap-3 "
        >
          <Input
            {...register("name", { required: true })}
            type="text"
            placeholder="Ваше имя"
          />
          {<p className="text-red">{errors.name?.message}</p>}

          <Input
            {...register("email", { required: true })}
            type="email"
            placeholder="Почта"
          />
          {<p className="text-red">{errors.email?.message}</p>}

          <Input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            placeholder="Пароль"
          />
          {<p className="text-red">{errors.password?.message}</p>}

          <button
            disabled={loading}
            className="bg-black text-white py-3 rounded-lg hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none"
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <Link to="/sign-in" className="text-grey mt-3 block">
          Уже есть аккаунт?
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
