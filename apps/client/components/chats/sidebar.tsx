import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { getAllUsers } from "@/actions/temp.action";

type ChatSidebarProps = {
  children: React.ReactNode;
};

type ChatSidebarItemsProps = {
  users: {
    name: string;
    image: string;
  }[];
};

export const ChatSidebar = ({ children }: ChatSidebarProps) => {
  return (
    <div className="flex flex-col justify-start items-start border w-96 h-full overflow-y-auto p-2 gap-2">
      {children}
    </div>
  );
};

export const ChatSidebarItems = async ({ users }: ChatSidebarItemsProps) => {
  const data = await getAllUsers();
  const userData = data?.users;
  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      <Input
        className="w-full bg-transparent text-gray-800 dark:text-gray-200 text-xs"
        placeholder="Search for a user with email or username"
      />
      {userData &&
        userData.map((user, index) => (
          <Link
            key={index}
            href={"/c/chat/" + user.id}
            className="flex items-center justify-start gap-3 w-full text-md hover:bg-gray-200 hover:text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 rounded-md p-2 transition-colors duration-200 ease-in-out"
          >
            <Avatar>
              <AvatarImage src={user.image as string} alt={user.name} />
              <AvatarFallback>{user.name?.[0]}</AvatarFallback>
            </Avatar>
            <div className="flex items-start justify-center flex-col w-full overflow-hidden">
              {user.name}
              <div className="flex justify-start flex-nowrap items-center w-full">
                <span className="w-full text-ellipsis text-nowrap text-sm">
                  this is the last message data that was sent by either you or
                  the other user
                </span>
                ...
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};
