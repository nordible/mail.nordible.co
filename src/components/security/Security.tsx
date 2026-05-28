import { Shield, Mail, Lock, Server, CheckCircle2, UserCheck } from "lucide-react";
import { Mascot } from "@/components/mascot/Mascot";

export function Security() {
  const securityFeatures = [
    { icon: Mail, title: "Advanced Spam Filtering", desc: "Enterprise-grade protection" },
    { icon: Server, title: "Daily Backups", desc: "Your data is always safe" },
    { icon: Shield, title: "DKIM, SPF, DMARC", desc: "Verified sender authority" },
    { icon: Lock, title: "SSL/TLS Encryption", desc: "Military-grade privacy" },
    { icon: UserCheck, title: "Privacy-First", desc: "No data sharing, ever" }
  ];

  return (
    <section id="security" className="py-24 bg-nordible-dark text-white overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Mascot Column */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px] aspect-square relative transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <Mascot variant="security-shield" alt="Googloo the Mascot with magnifying glass inspecting security" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(20,91,255,0.3)]" />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl md:text-[48px] font-bold font-heading mb-6 text-white leading-tight">
              Enterprise-Grade Security <br className="hidden md:block" /> For Your Important Emails
            </h2>
            <p className="text-xl text-nordible-bg opacity-80 mb-12 max-w-2xl leading-relaxed">
              We take email security seriously so you can focus on running your business. 
              Our infrastructure protects you from spam, phishing, and data loss.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {securityFeatures.map((f, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-white/5 rounded-[20px] flex items-center justify-center mx-auto mb-5 border border-white/10 group-hover:bg-nordible-blue group-hover:border-nordible-blue transition-all duration-300 shadow-lg">
                    <f.icon className="w-8 h-8 text-nordible-accent group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-heading font-bold text-[13px] uppercase tracking-wider leading-snug">
                    {f.title.split(' ').map((word, idx) => (
                      <span key={idx}>{word}<br/></span>
                    ))}
                  </h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
