import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";

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
    <div className="flex flex-col justify-start items-start border w-96 h-full overflow-y-auto px-2 gap-2">
      {children}
    </div>
  );
};

export const ChatSidebarItems = ({ users }: ChatSidebarItemsProps) => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-2">
      {users.map((user, index) => (
        <Link
          key={index}
          href={"/chats/" + user.name}
          className="flex items-center justify-start gap-3 w-full text-md hover:bg-gray-200 hover:text-gray-800 hover:dark:bg-gray-800 dark:text-gray-200 rounded-md p-2"
        >
          <Avatar>
            <AvatarImage
              src={
                "https://lh3.googleusercontent.com/a/ACg8ocLYTBMCF62V0uR21TR6l3k8hBsBJQfehxJBuACbWPAwLRR1ww=s96-c"
              }
              alt={user.name}
            />
          </Avatar>
          {user.name}
        </Link>
      ))}
    </div>
  );
};
