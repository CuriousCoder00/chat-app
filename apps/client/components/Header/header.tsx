"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-toggler";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/use-current-user";
import { UserAvatar } from "../user-avatar";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu, MessageSquare, Settings, UserPlus } from "lucide-react";

type Props = {};
export const Header = ({}: Props) => {
  const router = useRouter();
  const user = useCurrentUser();
  return (
    <header className="fixed top-0 w-full flex items-center justify-between p-2 px-8">
      <div className=" flex items-center space-x-4">
        <div className="flex items-center justify-center sm:hidden">
          {user && (
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetTitle className="text-xl font-bold">
                  Chat Verse
                </SheetTitle>
                <div className="flex flex-col gap-3 p-2 mt-5">
                  <Link
                    className="flex gap-3 hover:bg-gray-200 hover:dark:bg-gray-900 rounded-md p-2"
                    href={"/chats"}
                  >
                    <MessageSquare /> Chats
                  </Link>
                  <Link
                    className="flex gap-3 hover:bg-gray-200 hover:dark:bg-gray-900 rounded-md p-2"
                    href={"/friends"}
                  >
                    <UserPlus /> Friends
                  </Link>
                  <Link
                    className="flex gap-3 hover:bg-gray-200 hover:dark:bg-gray-900 rounded-md p-2"
                    href={"/settings"}
                  >
                    <Settings /> Settings
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
        <Link href={"/"} className="text-2xl font-bold">
          Chat Verse
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        {user && (
          <div className="flex items-center gap-3 max-sm:hidden">
            <Link className="flex gap-2 items-center justify-center" href={"/chats"}>
              <MessageSquare size={16} /> Chats
            </Link>
            <Link className="flex gap-2 items-center justify-center" href={"/friends"}>
              <UserPlus size={16} />
              Friends
            </Link>
            <Link className="flex gap-2 items-center justify-center" href={"/settings"}>
              <Settings size={16} />
              Settings
            </Link>
          </div>
        )}
        <ModeToggle />
        {user ? (
          <UserAvatar image={user.image as string} name={user.name as string} />
        ) : (
          <Button onClick={() => router.push("/auth/login")}>Login</Button>
        )}
      </div>
    </header>
  );
};
