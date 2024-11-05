import { Button } from "@/components/ui/button";
import { ModeToggle } from "../theme-toggler";

type Props = {};
export const Header = ({}: Props) => {
  return (
    <header className="flex items-center justify-between p-2 px-8">
      <div className=" flex items-center space-x-4">
        <div className="text-2xl font-bold">Chat Verse</div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <ModeToggle />
        <Button>Login</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};
