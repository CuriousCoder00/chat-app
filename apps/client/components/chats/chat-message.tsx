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
    <div className={`flex items-start justify-between px-2 w-full`}>
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src={user?.image as string} />
          <AvatarFallback>{user?.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p>{user?.name}</p>
          <p className="text-sm text-gray-800 dark:text-gray-300">
            {message.content}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-end text-xs text-gray-800 dark:text-gray-500">
        {message?.createdAt.toDateString()}
      </div>
    </div>
  );
};
