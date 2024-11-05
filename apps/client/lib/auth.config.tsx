import type { NextAuthConfig, User } from "next-auth";

import Google from "next-auth/providers/google";
import credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/utils/user.utils";

export default {
  providers: [
    Google({
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const user = await getUserByEmail(credentials.email as string);
        if (!user) throw new Error("User not found");
        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password as string
        );
        if (!isValid) throw new Error("Invalid credentials");
        if (!user.emailVerified)
          throw new Error("Please verify your email and then try again");
        return user as User;
      },
    }),
  ],
} satisfies NextAuthConfig;
