import { Socials } from "@/components/auth/socials";

const AuthForm = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-md h-1/2 w-full  m-auto md:rounded-2xl p-4 md:p-8 border shadow-inner shadow-slate-300 dark:shadow-slate-800 rounded-xl mt-12">
      <h2 className="font-bold text-xl text-center">Welcome to Chats Verse</h2>
      {children}
      <div className="flex items-center w-full">
        <Socials />
      </div>
    </div>
  );
};

export default AuthForm;
