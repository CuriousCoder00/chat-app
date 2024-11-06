"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, UserPenIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  image: string;
  name: string;
};
export const UserAvatar = ({ image, name }: Props) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={image} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            onClick={() => router.push("/profile")}
            variant={"default"}
            className="w-full flex justify-start items-center bg-transparent text-black dark:text-white cursor-pointer"
          >
            <UserPenIcon />
            <span>Profile</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            variant={"default"}
            className="w-full flex justify-start items-center bg-transparent text-black dark:text-white cursor-pointer"
            onClick={() => {
              signOut();
            }}
          >
            <LogOut />
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
