import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/Mascot";
import { Zap, ShieldCheck, Wrench, HeadphonesIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nordible-bg via-[#EBF2FF] to-nordible-bg pt-20 pb-32">
      {/* Decorative background elements can go here */}
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.15] font-bold text-nordible-dark mb-6 tracking-tight">
              Professional Email <br className="hidden lg:block" />
              That Makes Your Business <br className="hidden lg:block" />
              <span className="text-nordible-blue">Look Professional</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#2D3F55] mb-10 max-w-2xl mx-auto lg:mx-0">
              Secure, reliable business email with custom domains, 
              powerful spam protection, and effortless setup.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <Link href="#pricing" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto bg-nordible-blue hover:bg-[#0D2B75] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-nordible-blue/20 transition-all hover:-translate-y-1" })}>
                Get Professional Email
              </Link>
              <Link href="#pricing" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto border-2 border-nordible-blue text-nordible-blue hover:bg-nordible-blue/5 rounded-full px-8 py-6 text-lg font-semibold transition-all" })}>
                See Pricing
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-nordible-blue shrink-0" />
                <div>
                  <div className="font-bold text-sm text-nordible-dark">99.9%</div>
                  <div className="text-xs text-[#2D3F55]">Uptime Guarantee</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-nordible-blue shrink-0" />
                <div>
                  <div className="font-bold text-sm text-nordible-dark">Secure Mail</div>
                  <div className="text-xs text-[#2D3F55]">Hosting</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench className="w-6 h-6 text-nordible-blue shrink-0" />
                <div>
                  <div className="font-bold text-sm text-nordible-dark">Easy Setup</div>
                  <div className="text-xs text-[#2D3F55]">& Migration</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HeadphonesIcon className="w-6 h-6 text-nordible-blue shrink-0" />
                <div>
                  <div className="font-bold text-sm text-nordible-dark">24/7 Expert</div>
                  <div className="text-xs text-[#2D3F55]">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mascot Visual */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Speech Bubble */}
              <div className="absolute top-10 right-0 lg:-right-10 bg-white rounded-3xl rounded-br-none p-6 shadow-xl z-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <p className="text-nordible-dark font-semibold text-lg max-w-[200px] text-center">
                  Let's make your business email look professional!
                </p>
              </div>
              
              <Mascot 
                variant="hero-wave"
                alt="Nordible Mascot showing thumbs up for professional email"
                className="w-full h-full z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
