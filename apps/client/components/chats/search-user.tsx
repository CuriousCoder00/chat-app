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
  findUserByUsernameOrEmail,
  initiateConversation,
} from "@/actions/conversations.actions";
import { Conversation, User } from "@prisma/client";
import { Button } from "../ui/button";
import useCurrentUser from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";
export const ChatSearchCreate = () => {
  const currentUser = useCurrentUser();
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<User>();
  const router = useRouter();
  // get value from input
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const initConversation = async () => {
    try {
      const data = await initiateConversation(
        user?.id as string,
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
    const fetchData = async (data: string) => {
      try {
        const user = await findUserByUsernameOrEmail(data);
        setUser(user as User);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchData(search);
    }, 3000);

    return () => {
      fetchData(search);
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Search for a user</DialogTitle>
            <DialogDescription>
              Search for a user with their email or username
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center p-2 w-full">
            <Input
              className=" p-2 border rounded-md"
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search for a user with email or username"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-4">
            {search &&
              (user ? (
                <Button
                  variant={"ghost"}
                  className="flex items-center justify-start gap-3 rounded-md p-2 h-12 w-full"
                  onClick={() => initConversation()}
                >
                  <Avatar>
                    <AvatarImage src={user?.image as string} />
                    <AvatarFallback>{user?.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex items-start justify-start flex-col overflow-hidden">
                    {user.name}
                    <div className="flex justify-start flex-nowrap items-center overflow-hidden">
                      {/* <span className="w-full text-ellipsis text-nowrap text-sm">
                        this is the last message data that was sent by
                      </span>
                      ... */}
                    </div>
                  </div>
                </Button>
              ) : (
                <div className="flex items-center justify-start">
                  User not found...
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
