"use client";
import ChatBox from "@/components/chats/chat-box";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Chat = () => {
  const path = usePathname();
  const id = path.split("/").pop() as string;
  return (
    <div className="flex items-center justify-center h-full">
      <ChatBox id={id} />
    </div>
  );
};

export default Chat;
