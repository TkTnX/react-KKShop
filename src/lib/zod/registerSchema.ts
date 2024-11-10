import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "Имя должно иметь минимум 3 символа"),
    email: z.string().email("Введите корректную почту"),
    password: z.string().min(6, "Пароль должен иметь минимум 6 символов"),
});
export const loginSchema = z.object({
    email: z.string().email("Введите корректную почту"),
    password: z.string().min(6, "Пароль должен иметь минимум 6 символов"),
});

export type registerFormType = z.infer<typeof registerSchema>;
export type loginFormType = z.infer<typeof loginSchema>;