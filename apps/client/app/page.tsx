import { Header } from "@/components/Header/header";

export default function Home() {
  return (
    <div className="flex flex-col justify-start gap-3">
      <Header />
      <div className="flex items-center justify-center h-screen w-screen max-w-screen">
        <h1 className="text-xl font-bold">Chat with friends and strangers</h1>
      </div>
    </div>
  );
}
