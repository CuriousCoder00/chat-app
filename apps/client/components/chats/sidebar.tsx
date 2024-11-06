import Link from "next/link";

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
    <div className="flex flex-col justify-start items-start w-full">
      {users.map((user, index) => (
        <Link
          key={index}
          href={"/chats/" + user.name}
          className="flex w-full text-md text-gray-700 hover:bg-gray-200 hover:text-gray-800 rounded-md p-2"
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
};
