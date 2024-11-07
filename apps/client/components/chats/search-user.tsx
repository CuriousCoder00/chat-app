import { useState } from "react";
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
export const ChatSearchCreate = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="flex w-full">
      <Dialog>
        <DialogTrigger className="flex w-full">
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
              placeholder="Search for a user with email or username"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full h-full p-2 gap-4">
            <div className="flex items-center justify-start gap-3 rounded-md p-2 shadow-inner shadow-gray-600 w-full">
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex items-start justify-start flex-col overflow-hidden">
                Name
                <div className="flex justify-start flex-nowrap items-center overflow-hidden">
                  <span className="w-full text-ellipsis text-nowrap text-sm">
                    this is the last message data that was sent by
                  </span>
                  ...
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 rounded-md p-2 shadow-inner shadow-gray-600 w-full">
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex items-start justify-start flex-col overflow-hidden">
                Name
                <div className="flex justify-start flex-nowrap items-center overflow-hidden">
                  <span className="w-full text-ellipsis text-nowrap text-sm">
                    this is the last message data that was sent by
                  </span>
                  ...
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 rounded-md p-2 shadow-inner shadow-gray-600 w-full">
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex items-start justify-start flex-col overflow-hidden">
                Name
                <div className="flex justify-start flex-nowrap items-center overflow-hidden">
                  <span className="w-full text-ellipsis text-nowrap text-sm">
                    this is the last message data that was sent by
                  </span>
                  ...
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start gap-3 rounded-md p-2 shadow-inner shadow-gray-600 w-full">
              <Avatar>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex items-start justify-start flex-col overflow-hidden">
                Name
                <div className="flex justify-start flex-nowrap items-center overflow-hidden">
                  <span className="w-full text-ellipsis text-nowrap text-sm">
                    this is the last message data that was sent by
                  </span>
                  ...
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
