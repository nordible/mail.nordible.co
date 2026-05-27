import { Shield, Mail, Lock, Server } from "lucide-react";
import { Mascot } from "@/components/mascot/Mascot";

export function Security() {
  return (
    <section id="security" className="py-20 bg-nordible-dark text-white overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="w-full max-w-[280px] aspect-square relative">
              <Mascot variant="security-shield" alt="Mascot with magnifying glass inspecting security" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-[40px] font-bold font-heading mb-4 text-white">
              Enterprise-Grade Security <br /> For Your Important Emails
            </h2>
            <p className="text-lg text-nordible-bg opacity-90 mb-10 max-w-2xl">
              We take email security seriously so you can focus on running your business. 
              Our infrastructure protects you from spam, phishing, and data loss.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Mail className="w-6 h-6 text-nordible-accent" />
                </div>
                <h4 className="font-heading font-semibold text-sm">Advanced<br/>Spam Filtering</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Server className="w-6 h-6 text-nordible-accent" />
                </div>
                <h4 className="font-heading font-semibold text-sm">Daily<br/>Backups</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Shield className="w-6 h-6 text-nordible-accent" />
                </div>
                <h4 className="font-heading font-semibold text-sm">DKIM, SPF,<br/>DMARC</h4>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Lock className="w-6 h-6 text-nordible-accent" />
                </div>
                <h4 className="font-heading font-semibold text-sm">SSL/TLS<br/>Encryption</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
