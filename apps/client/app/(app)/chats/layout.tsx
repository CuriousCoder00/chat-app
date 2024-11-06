"use client";
import { ChatSidebar, ChatSidebarItems } from "@/components/chats/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center w-full chat-layout_height overflow-hidden">
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full h-full">
          <ChatSidebar>
            <ChatSidebarItems users={links} />
          </ChatSidebar>
          <div className="flex flex-col h-full w-full overflow-hidden gap-3 border">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const links = [
  { name: "Chats", image: "/chats" },
  { name: "Friends", image: "/friends" },
  { name: "Settings", image: "/settings" },
];
