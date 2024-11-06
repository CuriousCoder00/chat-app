import { getAllUsers } from "@/actions/temp.action";
import ChatBox from "@/components/chats/chat-box";
import db from "@/lib/prisma-config";
import { redirect } from "next/navigation";

const ChatPage = async () => {
  // find first user data in db
  const user = await db.user.findFirst();

  // if (!conversations.success)
  //   return <div>Error occurred while getting conversations</div>;
  // if (conversations.success && !conversations.users)
  //   return <div>No conversations found</div>;
  return redirect("/c/chat/" + user?.id);
};

export default ChatPage;
