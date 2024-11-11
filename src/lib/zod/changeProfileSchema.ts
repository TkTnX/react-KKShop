import { z } from "zod";

export const changeProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export type changeProfileType = z.infer<typeof changeProfileSchema>;
