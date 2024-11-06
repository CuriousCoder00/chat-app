"use client";
import { ChatSidebar, ChatSidebarItems } from "@/components/chats/sidebar";
import { UserOnboarding } from "@/components/new-user-confirmation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full">
      <div className="flex items-center justify-center w-full max-h-[92vh] h-screen mt-14 overflow-hidden">
        <div className="flex flex-col w-full h-full">
          <UserOnboarding />
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
    </div>
  );
}

const links = [
  { name: "Chats", image: "/chats" },
  { name: "Friends", image: "/friends" },
  { name: "Settings", image: "/settings" },
];
