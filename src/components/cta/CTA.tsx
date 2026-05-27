import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/Mascot";

export function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-nordible-bg to-[#EBF2FF] rounded-[40px] p-10 md:p-16 text-center border border-nordible-border shadow-lg relative overflow-hidden">
          
          <div className="relative z-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-nordible-dark mb-6">
              Ready to look more professional?
            </h2>
            <p className="text-lg text-[#2D3F55] mb-10">
              Join thousands of businesses using Nordible.co for their professional email. 
              Setup takes less than 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#pricing" className={buttonVariants({ size: "lg", className: "bg-nordible-blue hover:bg-[#0D2B75] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg shadow-nordible-blue/20 transition-all hover:-translate-y-1" })}>
                Get Started Now
              </Link>
            </div>
            <p className="mt-4 text-sm text-[#2D3F55] opacity-70">
              ✓ No credit card required to check domain availability
            </p>
          </div>

          {/* Decorative Mascot */}
          <div className="hidden md:block absolute -left-10 -bottom-10 w-64 h-64 opacity-50 pointer-events-none transform -scale-x-100">
             <Mascot variant="hero-wave" alt="Decorative Mascot" className="w-full h-full object-contain" />
          </div>
          <div className="hidden md:block absolute -right-10 -bottom-10 w-64 h-64 opacity-50 pointer-events-none">
             <Mascot variant="celebrate" alt="Decorative Mascot Celebration" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
