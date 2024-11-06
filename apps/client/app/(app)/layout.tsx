"use client";
import { UserOnboarding } from "@/components/new-user-confirmation";
import { Sidebar, SidebarItems } from "@/components/sidebar";
import { MessageSquare, Settings, UserPlus } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full">
      <div className="flex items-center justify-center w-full max-h-[92vh] h-screen overflow-hidden">
        <div className="flex flex-col w-full h-full">
          <UserOnboarding />
          <div className="flex w-full h-full">
            <Sidebar>
              <SidebarItems>
                <div className="flex flex-col items-start mt-6 gap-1 max-sm:hidden">
                  <Link
                    className="flex gap-2 items-center justify-start p-2 hover:bg-gray-200 hover:dark:bg-gray-900 w-full"
                    href={"/c"}
                  >
                    <MessageSquare size={16} /> Chats
                  </Link>
                  <Link
                    className="flex gap-2 items-center justify-start p-2 hover:bg-gray-200 hover:dark:bg-gray-900 w-full"
                    href={"/friends"}
                  >
                    <UserPlus size={16} />
                    Friends
                  </Link>
                  <Link
                    className="flex gap-2 items-center justify-start p-2 hover:bg-gray-200 hover:dark:bg-gray-900 w-full"
                    href={"/settings"}
                  >
                    <Settings size={16} />
                    Settings
                  </Link>
                </div>
              </SidebarItems>
            </Sidebar>
            <div className="flex h-full w-full overflow-hidden gap-3 border">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
