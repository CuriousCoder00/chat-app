import NextAuth, { DefaultSession, Session } from "next-auth";
import db from "@/lib/prisma-config";
import { PrismaAdapter } from "@auth/prisma-adapter";

import authConfig from "./lib/auth.config";
import { getUserByEmail, getUserByID } from "./lib/utils/user.utils";

declare module "next-auth" {
  interface Session {
    user: {
      username: string;
    } & DefaultSession["user"];
  }
}

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
      session.user.username = token.username as string;
      session.user.id = token.sub as string;
      return session;
    },

    async jwt({ token }) {
      const exisitngUser = await getUserByEmail(token.email as string);
      if (exisitngUser) {
        token.username = exisitngUser.username;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
