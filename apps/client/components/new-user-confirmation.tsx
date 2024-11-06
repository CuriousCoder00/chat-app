"use client";

import useCurrentUser from "@/hooks/use-current-user";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { useEffect, useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { updateUsername } from "@/actions/user.actions";
import { Button } from "./ui/button";
import {
  UsernameSchema,
  UsernameSchemaType,
} from "@/lib/validators/user.validations";

type Props = {};
export const UserOnboarding = ({}: Props) => {
  const user = useCurrentUser();
  const [open, setOpen] = useState(true);
  const [isPending, setTransition] = useTransition();

  const username = user?.username;
  const form = useForm<UsernameSchemaType>({
    resolver: zodResolver(UsernameSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    if (username) {
      setOpen(false);
    }
  });

  const submitUsername = async (data: UsernameSchemaType) => {
    setTransition(async () => {
      await updateUsername(data.username, user?.email as string).then((res) => {
        if (res?.success) {
          setOpen(false);
        }
        console.log(res);
      });
    });
  };
  return (
    <div
      className={`${!open && "hidden"} fixed z-50 flex w-screen h-screen max-w-screen max-h-screen`}
    >
      <Dialog open={open}>
        <DialogContent>
          <DialogTitle>Create a user name</DialogTitle>
          <DialogDescription>
            This will be the name that other users will see
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitUsername)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        className="bg-zinc-900 text-white"
                        {...field}
                        placeholder="john_doe"
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-red-500 text-end" />
                  </FormItem>
                )}
              />
              <Button
                disabled={isPending}
                type="submit"
                className="w-full my-4"
              >
                {isPending ? "Saving..." : "Save"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
