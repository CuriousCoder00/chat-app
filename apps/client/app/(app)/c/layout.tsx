import { ChatSidebar, ChatSidebarItems } from "@/components/chats/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center w-full chat-layout_height">
      <div className="flex flex-col w-full h-full">
        <div className="flex w-full h-full">
          <ChatSidebar>
            <ChatSidebarItems/>
          </ChatSidebar>
          <div className="relative flex flex-col h-full w-full gap-3 border">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}