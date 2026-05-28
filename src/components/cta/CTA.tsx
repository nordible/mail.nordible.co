import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/Mascot";

export function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-24 relative z-10">
        <div className="bg-nordible-section rounded-[60px] p-12 md:p-24 text-center border border-nordible-border/50 shadow-2xl relative overflow-hidden group">
          
          {/* Background Gradient Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-nordible-blue/5 to-nordible-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="relative z-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black font-heading text-nordible-dark mb-8 tracking-tighter">
              Ready to look more professional?
            </h2>
            <p className="text-xl md:text-2xl text-[#2D3F55] mb-12 opacity-80 leading-relaxed font-medium">
              Join thousands of businesses using EMAIL by Nordible.Co for their professional email. 
              Setup takes less than 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="https://wa.me/919152333993" className={buttonVariants({ size: "lg", className: "bg-nordible-blue hover:bg-nordible-dark text-white rounded-full px-12 h-20 text-2xl font-black shadow-2xl shadow-nordible-blue/30 transition-all hover:-translate-y-1 active:scale-95" })}>
                Get Started Now
              </Link>
            </div>
            <p className="mt-8 text-sm text-[#2D3F55]/60 font-bold tracking-wide uppercase">
              ✓ No credit card required to check domain availability
            </p>
          </div>

          {/* Decorative Mascot */}
          <div className="hidden lg:block absolute -left-20 -bottom-20 w-80 h-80 opacity-20 pointer-events-none transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
             <Mascot variant="hero-wave" alt="Googloo Decorative" className="w-full h-full" />
          </div>
          <div className="hidden lg:block absolute -right-20 -bottom-20 w-80 h-80 opacity-20 pointer-events-none rotate-12 group-hover:rotate-0 transition-transform duration-1000">
             <Mascot variant="celebrate" alt="Googloo Decorative Celebration" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
