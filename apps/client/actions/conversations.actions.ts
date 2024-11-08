"use server";
import { auth } from "@/auth";
import db from "@/lib/prisma-config";

export const getAllConversations = async (userId: string) => {
  try {
    const conversations = await db.conversation.findMany({
      where: {
        OR: [
          {
            memberOneId: userId,
          },
          {
            memberTwoId: userId,
          },
        ],
      },
      orderBy: {
        updatedAt: "desc",
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
  const session = await auth();
  const user = session?.user;
  if (memberOneId === memberTwoId) {
    return {
      error: "You can't start a conversation with yourself",
    };
  }
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
  const session = await auth();
  const user = session?.user;
  try {
    const chat = await db.conversation.findFirst({
      where: {
        id: conversationId,
      },
      select: {
        memberOneId: true,
        memberTwoId: true,
      },
    });
    console.log(chat);
    console.log(user);
    const anotherUserId =
      chat?.memberOneId === user?.id ? chat?.memberTwoId : chat?.memberOneId;
    console.log(anotherUserId);
    const res = await db.user.findFirst({
      where: {
        id: anotherUserId,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const findUsers = async () => {
  try {
    const users = await db.user.findMany({});
    return users;
  } catch (error) {
    return error;
  }
};
