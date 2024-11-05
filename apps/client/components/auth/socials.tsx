import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
type Props = {};
export const Socials = ({}: Props) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full">
      <Button className="w-full text-md">
        Continue with <FcGoogle />
      </Button>
    </div>
  );
};
