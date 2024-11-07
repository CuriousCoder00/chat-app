"use client";
import { getUserData } from "@/actions/user.actions";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DirectMessage, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { getLastMessage } from "@/actions/messages.actions";

type Props = {
  id: string;
  conversationId: string;
};

export const ChatMember = ({ id, conversationId }: Props) => {
  const [user, setUser] = useState<User>();
  const [lastMessage, setLastMessage] = useState<DirectMessage>();
  useEffect(() => {
    const fetchUser = async (id: string) => {
      const user = await getUserData(id);
      setUser(user as User);
    };
    fetchUser(id);
  }, []);

  useEffect(() => {
    const fetchLastMessage = async (id: string) => {
      const data = await getLastMessage(conversationId);
      setLastMessage(data as DirectMessage);
    };
    fetchLastMessage(id);
  }, []);

  return (
    <div className="flex items-center justify-start gap-3">
      <Avatar>
        <AvatarImage src={user?.image as string} />
        <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
      </Avatar>
      <div className="flex items-start justify-center flex-col w-full overflow-hidden">
        {user?.name}
        <div className="flex justify-start flex-nowrap items-center w-full">
          <span className="w-full text-ellipsis text-nowrap text-sm">
            {lastMessage?.content}
          </span>
        </div>
      </div>
    </div>
  );
};
