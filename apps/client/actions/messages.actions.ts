/***
 * Direct Messages Actions
 */

import db from "@/lib/prisma-config";

export const getAllDirectMessages = async (conversationId: string) => {
  try {
    const messages = await db.directMessage.findMany({
      where: {
        conversationId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return messages;
  } catch (error) {
    return error;
  }
};

export const createDirectMessage = async (
  content: string,
  conversationId: string,
  memberId: string,
) => {
  try {
    const message = await db.directMessage.create({
      data: {
        content,
        conversationId,
        memberId,
      },
    });
    return message;
  } catch (error) {
    return error;
  }
};
