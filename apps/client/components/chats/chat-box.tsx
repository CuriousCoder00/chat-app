"use client";
import React, { useEffect } from "react";
import { PlusCircle, SendHorizontalIcon } from "lucide-react";
import { ChatHeader } from "./chat-header";
import {
  createDirectMessage,
  getAllDirectMessages,
} from "@/actions/messages.actions";
import useCurrentUser from "@/hooks/use-current-user";
import { DirectMessage } from "@prisma/client";
import { DirectMessages } from "./chat-message";
import { ScrollArea } from "../ui/scroll-area";

const ChatBox = ({ id }: { id: string }) => {
  const [messageContent, setMessageContent] = React.useState<string>("");
  const [messages, setMessages] = React.useState<DirectMessage[]>([]);
  const user = useCurrentUser();
  const userId = user?.id as string;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageContent(e.target.value);
  };

  const sendMessage = async () => {
    // send message to the server
    const res = await createDirectMessage(messageContent, id, userId);
    if (res) {
      fetchMessages();
      setMessageContent("");
    }
  };
  const handleKeyPress = (event: { key: any }) => {
    if (event.key === "Enter") return sendMessage();
  };
  const fetchMessages = async () => {
    // fetch messages from the server
    const messageData = await getAllDirectMessages(id);
    setMessages(messageData as DirectMessage[]);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <ChatHeader id={id} />
      </div>
      <ScrollArea className="flex flex-col justify-end h-full">
        <div className="flex flex-col items-start justify-start w-full h-full">
          <div className="mt-2 flex flex-col justify-end items-start w-full h-full p-2 gap-2 pb-14">
            {messages.length > 0 ? (
              messages?.map((message) => (
                <div key={message.id} className={`flex flex-col w-full `}>
                  <DirectMessages message={message} userId={userId} />
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                No messages available
              </div>
            )}
          </div>
        </div>
      </ScrollArea>

      <div className="absolute bottom-0 w-full flex p-2 z-50 dark:bg-black bg-gray-100">
        <div className="flex items-center justify-center w-full dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md gap-3">
          <PlusCircle className="text-slate-600 left-0" />
          <input
            value={messageContent}
            onChange={onChange}
            className="w-full focus:outline-none hover:border-none bg-transparent text-sm"
            placeholder="Message"
            onKeyDown={handleKeyPress}
          />
          <SendHorizontalIcon
            className="text-slate-600 right-0 cursor-pointer"
            onClick={() => sendMessage()}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
