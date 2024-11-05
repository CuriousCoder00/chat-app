export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="flex w-full max-h-[100vh] h-screen">
        <div className="flex flex-col w-full h-full">
            <div className="h-16 w-full flex items-center justify-center border dark:border-slate-700 border-b-2"></div>
          <div className="flex w-full h-full">
            <div className="flex max-sm:hidden w-96 border"></div>
            <div className="flex flex-col h-full w-full overflow-hidden gap-3 sm:border-l-2 dark:border-l-slate-700 border">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
