"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  findUsers,
  initiateConversation,
} from "@/actions/conversations.actions";
import { Conversation, User } from "@prisma/client";
import { Button } from "../ui/button";
import useCurrentUser from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";
export const ChatSearchCreate = () => {
  const currentUser = useCurrentUser();
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<User[]>();
  const router = useRouter();
  // get value from input
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  // get user from search
  const userData = users?.filter((user) => {
    if (
      user.email.startsWith(search) ||
      user?.username?.startsWith(search) ||
      user.name.startsWith(search)
    ) {
      return user;
    }
  });

  // initiate conversation
  const initConversation = async (userId: string) => {
    try {
      const data = await initiateConversation(
        userId,
        currentUser?.id as string
      );
      setTimeout((data: Conversation) => {
        router.push(`/c/chat/${data.id}`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await findUsers();
        setUsers(users as User[]);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      fetchData();
    };
  }, [search]);

  return (
    <div className="flex w-full">
      <Dialog>
        <DialogTrigger className="flex w-full cursor-text">
          <div className="flex items-center justify-start w-full bg-transparent text-gray-800 dark:text-gray-200 text-xs p-2 py-3 border rounded-md shadow-inner shadow-gray-600">
            Search for a user with email or username
          </div>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Search for a user</DialogTitle>
            <DialogDescription>
              Search for a user with their email or username
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-start w-full max-h-[400px] overflow-hidden gap-4">
            <div className="flex items-center justify-center p-2 w-full">
              <Input
                className=" p-2 border rounded-md"
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search for a user with email or username"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full h-full p-2 gap-4 max-h-[300px] overflow-y-auto">
              {search &&
                (userData && userData?.length > 0 ? (
                  userData.map((u) => (
                    <Button
                      variant={"ghost"}
                      className="flex items-center justify-start gap-3 rounded-md p-2 h-12 w-full"
                      onClick={() => initConversation(u?.id as string)}
                    >
                      <Avatar>
                        <AvatarImage src={u?.image as string} />
                        <AvatarFallback>{u?.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-start justify-start flex-col overflow-hidden">
                        <div className="flex items-center justify-start gap-3">
                          {u?.name}
                          <span className="text-xs text-gray-500">
                            @{u?.username}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {u?.email}
                        </span>
                      </div>
                    </Button>
                  ))
                ) : (
                  <div className="flex items-center justify-start">
                    User not found...
                  </div>
                ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
