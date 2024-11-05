"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-toggler";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};
export const Header = ({}: Props) => {
  const router = useRouter();
  return (
    <header className="fixed top-0 w-full flex items-center justify-between p-2 px-8">
      <div className=" flex items-center space-x-4">
        <Link href={"/"} className="text-2xl font-bold">
          Chat Verse
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <ModeToggle />
        <Button onClick={() => router.push("/auth/login")}>Login</Button>
        <Button onClick={() => router.push("/auth/register")}>Sign Up</Button>
      </div>
    </header>
  );
};
