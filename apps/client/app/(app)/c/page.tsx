"use server";
import { getAllUsers } from "@/actions/temp.action";
import { auth } from "@/auth";
import db from "@/lib/prisma-config";
import { redirect } from "next/navigation";

const ChatPage = async () => {
  const session = await auth();
  const user = session?.user;
  const conversation = await db.conversation.findFirst({
    where: {
      memberTwoId: user?.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        There are no conversations available.
      </div>
    );
  }
  return redirect("/c/chat/" + conversation?.id);
};

export default ChatPage;
