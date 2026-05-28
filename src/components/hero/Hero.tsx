import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/Mascot";
import { Zap, ShieldCheck, Wrench, HeadphonesIcon, Mail, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[#FAFBFF] pt-8 pb-32 lg:pt-16 lg:pb-48 overflow-hidden">
      {/* Premium Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[1000px] h-[1000px] bg-nordible-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[800px] h-[800px] bg-nordible-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-[55%] text-center lg:text-left pt-6 lg:pt-0">
            <h1 className="text-5xl md:text-5xl lg:text-[64px] leading-[1.05] font-bold text-nordible-dark mb-6 tracking-tighter font-heading">
              Professional Email <br className="hidden lg:block" />
              That Makes Your Business <br className="hidden lg:block" />
              <span className="text-nordible-blue relative inline-block mt-1">
                Look Professional
                <svg className="absolute -bottom-1 left-0 w-full" width="100%" height="16" viewBox="0 0 300 16" fill="none" preserveAspectRatio="none">
                   <path d="M0 12C50 4 150 1 300 12" stroke="#FF9F1A" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-xl lg:text-2xl text-[#2D3F55] mb-8 max-w-2xl mx-auto lg:mx-0 opacity-80 leading-relaxed font-medium">
              You've worked hard to build your business. Don't let a generic @gmail address make you look like a temporary side-hustle. Upgrade to a professional identity today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link href="#pricing" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-16 bg-nordible-blue hover:bg-nordible-dark text-white rounded-full px-10 text-xl font-black shadow-2xl shadow-nordible-blue/30 transition-all hover:-translate-y-1 active:scale-95" })}>
                Get Started for ₹89/mo
              </Link>
              <Link href="#pricing" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto h-16 border-4 border-nordible-blue/20 text-nordible-blue hover:bg-nordible-blue/10 rounded-full px-10 text-xl font-black transition-all hover:border-nordible-blue" })}>
                See Pricing
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-nordible-border/80 rounded-full shadow-sm hover:shadow-md transition-all">
                <Zap className="w-4 h-4 text-nordible-blue" />
                <span className="font-bold text-xs text-nordible-dark">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-nordible-border/80 rounded-full shadow-sm hover:shadow-md transition-all">
                <ShieldCheck className="w-4 h-4 text-nordible-blue" />
                <span className="font-bold text-xs text-nordible-dark">Spam Protection</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-nordible-border/80 rounded-full shadow-sm hover:shadow-md transition-all">
                <Wrench className="w-4 h-4 text-nordible-blue" />
                <span className="font-bold text-xs text-nordible-dark">Easy Migration</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white border border-nordible-border/80 rounded-full shadow-sm hover:shadow-md transition-all">
                <HeadphonesIcon className="w-4 h-4 text-nordible-blue" />
                <span className="font-bold text-xs text-nordible-dark">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mascot Visual */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end lg:pr-10 mt-12 lg:mt-0">
            <div className="relative w-full max-w-[600px] aspect-square transform lg:scale-[1.1] lg:translate-x-8">
              
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
