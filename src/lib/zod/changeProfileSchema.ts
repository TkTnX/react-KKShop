import { z } from "zod";

export const changeProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  avatarUrl: z.string().optional(),
  birthdayDate: z.string().optional(),
  phoneNumber: z.string().optional(),
  city: z.string().optional(),
});

export type changeProfileType = z.infer<typeof changeProfileSchema>;
