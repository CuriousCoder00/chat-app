import React from "react";
import { PlusCircle, SendHorizontalIcon } from "lucide-react";
import { ChatHeader } from "./chat-header";

const ChatBox = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col">
        <ChatHeader />
      </div>
      <div className="relative flex flex-col items-start justify-start w-full h-full">
        <div className="absolute bottom-12 mt-2 flex flex-col items-start justify-start p-2 overflow-y-auto hidden-scrollbar max-h-[100%]"></div>
        <div className="absolute bottom-2 w-full flex px-2">
          <div className="flex items-center justify-center w-full dark:bg-zinc-800 bg-zinc-200 p-2 rounded-md gap-3">
            <PlusCircle className="text-slate-600 left-0" />
            <input
              className="w-full focus:outline-none hover:border-none bg-transparent text-sm"
              placeholder="Message"
            />
            <SendHorizontalIcon className="text-slate-600 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
