import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changeProfileSchema,
  changeProfileType,
} from "../../../lib/zod/changeProfileSchema";
import { format } from "date-fns";
import { useUserStore } from "../../../store/useUserStore";
import { toast } from "react-toastify";
import { UserType } from "../../../types";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "../../../lib/utils";
import { Calendar } from "../../ui/calendar";
import { Button } from "../../ui/button";
import { cities } from "../../../contants";

const ChangeProfileForm = ({ profileInfo }: { profileInfo: UserType }) => {
  const [checkboxActivated, setCheckboxActivated] = useState(false);
  const [date, setDate] = useState<Date>();
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
      birthdayDate: "",
      phoneNumber: "",
      city: "",
    },
  });

  const onSubmit = async (data: changeProfileType) => {
    try {
      if (checkboxActivated) {
        const dataWithBirthdayDate = {
          ...data,
          birthdayDate: date?.toLocaleDateString("ru-RU"),
        };
        await handleChangeProfile(dataWithBirthdayDate);
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
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal ",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span className="text-grey">Ваша дата рождения</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Input {...register("password")} type="password" placeholder="Пароль" autoComplete="off" />
      {errors.password && <p className="text-red">{errors.password.message}</p>}

      <Input
        {...register("avatarUrl")}
        type="text"
        placeholder="Ссылка на изображение"
      />
      {errors.avatarUrl && (
        <p className="text-red">{errors.avatarUrl.message}</p>
      )}

      <Input
        {...register("email")}
        type="email"
        placeholder={profileInfo.email || "Ваша почта"}
      />
      {errors.email && <p className="text-red">{errors.email.message}</p>}
      <Input
        {...register("phoneNumber")}
        type="tel"
        placeholder="Ваш номер телефона"
      />
      {errors.phoneNumber && (
        <p className="text-red">{errors.phoneNumber.message}</p>
      )}

      <select
        {...register("city")}
        className="border p-2 rounded text-grey text-sm"
        defaultValue={profileInfo.city || ""}
      >
        <option value={""} hidden >
          Ваш город
        </option>
        {cities.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
      {errors.city && <p className="text-red">{errors.city.message}</p>}

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
          {" "}и{" "}
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
