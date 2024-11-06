"use server";
import db from "@/lib/prisma-config";

export const getAllConversations = async (userId: string) => {
  try {
    const conversations = await db.conversation.findMany({
      where: {
        memberTwoId: userId,
      },
    });
    return conversations;
  } catch (error) {
    return error;
  }
};

export const getCurrentChatInfo = async (conversationId: string) => {
  try {
    const chat = await db.conversation.findFirst({
      where: {
        id: conversationId,
      },
      select: {
        memberOneId: true,
      },
    });
    const res = await db.user.findFirst({
      where: {
        id: chat?.memberOneId,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
