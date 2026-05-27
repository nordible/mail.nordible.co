import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-nordible-border bg-white/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-nordible-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <span className="font-heading font-bold text-2xl text-nordible-dark">
            Nordible<span className="text-nordible-blue">.co</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-[#2D3F55]">
          <Link href="#features" className="hover:text-nordible-blue transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-nordible-blue transition-colors">Pricing</Link>
          <Link href="#security" className="hover:text-nordible-blue transition-colors">Security</Link>
          <Link href="#migration" className="hover:text-nordible-blue transition-colors">Migration</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block font-medium text-[#2D3F55] hover:text-nordible-blue transition-colors">
            Log in
          </Link>
          <Link href="#pricing" className={buttonVariants({ className: "bg-nordible-blue hover:bg-[#0D2B75] text-white rounded-full px-6 py-5 font-semibold text-base shadow-sm" })}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
