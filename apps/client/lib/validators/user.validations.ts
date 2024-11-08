import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UserRegistrationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UsernameSchema = z.object({
  username: z.string().min(3, "Name must be at least 3 characters"),
});

export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
export type UserRegistrationSchemaType = z.infer<typeof UserRegistrationSchema>;
export type UsernameSchemaType = z.infer<typeof UsernameSchema>;
