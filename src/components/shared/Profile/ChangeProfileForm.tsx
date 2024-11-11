import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changeProfileSchema,
  changeProfileType,
} from "../../../lib/zod/changeProfileSchema";
import { useUserStore } from "../../../store/useUserStore";
import { toast } from "react-toastify";
import { UserType } from "../../../types";
import { useState } from "react";

const ChangeProfileForm = ({ profileInfo }: { profileInfo: UserType }) => {
  const [checkboxActivated, setCheckboxActivated] = useState(false);
  const handleChangeProfile = useUserStore(
    (state) => state.handleChangeProfile
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changeProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatarUrl: "",
    },
  });

  const onSubmit = async (data: changeProfileType) => {
    try {
      if (checkboxActivated) {
        await handleChangeProfile(data);
        toast.success("Профиль успешно обновлен!");
      } else {
        toast.error("Дайте согласие на обработку своих персональных данных");
      }
    } catch (error) {
      console.log(error);
      toast.error("Что-то пошло не так");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-10 grid gap-5 w-full xl:max-w-[400px]"
    >
      <Input
        {...register("name")}
        type="text"
        placeholder={profileInfo.name || "Имя"}
      />
      {errors.name && <p className="text-red">{errors.name.message}</p>}
      <Input {...register("password")} type="password" placeholder="Пароль" />
      {errors.password && <p className="text-red">{errors.password.message}</p>}

      <Input
        {...register("avatarUrl")}
        type="text"
        placeholder="Ссылка на изображение"
      />
      {errors.avatarUrl && (
        <p className="text-red">{errors.avatarUrl.message}</p>
      )}

      <Input type="text" placeholder="Дата рождения" />
      <Input
        {...register("email")}
        type="email"
        placeholder={profileInfo.email || "Ваша почта"}
      />
      {errors.email && <p className="text-red">{errors.email.message}</p>}
      <Input type="tel" placeholder="Ваш номер телефона" />
      <Input type="text" placeholder="Ваш город" />
      <div className="flex items-center gap-4 max-w-[400px]">
        <input
          onChange={() => setCheckboxActivated(!checkboxActivated)}
          type="checkbox"
        />
        <p className="text-xs">
          Я даю согласие на обработку своих персональных данных в соответсвии с{" "}
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
  );
};

export default ChangeProfileForm;
