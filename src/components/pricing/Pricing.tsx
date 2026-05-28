import { Mascot } from "@/components/mascot/Mascot";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#F3F7FF]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-24 relative">
          <h2 className="text-4xl md:text-[48px] font-bold font-heading text-nordible-dark mb-6">
            Simple, Transparent Pricing
          </h2>
          <div className="w-32 h-1.5 bg-nordible-blue mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-[#2D3F55] max-w-2xl mx-auto opacity-80 leading-relaxed">
            Less than the cost of a few coffees. More valuable than anything else you'll spend ₹89 on this month.
          </p>
          
          {/* Peeking Mascot behind the center card */}
          <div className="hidden lg:block absolute -bottom-20 left-1/2 transform translate-x-[140px] w-40 h-40 z-0 drop-shadow-2xl">
            <Mascot variant="pricing-peek" alt="Googloo the Mascot recommending pricing" className="w-full h-full object-cover object-bottom" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch relative z-10 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-[40px] p-10 border border-nordible-border/50 shadow-xl shadow-nordible-blue/5 flex flex-col transition-transform duration-300 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-3">Starter</h3>
              <p className="text-base text-[#2D3F55] mb-8 opacity-70">Perfect for individuals and starting businesses.</p>
              <div className="text-5xl font-black text-nordible-dark mb-2">
                ₹89<span className="text-lg font-medium text-[#2D3F55] opacity-50">/mo</span>
              </div>
              <p className="text-sm text-nordible-blue font-bold tracking-wide">Billed annually</p>
            </div>
            <a href="https://wa.me/919152333993?text=Hi%2C%20I%20want%20to%20get%20started%20with%20the%20Starter%20Email%20plan%20for%20%E2%82%B989." target="_blank" className="flex items-center justify-center w-full mb-10 border-2 border-nordible-blue/20 text-nordible-blue hover:bg-nordible-blue hover:text-white rounded-full font-bold py-4 transition-all duration-300 shadow-sm">
              Get Started
            </a>
            <ul className="space-y-5 flex-1">
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Custom Domain Email
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                10GB Secure Storage
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Webmail & App Access
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Standard Email Support
              </li>
            </ul>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="bg-white rounded-[40px] p-10 border-[3px] border-nordible-blue shadow-2xl shadow-nordible-blue/20 lg:-mt-8 lg:-mb-8 relative z-20 flex flex-col transition-transform duration-300 hover:scale-[1.03]">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-nordible-orange text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.1em] shadow-lg flex items-center gap-2">
              <span className="text-xl leading-none">🐱</span> Recommended by Googloo
            </div>
            <div className="text-center mb-8 mt-6">
              <h3 className="text-3xl font-heading font-extrabold text-nordible-dark mb-3">Professional</h3>
              <p className="text-base text-[#2D3F55] mb-8 opacity-70 font-medium">Best for growing businesses.</p>
              <div className="text-6xl font-black text-nordible-dark mb-2">
                ₹199<span className="text-lg font-medium text-[#2D3F55] opacity-50">/mo</span>
              </div>
              <p className="text-sm text-nordible-blue font-black tracking-wide">Billed annually</p>
            </div>
            <a href="https://wa.me/919152333993?text=Hi%2C%20I%20want%20to%20get%20started%20with%20the%20Professional%20Email%20plan%20for%20%E2%82%B9199." target="_blank" className="flex items-center justify-center w-full mb-10 bg-nordible-blue hover:bg-nordible-dark text-white rounded-full font-black py-5 transition-all duration-300 shadow-xl shadow-nordible-blue/30 scale-105">
              Get Started
            </a>
            <ul className="space-y-5 flex-1">
              <li className="flex items-center gap-4 text-base font-bold text-nordible-dark">
                <div className="w-6 h-6 rounded-full bg-nordible-blue flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-4 h-4 text-white" />
                </div>
                Everything in Starter
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                30GB Secure Storage
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Bring Your Own Domain(s)
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Priority Support
              </li>
            </ul>
          </div>

          {/* Custom Plan */}
          <div className="bg-white rounded-[40px] p-10 border border-nordible-border/50 shadow-xl shadow-nordible-blue/5 flex flex-col transition-transform duration-300 hover:scale-[1.02]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-3">Custom</h3>
              <p className="text-base text-[#2D3F55] mb-8 opacity-70">For agencies and large teams.</p>
              <div className="text-5xl font-black text-nordible-dark mb-2">
                Tailored
              </div>
              <p className="text-sm text-nordible-blue font-bold tracking-wide">Contact for details</p>
            </div>
            <a href="https://wa.me/919152333993?text=Hi%2C%20I%20am%20interested%20in%20a%20Custom%20Email%20Plan." target="_blank" className="flex items-center justify-center w-full mb-10 border-2 border-nordible-blue/20 text-nordible-blue hover:bg-nordible-blue hover:text-white rounded-full font-bold py-4 transition-all duration-300 shadow-sm">
              Contact Us
            </a>
            <ul className="space-y-5 flex-1">
              <li className="flex items-center gap-4 text-base font-bold text-nordible-dark">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Everything in Professional
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Unlimited Storage Options
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                Dedicated IP & Compliance
              </li>
              <li className="flex items-center gap-4 text-base text-[#2D3F55]">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-nordible-blue" />
                </div>
                24/7 Dedicated Support
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center mt-16 text-sm text-[#2D3F55] opacity-50 relative z-10 font-medium">
          * Prices are exclusive of GST as applicable. 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
