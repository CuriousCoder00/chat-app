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
  UserRegistrationSchema,
  UserRegistrationSchemaType,
} from "@/lib/validators/user.validations";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

type Props = {};
export const RegistrationForm = ({}: Props) => {
  const form = useForm<UserRegistrationSchemaType>({
    resolver: zodResolver(UserRegistrationSchema),
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage className="text-xs text-red-500 text-end" />
              </FormItem>
            )}
          />
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
          <Button className="w-full mt-3" type="submit">
            {"Register"}
          </Button>
          <div className="flex justify-end mt-2">
            <Link
              className="text-sm hover:text-blue-600"
              href="/auth/login"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </Form>
    </AuthForm>
  );
};
