"use client";

import { Camera, PhoneCall, PhoneCallIcon, Video } from "lucide-react";
import { FcVideoCall } from "react-icons/fc";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {};
export const ChatHeader = ({}: Props) => {
  return (
    <div className="w-full flex items-center justify-between p-2 border-b">
      <div className=" flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://randomuser.me/api/portraits" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center justify-center gap-5">
        <PhoneCallIcon size={18} />
        <Video />
      </div>
    </div>
  );
};
