"use client";
import Link from "next/link";
import { getAllConversations } from "@/actions/conversations.actions";
import useCurrentUser from "@/hooks/use-current-user";
import { useEffect, useState } from "react";
import { Conversation } from "@prisma/client";
import { ChatMember } from "./chat-member";
import { ChatSearchCreate } from "./search-user";

type ChatSidebarProps = {
  children: React.ReactNode;
};

export const ChatSidebar = ({ children }: ChatSidebarProps) => {
  return (
    <div className="flex flex-col justify-start items-start border w-96 h-full overflow-y-auto p-2 gap-2">
      {children}
    </div>
  );
};

export const ChatSidebarItems = () => {
  const user = useCurrentUser();
  const userId = user?.id as string;
  const [conversations, setConversations] = useState<Conversation[]>(
    [] as Conversation[]
  );
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async (id: string) => {
      setLoading(true);
      try {
        const data = (await getAllConversations(
          user?.id as string
        )) as Conversation[];
        setConversations(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(userId);
  }, []);
  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      <ChatSearchCreate />
      {!loading ? (
        conversations.map((conversation, index) => (
          <Link
            key={index}
            href={"/c/chat/" + conversation.id}
            className="flex items-center justify-start gap-3 w-full text-md hover:bg-gray-200 hover:text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 rounded-md p-2 transition-colors duration-200 ease-in-out overflow-hidden "
          >
            <ChatMember id={conversation.memberOneId} />
          </Link>
        ))
      ) : (
        <div className="flex flex-col items-start justify-start w-full h-full gap-2 overflow-hidden">
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
          <div className="flex items-center space-x-4 w-full px-2">
            <div className="flex items-center justify-center rounded-full h-12 w-12 aspect-square border shadow-inner dark:shadow-gray-600 animate-pulse" />
            <div className="flex flex-col gap-1 w-full">
              <div className="w-1/2 h-6 rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse" />
              <span className="w-full h-3 border rounded-md bg-zinc-800 dark:shadow-gray-600 animate-pulse"></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
