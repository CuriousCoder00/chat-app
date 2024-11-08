const AuthForm = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-md w-full overflow-hidden md:rounded-2xl p-4 md:p-8 border shadow-inner shadow-slate-300 dark:shadow-slate-800 rounded-xl">
      <h2 className="font-bold text-xl text-center">Welcome to Chats Verse</h2>
      {children}
    </div>
  );
};

export default AuthForm;
