import db from "@/lib/prisma-config";

export const getConversations = async (userId: string) => {
  const conversations = await db.conversation.findMany({
    where:{
      userId,
    }
  });

  return conversations;
}
