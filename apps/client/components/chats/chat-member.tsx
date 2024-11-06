"use client";
import { getUserData } from "@/actions/user.actions";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};

export const ChatMember = ({ id }: Props) => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchUser = async (id: string) => {
      const user = await getUserData(id);
      setUser(user as User);
    };
    fetchUser(id);
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
            this is the last message data that was sent by either you or the
            other user
          </span>
          ...
        </div>
      </div>
    </div>
  );
};
