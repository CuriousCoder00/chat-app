import { Header } from "@/components/Header/header";

export default function Home() {
  return (
    <div className="flex flex-col justify-start gap-3">
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-xl font-bold">Chat with friends and strangers</h1>
      </div>
    </div>
  );
}
