"use client";

import { PhoneCallIcon, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";

import { getCurrentChatInfo } from "@/actions/conversations.actions";

type Props = {
  id: string;
};

export const ChatHeader = ({ id }: Props) => {
  const [user, setUser] = useState<any>();
  const fetchUser = async (id: string) => {
    const user = await getCurrentChatInfo(id);
    setUser(user);
  };

  useEffect(() => {
    fetchUser(id);
  }, []);

  return (
    <div className="w-full flex items-center justify-between p-2 border-b">
      {user ? (
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user?.image as string} />
            <AvatarFallback>{user?.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <h2 className="text-lg font-bold">{user?.name}</h2>
            <span className="text-xs text-gray-500">Online</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center rounded-full h-12 w-12 border shadow-inner dark:shadow-gray-600 animate-pulse" />
          <div className="flex flex-col gap-1 ">
            <div className="w-28 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
            <span className="w-20 h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-5">
        <PhoneCallIcon size={18} />
        <Video />
      </div>
    </div>
  );
};
