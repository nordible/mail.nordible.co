import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Mascot } from "@/components/mascot/Mascot";
import { MessageCircle } from "lucide-react";

interface SupportCTAProps {
  title?: string;
  description?: string;
}

export function SupportCTA({ 
  title = "Stuck with setup?", 
  description = "Don't let technical hurdles stop your business. Our engineers can handle the entire setup for you via WhatsApp for free." 
}: SupportCTAProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="bg-[#F3F7FF] rounded-[48px] p-10 md:p-20 text-center border border-nordible-border/50 shadow-xl relative overflow-hidden group">
          
          <div className="relative z-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black font-heading text-nordible-dark mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-[#2D3F55]/70 mb-10 leading-relaxed font-medium">
              {description}
            </p>
            <div className="flex justify-center">
              <Link 
                href="https://wa.me/919152333993?text=Hi%2C%20I%20need%20help%20setting%20up%20my%20Nordible%20email." 
                className={buttonVariants({ 
                  size: "lg", 
                  className: "bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-12 h-20 text-2xl font-black shadow-2xl shadow-[#25D366]/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3" 
                })}
              >
                <MessageCircle className="w-8 h-8 fill-current" />
                Talk to an Engineer
              </Link>
            </div>
          </div>

          {/* Decorative Mascot */}
          <div className="hidden lg:block absolute -left-10 -bottom-10 w-64 h-64 opacity-10 pointer-events-none transform -rotate-12">
             <Mascot variant="working-laptop" alt="Support Mascot" className="w-full h-full" />
          </div>
          <div className="hidden lg:block absolute -right-10 -bottom-10 w-64 h-64 opacity-10 pointer-events-none rotate-12">
             <Mascot variant="mail-sorting" alt="Support Mascot Sorting" className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
