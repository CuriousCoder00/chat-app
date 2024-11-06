import db from "@/lib/prisma-config";

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return { success: true, users };
  } catch (error: any) {
    return { success: false, message: "Failed to get users", error };
  }
};
