import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Mascot } from "@/components/mascot/Mascot";
import { Monitor, Smartphone, Settings, ShieldCheck, CheckCircle2, Server, Globe } from "lucide-react";
import { SupportCTA } from "@/components/cta/SupportCTA";
import Link from "next/link";

export default function OutlookSetup() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[#FAFBFF]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0078D4]/10 text-[#0078D4] rounded-full font-bold text-sm mb-6">
              <Monitor className="w-4 h-4" />
              Outlook Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-nordible-dark mb-6 tracking-tight">
              Connect to Microsoft Outlook
            </h1>
            <p className="text-xl text-nordible-dark/70 max-w-2xl mx-auto leading-relaxed">
              Sync your emails, calendars, and contacts seamlessly across desktop and mobile using standard protocols and Exchange ActiveSync.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Desktop Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white rounded-2xl border border-nordible-border shadow-sm">
                  <Monitor className="w-8 h-8 text-nordible-blue" />
                </div>
                <h2 className="text-3xl font-bold font-heading text-nordible-dark">Outlook for Desktop</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[32px] p-8 border border-nordible-border shadow-md">
                   <h3 className="text-xl font-bold text-nordible-dark mb-4">Auto-Discovery</h3>
                   <p className="text-nordible-dark/70 mb-6">Our servers support <strong>Autodiscover</strong>. In most cases, you just need your email and password.</p>
                   <ol className="space-y-3 text-sm text-nordible-dark/70 list-decimal list-inside">
                     <li>Open Outlook &gt; File &gt; Add Account</li>
                     <li>Enter your email address</li>
                     <li>Click Connect & enter password</li>
                   </ol>
                </div>

                <div className="bg-white rounded-[32px] p-8 border border-nordible-border shadow-md">
                   <h3 className="text-xl font-bold text-nordible-dark mb-4">Manual Setup</h3>
                   <p className="text-nordible-dark/70 mb-6">If auto-discovery fails, use these manual coordinates:</p>
                   <div className="bg-nordible-dark rounded-xl p-4 text-white font-mono text-xs space-y-1">
                      <p><span className="opacity-50">Server:</span> mail.nordible.co</p>
                      <p><span className="opacity-50">IMAP Port:</span> 993 (SSL)</p>
                      <p><span className="opacity-50">SMTP Port:</span> 465 (SSL)</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Mobile Section */}
            <section className="bg-nordible-blue/5 rounded-[40px] p-8 md:p-12 border border-nordible-blue/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] -mr-20 -mt-20">
                <Mascot variant="mail-sorting" alt="Mascot sorting mail" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-2xl border border-nordible-border shadow-sm">
                    <Smartphone className="w-8 h-8 text-nordible-blue" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-nordible-dark">Outlook for Mobile</h2>
                </div>

                <p className="text-lg text-nordible-dark/70 mb-8 max-w-2xl">
                  The mobile app supports <strong>Exchange ActiveSync</strong> for real-time push notifications and full calendar/contact sync.
                </p>

                <div className="bg-white rounded-[32px] p-8 md:p-10 border border-nordible-border shadow-xl">
                  <h3 className="text-xl font-bold text-nordible-dark mb-6">ActiveSync Configuration</h3>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <div className="flex justify-between border-b border-nordible-border/50 pb-2">
                         <span className="text-xs font-black text-nordible-dark/40 uppercase">Email</span>
                         <span className="text-sm font-mono text-nordible-dark">you@domain.com</span>
                       </div>
                       <div className="flex justify-between border-b border-nordible-border/50 pb-2">
                         <span className="text-xs font-black text-nordible-dark/40 uppercase">Server</span>
                         <span className="text-sm font-mono text-nordible-blue">mail.nordible.co</span>
                       </div>
                       <div className="flex justify-between border-b border-nordible-border/50 pb-2">
                         <span className="text-xs font-black text-nordible-dark/40 uppercase">Domain\User</span>
                         <span className="text-sm font-mono text-nordible-dark">you@domain.com</span>
                       </div>
                    </div>
                    <div className="bg-nordible-blue/5 rounded-2xl p-6">
                      <p className="text-sm text-nordible-dark/70 leading-relaxed">
                        When adding the account on mobile, choose <strong>Exchange</strong> as the provider to enable full synchronization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pro-Tip / DNS */}
            <section className="bg-nordible-dark rounded-[40px] p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <Globe className="w-8 h-8 text-nordible-orange" />
                <h2 className="text-3xl font-bold font-heading">Optimization Pro-Tip</h2>
              </div>
              <p className="text-white/70 text-lg mb-8 max-w-2xl">
                Set up <strong>Autodiscover</strong> records in your DNS to make setup a one-click process for your entire team.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-white/40 text-xs font-black uppercase tracking-widest border-b border-white/10">
                      <th className="pb-4 pr-4">Type</th>
                      <th className="pb-4 pr-4">Host</th>
                      <th className="pb-4">Value / Target</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-sm">
                    <tr>
                      <td className="py-4 pr-4 border-b border-white/5 font-bold text-nordible-orange">CNAME</td>
                      <td className="py-4 pr-4 border-b border-white/5">autodiscover</td>
                      <td className="py-4 border-b border-white/5">mail.nordible.co</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 border-b border-white/5 font-bold text-nordible-orange">SRV</td>
                      <td className="py-4 pr-4 border-b border-white/5">_autodiscover._tcp</td>
                      <td className="py-4 border-b border-white/5">0 0 443 mail.nordible.co</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </div>

        <SupportCTA />
      </main>
      <Footer />
    </>
  );
}
