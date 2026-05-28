import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/Mascot";
import { Zap, ShieldCheck, Wrench, HeadphonesIcon, Mail, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#FAFBFF] pt-4 pb-32 lg:pt-8 lg:pb-56 overflow-hidden">
      {/* Premium Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-nordible-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-nordible-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-24">
          
          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-[55%] text-center lg:text-left pt-8">
            <h1 className="text-5xl md:text-6xl lg:text-[76px] leading-[1.05] font-bold text-nordible-dark mb-8 tracking-tighter font-heading">
              Professional Email <br className="hidden lg:block" />
              That Makes Your Business <br className="hidden lg:block" />
              <span className="text-nordible-blue relative">
                Look Professional
                <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="16" viewBox="0 0 300 16" fill="none" preserveAspectRatio="none">
                   <path d="M1 12C50 4 150 1 299 12" stroke="#FF9F1A" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#2D3F55] mb-12 max-w-2xl mx-auto lg:mx-0 opacity-80 leading-relaxed font-medium">
              You've worked hard to build your business. Don't let a generic @gmail address make you look like a temporary side-hustle. Upgrade to a professional identity today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-20">
              <Link href="#pricing" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-20 bg-nordible-blue hover:bg-nordible-dark text-white rounded-full px-12 text-2xl font-black shadow-2xl shadow-nordible-blue/30 transition-all hover:-translate-y-1.5 active:scale-95" })}>
                Get Started for ₹89/mo
              </Link>
              <Link href="#pricing" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-20 border-2 border-nordible-blue/20 text-nordible-blue hover:bg-nordible-blue/5 rounded-full px-12 text-2xl font-black transition-all hover:border-nordible-blue" })}>
                See Pricing
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-2xl bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-nordible-blue" />
                </div>
                <div>
                  <div className="font-bold text-lg text-nordible-dark">99.9%</div>
                  <div className="text-sm text-[#2D3F55]/60 font-bold whitespace-nowrap">Uptime</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-2xl bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-nordible-blue" />
                </div>
                <div>
                  <div className="font-bold text-lg text-nordible-dark whitespace-nowrap">Secure</div>
                  <div className="text-sm text-[#2D3F55]/60 font-bold whitespace-nowrap">Mail Hosting</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-2xl bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6 text-nordible-blue" />
                </div>
                <div>
                  <div className="font-bold text-lg text-nordible-dark">Easy</div>
                  <div className="text-sm text-[#2D3F55]/60 font-bold whitespace-nowrap">Setup & Migration</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 rounded-2xl bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <HeadphonesIcon className="w-6 h-6 text-nordible-blue" />
                </div>
                <div>
                  <div className="font-bold text-lg text-nordible-dark whitespace-nowrap">24/7</div>
                  <div className="text-sm text-[#2D3F55]/60 font-bold whitespace-nowrap">Expert Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mascot Visual */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end lg:pr-10">
            <div className="relative w-full max-w-[700px] aspect-square transform lg:scale-[1.3] lg:translate-x-8 lg:-translate-y-4">
              
              {/* Floating Decorative Elements */}
              <div className="absolute top-[15%] -left-12 w-20 h-20 bg-white rounded-3xl shadow-2xl flex items-center justify-center rotate-[-15deg] z-20 animate-bounce duration-[4000ms] border border-nordible-blue/5">
                <Mail className="w-10 h-10 text-nordible-blue" />
              </div>
              <div className="absolute bottom-[20%] -right-10 w-16 h-16 bg-nordible-orange rounded-full shadow-2xl flex items-center justify-center z-20 animate-pulse border-4 border-white">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="absolute top-1/2 -left-20 w-12 h-12 bg-nordible-blue/30 rounded-full blur-xl animate-pulse" />
              
              <Mascot 
                variant="hero-wave"
                alt="Googloo the Nordible Mascot"
                className="w-full h-full z-10 drop-shadow-[0_35px_60px_rgba(0,0,0,0.1)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
