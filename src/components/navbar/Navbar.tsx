import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-nordible-border/50 bg-white/70 backdrop-blur-xl transition-all">
      <div className="max-w-[1280px] mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 transition-transform group-hover:rotate-6 drop-shadow-sm">
            <Image
              src="/logo.webp"
              alt="Nordible Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl leading-none text-nordible-dark tracking-tight">
              email by <span className="text-nordible-blue">Nordible.co</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10 font-bold text-sm text-[#2D3F55]/80 uppercase tracking-widest">
          <Link href="#features" className="hover:text-nordible-blue transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-nordible-blue transition-colors">Pricing</Link>
          <Link href="#security" className="hover:text-nordible-blue transition-colors">Security</Link>
          <Link href="#migration" className="hover:text-nordible-blue transition-colors">Migration</Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link href="https://mail.nordible.co/SOGo" className="hidden lg:block font-bold text-sm uppercase tracking-widest text-[#2D3F55] hover:text-nordible-blue transition-colors">
            Log in
          </Link>
          <Link href="#pricing" className={buttonVariants({ className: "bg-nordible-blue hover:bg-nordible-dark text-white rounded-full px-8 py-6 font-black text-base shadow-xl shadow-nordible-blue/20 transition-all hover:-translate-y-0.5 active:scale-95" })}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
