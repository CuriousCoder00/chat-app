import NextAuth from "next-auth";
import db from "@/lib/prisma-config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserByID } from "./lib/utils/user.utils";

import authConfig from "./lib/auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        return true;
      }
      const existingUser = await getUserByID(user.id!);
      if (!existingUser?.emailVerified) return false;
      return true;
    },

    async session({ token, session }) {
      return session;
    },

    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
