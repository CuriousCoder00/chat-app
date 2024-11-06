"use server";
import db from "@/lib/prisma-config";
import { getUserByEmail } from "@/lib/utils/user.utils";

export const updateUsername = async (username: string, email: string) => {
  const user = await getUserByEmail(email);
  try {
    await db.user.update({
      where: { id: user?.id },
      data: {
        username,
      },
    });
    return { success: true, message: "Username updated successfully" };
  } catch (error: any) {
    return {
      success: false,
      message: "Failed to update username",
      error: error,
    };
  }
};
