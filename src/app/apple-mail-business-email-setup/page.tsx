import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Mascot } from "@/components/mascot/Mascot";
import { Laptop, Smartphone, Download, ShieldAlert, CheckCircle2, AlertTriangle } from "lucide-react";
import { SupportCTA } from "@/components/cta/SupportCTA";
import Link from "next/link";

export default function AppleMailSetup() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[#FAFBFF]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#555555]/10 text-[#555555] rounded-full font-bold text-sm mb-6">
              <Laptop className="w-4 h-4" />
              Apple Ecosystem
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-nordible-dark mb-6 tracking-tight">
              Connect to Apple Mail
            </h1>
            <p className="text-xl text-nordible-dark/70 max-w-2xl mx-auto leading-relaxed">
              Integrate with iOS, iPadOS, and macOS. Use our automatic configuration profiles for a zero-friction setup.
            </p>
          </div>

          <div className="space-y-12">
            
            {/* Method 1: Profile */}
            <section className="bg-white rounded-[32px] p-8 md:p-12 border border-nordible-border shadow-xl shadow-nordible-blue/5">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 bg-nordible-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-nordible-blue/20">
                    <Download className="w-6 h-6" />
                 </div>
                 <h2 className="text-3xl font-bold font-heading text-nordible-dark">Configuration Profile</h2>
              </div>
              
              <p className="text-lg text-nordible-dark/70 mb-10">
                The fastest way to set up your iPhone, iPad, or Mac. A <strong>.mobileconfig</strong> file automatically configures all server settings.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <h4 className="flex items-center gap-2 font-bold text-nordible-dark">
                    <Smartphone className="w-5 h-5 text-nordible-blue" />
                    For iPhone & iPad
                  </h4>
                  <ul className="space-y-4 text-sm text-nordible-dark/70 list-decimal list-inside">
                    <li className="pl-2">Open Safari & log into <Link href="https://mail.nordible.co" className="text-nordible-blue font-bold">mail.nordible.co</Link>.</li>
                    <li className="pl-2">Download the <strong>Configuration Profile</strong>.</li>
                    <li className="pl-2">Go to <strong>Settings &gt; Profile Downloaded &gt; Install</strong>.</li>
                    <li className="pl-2">Enter your mailbox password when prompted.</li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="flex items-center gap-2 font-bold text-nordible-dark">
                    <Laptop className="w-5 h-5 text-nordible-blue" />
                    For Mac
                  </h4>
                  <ul className="space-y-4 text-sm text-nordible-dark/70 list-decimal list-inside">
                    <li className="pl-2">Download the <strong>.mobileconfig</strong> file from our web UI.</li>
                    <li className="pl-2">Double-click the file in your Downloads folder.</li>
                    <li className="pl-2">Go to <strong>System Settings &gt; Profiles</strong> to install.</li>
                    <li className="pl-2">Confirm with your admin & mailbox passwords.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Method 2: Manual */}
            <section className="bg-white rounded-[32px] p-8 md:p-12 border border-nordible-border shadow-md">
              <h2 className="text-2xl font-bold font-heading text-nordible-dark mb-8">Manual IMAP Setup</h2>
              <p className="text-nordible-dark/70 mb-8">If you prefer manual entry, use these coordinates in <strong>Settings &gt; Mail &gt; Add Account &gt; Other</strong>.</p>
              
              <div className="bg-nordible-dark rounded-[24px] overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5 text-nordible-orange text-[10px] font-black uppercase tracking-widest">
                      <th className="p-6">Parameter</th>
                      <th className="p-6">Value</th>
                    </tr>
                  </thead>
                  <tbody className="text-white font-mono text-sm">
                    <tr className="border-b border-white/5">
                      <td className="p-6 opacity-50">Incoming Host</td>
                      <td className="p-6">mail.nordible.co</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 opacity-50">Incoming Port</td>
                      <td className="p-6">993 (SSL/TLS)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 opacity-50">Outgoing Host</td>
                      <td className="p-6">mail.nordible.co</td>
                    </tr>
                    <tr>
                      <td className="p-6 opacity-50">Outgoing Port</td>
                      <td className="p-6">465 (SSL/TLS)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Warning */}
            <section className="bg-nordible-orange/5 rounded-[32px] p-8 border border-nordible-orange/20 flex gap-6 items-start relative overflow-hidden">
               <div className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.05] -mr-8 -mb-8">
                  <Mascot variant="pricing-peek" alt="Mascot peeking" />
               </div>
               
               <div className="shrink-0 p-3 bg-nordible-orange text-white rounded-2xl shadow-lg shadow-nordible-orange/20">
                  <AlertTriangle className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-nordible-dark mb-2">Crucial Warning</h3>
                  <p className="text-nordible-dark/70 leading-relaxed max-w-2xl">
                    Apple Mail sometimes resets your SMTP port to 25. If you can't send mail, ensure <strong>"Automatically manage connection settings"</strong> is turned OFF and the port is set back to <strong>465</strong>.
                  </p>
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
