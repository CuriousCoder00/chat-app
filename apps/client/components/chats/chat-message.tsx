import { DirectMessage, User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getUserData } from "@/actions/user.actions";
import { useEffect, useState } from "react";

type Props = {
  message: DirectMessage;
  userId: string;
};

export const DirectMessages = ({ message, userId }: Props) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchUser = async (id: string) => {
      const data = await getUserData(id);
      setUser(data as User);
    };
    fetchUser(message.memberId);
  }, [message.memberId]);
  return (
    <div className={`flex items-start justify-between px-2 w-full gap-3`}>
      <Avatar>
        <AvatarImage src={user?.image as string} />
        <AvatarFallback>{user?.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center w-full">
        <div className="flex items-center justify-start gap-2">
          <p>{user?.name}</p>
          <div className="flex gap-2 items-start justify-end text-xs text-gray-800 dark:text-gray-500 w-26">
            <span className="w-26 text-nowrap">
              {message?.createdAt?.toDateString()}
            </span>
            <span>{message?.createdAt?.toLocaleTimeString()}</span>
          </div>
        </div>
        <p className="text-sm text-gray-800 dark:text-gray-300">
          {message.content}
        </p>
      </div>
    </div>
  );
};
