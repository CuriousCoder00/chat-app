import AuthForm from "@/components/auth/auth-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  UserLoginSchema,
  UserLoginSchemaType,
} from "@/lib/validators/user.validations";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

type Props = {};
export const LoginForm = ({}: Props) => {
  const form = useForm<UserLoginSchemaType>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <AuthForm>
      <Form {...form}>
        <form className="my-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="john.doe@gmail.com" />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} type="password" placeholder="******" />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />
              </FormItem>
            )}
          />
          <div className="mb-4 text-end">
            <Link
              className="text-xs text-white hover:text-blue-400"
              href={"/auth/reset-pass"}
            >
              Forgot Password?
            </Link>
          </div>
          <Button className="w-full" type="submit">
            {"Login →"}
          </Button>
          <div className="flex justify-end mt-2">
            <Link
              className="text-sm text-white hover:text-blue-400"
              href="/auth/register"
            >
              Don&apos;t have an account yet?
            </Link>
          </div>
        </form>
      </Form>
    </AuthForm>
  );
};
