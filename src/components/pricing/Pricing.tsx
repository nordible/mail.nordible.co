import { Mascot } from "@/components/mascot/Mascot";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-nordible-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full"></div>
          
          {/* Peeking Mascot behind the center card */}
          <div className="hidden lg:block absolute -bottom-16 left-1/2 transform translate-x-[120px] w-32 h-32 z-0">
            <Mascot variant="pricing-peek" alt="Mascot recommending pricing" className="w-full h-full object-cover object-bottom" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-3xl p-8 border border-nordible-border shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-bold text-nordible-dark mb-2">Starter</h3>
              <p className="text-sm text-[#2D3F55] mb-6">Perfect for individuals and small businesses.</p>
              <div className="text-4xl font-bold text-nordible-dark mb-1">
                ₹149<span className="text-base font-normal text-[#2D3F55]">/mo</span>
              </div>
              <p className="text-xs text-[#2D3F55] opacity-70">Billed annually</p>
            </div>
            <Button variant="outline" className="w-full mb-8 border-nordible-blue text-nordible-blue hover:bg-nordible-blue/5 rounded-full">
              Get Started
            </Button>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Custom Domain Email
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> 5GB Secure Storage
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Webmail & App Access
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Standard Email Support
              </li>
            </ul>
          </div>

          {/* Business Plan (Highlighted) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-nordible-blue shadow-xl lg:-mt-8 lg:mb-8 relative z-20">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nordible-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
              🐱 Recommended by Mascot
            </div>
            <div className="text-center mb-6 mt-4">
              <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-2">Business</h3>
              <p className="text-sm text-[#2D3F55] mb-6">Best for growing businesses.</p>
              <div className="text-5xl font-bold text-nordible-dark mb-1">
                ₹299<span className="text-base font-normal text-[#2D3F55]">/mo</span>
              </div>
              <p className="text-xs text-[#2D3F55] opacity-70">Billed annually</p>
            </div>
            <Button className="w-full mb-8 bg-nordible-blue hover:bg-nordible-dark text-white rounded-full">
              Get Started
            </Button>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-medium text-nordible-dark">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Everything in Starter
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> 20GB Secure Storage
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Free Domain (1st Year)
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Priority Support
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-8 border border-nordible-border shadow-sm">
            <div className="text-center mb-6">
              <h3 className="text-xl font-heading font-bold text-nordible-dark mb-2">Enterprise</h3>
              <p className="text-sm text-[#2D3F55] mb-6">For large teams and organizations.</p>
              <div className="text-4xl font-bold text-nordible-dark mb-1">
                ₹599<span className="text-base font-normal text-[#2D3F55]">/mo</span>
              </div>
              <p className="text-xs text-[#2D3F55] opacity-70">Billed annually</p>
            </div>
            <Button variant="outline" className="w-full mb-8 border-nordible-blue text-nordible-blue hover:bg-nordible-blue/5 rounded-full">
              Get Started
            </Button>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm font-medium text-nordible-dark">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Everything in Business
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> 100GB Secure Storage
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> Advanced Compliance
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3F55]">
                <Check className="w-5 h-5 text-nordible-blue shrink-0" /> 24/7 Phone Support
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-center mt-12 text-sm text-[#2D3F55] opacity-70">
          * Prices are exclusive of GST as applicable. 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
