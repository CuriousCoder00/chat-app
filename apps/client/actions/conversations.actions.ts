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

export const initiateConversation = async (
  memberOneId: string,
  memberTwoId: string
) => {
  try {
    const conversation = await db.conversation.create({
      data: {
        memberOneId,
        memberTwoId,
      },
    });
    return conversation;
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

export const findUserByUsernameOrEmail = async (data: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        OR: [
          {
            username: data,
          },
          {
            email: data,
          },
        ],
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};
