import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-foreground">
      {/* Background Image - Same as Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_bg.png"
          alt="BESTIA Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="absolute top-10 left-10 opacity-20 pointer-events-none select-none z-10 hidden md:block">
        <h1 className="text-9xl font-anton uppercase -rotate-90 origin-top-left -ml-20 text-white">
          BESTIA
        </h1>
      </div>
      
      <div className="relative z-20 w-full max-w-md">
        <RegisterForm />
      </div>
    </main>
  );
}
