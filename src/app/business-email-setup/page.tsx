import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Mascot } from "@/components/mascot/Mascot";
import { CheckCircle2, Globe, Laptop, Shield, MessageCircle, ExternalLink } from "lucide-react";
import { SupportCTA } from "@/components/cta/SupportCTA";
import Link from "next/link";

export default function BusinessEmailSetup() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[#FAFBFF]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-nordible-blue/10 text-nordible-blue rounded-full font-bold text-sm mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Onboarding Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-nordible-dark mb-6 tracking-tight">
              Welcome to Professional Email!
            </h1>
            <p className="text-xl text-nordible-dark/70 max-w-2xl mx-auto leading-relaxed">
              Your business inbox is ready. Follow these 3 simple steps to look professional and start communicating with your customers.
            </p>
          </div>

          {/* Access Details Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-nordible-border shadow-xl shadow-nordible-blue/5 mb-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-nordible-blue/5 rounded-bl-[100px] -z-0 transition-all group-hover:bg-nordible-blue/10" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-heading text-nordible-dark mb-8 flex items-center gap-3">
                <Shield className="w-6 h-6 text-nordible-blue" />
                Your Access Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-bottom border-nordible-border/50">
                  <span className="text-sm font-black text-nordible-dark/40 uppercase tracking-widest mb-2 md:mb-0">Webmail URL</span>
                  <Link href="https://mail.nordible.co/webmail" className="font-mono text-nordible-blue hover:underline flex items-center gap-2">
                    mail.nordible.co/webmail
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-bottom border-nordible-border/50">
                  <span className="text-sm font-black text-nordible-dark/40 uppercase tracking-widest mb-2 md:mb-0">Username</span>
                  <span className="font-mono text-nordible-dark font-medium">username@yourdomain.com</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4">
                  <span className="text-sm font-black text-nordible-dark/40 uppercase tracking-widest mb-2 md:mb-0">Password</span>
                  <span className="text-nordible-dark/60 italic">Check your welcome WhatsApp or Email</span>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link href="https://mail.nordible.co/webmail" className="inline-flex items-center justify-center bg-nordible-blue hover:bg-nordible-dark text-white px-10 py-5 rounded-full text-lg font-black transition-all hover:-translate-y-1 shadow-lg shadow-nordible-blue/25">
                  Login to Webmail
                </Link>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-nordible-border shadow-md">
              <div className="inline-block px-4 py-1.5 bg-nordible-blue text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Step 1
              </div>
              <h2 className="text-3xl font-bold font-heading text-nordible-dark mb-6 flex items-center gap-4">
                <Globe className="w-8 h-8 text-nordible-blue" />
                Point Your Domain to Nordible
              </h2>
              <p className="text-lg text-nordible-dark/70 mb-8 leading-relaxed">
                Log in to your domain registrar (GoDaddy, Namecheap, etc.) and update your <strong>DNS Settings</strong> with this MX record:
              </p>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-nordible-dark/40 text-xs font-black uppercase tracking-widest border-b border-nordible-border">
                      <th className="pb-4 pr-4">Type</th>
                      <th className="pb-4 pr-4">Host</th>
                      <th className="pb-4 pr-4">Points to</th>
                      <th className="pb-4">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="font-mono text-nordible-dark">
                    <tr>
                      <td className="py-6 pr-4 border-b border-nordible-border/50">MX</td>
                      <td className="py-6 pr-4 border-b border-nordible-border/50">@</td>
                      <td className="py-6 pr-4 border-b border-nordible-border/50 text-nordible-blue">mail.nordible.co</td>
                      <td className="py-6 border-b border-nordible-border/50">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-nordible-blue/5 rounded-2xl p-6 border-l-4 border-nordible-blue flex gap-4 items-start">
                <div className="shrink-0 mt-1">
                   <MessageCircle className="w-6 h-6 text-nordible-blue" />
                </div>
                <Link 
                  href="https://wa.me/919152333993?text=Hi%2C%20I%20need%20help%20setting%20up%20my%20Nordible%20email." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-nordible-blue hover:text-nordible-dark font-bold underline decoration-nordible-blue/30 underline-offset-4"
                >
                  Message Support on WhatsApp
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-nordible-border shadow-md">
              <div className="inline-block px-4 py-1.5 bg-nordible-blue text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Step 2
              </div>
              <h2 className="text-3xl font-bold font-heading text-nordible-dark mb-6 flex items-center gap-4">
                <Laptop className="w-8 h-8 text-nordible-blue" />
                Link to Your Favorite Apps
              </h2>
              <p className="text-lg text-nordible-dark/70 mb-8 leading-relaxed">
                Use your new business email inside the <strong>Gmail app, Outlook, or Apple Mail</strong> you already use every day.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-nordible-dark rounded-2xl p-6 text-white font-mono text-sm">
                  <h4 className="text-nordible-orange font-bold font-heading text-lg mb-4">Incoming (IMAP)</h4>
                  <div className="space-y-2">
                    <p><span className="opacity-50">Host:</span> mail.nordible.co</p>
                    <p><span className="opacity-50">Port:</span> 993</p>
                    <p><span className="opacity-50">Security:</span> SSL/TLS</p>
                  </div>
                </div>
                <div className="bg-nordible-dark rounded-2xl p-6 text-white font-mono text-sm">
                  <h4 className="text-nordible-orange font-bold font-heading text-lg mb-4">Outgoing (SMTP)</h4>
                  <div className="space-y-2">
                    <p><span className="opacity-50">Host:</span> mail.nordible.co</p>
                    <p><span className="opacity-50">Port:</span> 465</p>
                    <p><span className="opacity-50">Security:</span> SSL/TLS</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/gmail-business-email-setup" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-nordible-border hover:border-nordible-blue text-nordible-dark font-bold rounded-full transition-all">
                  Gmail Guide
                </Link>
                <Link href="/outlook-business-email-setup" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-nordible-border hover:border-nordible-blue text-nordible-dark font-bold rounded-full transition-all">
                  Outlook Guide
                </Link>
                <Link href="/apple-mail-business-email-setup" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-nordible-border hover:border-nordible-blue text-nordible-dark font-bold rounded-full transition-all">
                  Apple Mail Guide
                </Link>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 border border-nordible-border shadow-md relative overflow-hidden">
               <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 opacity-[0.03] pointer-events-none">
                  <Mascot variant="security-shield" alt="Security Mascot" />
               </div>
              
              <div className="inline-block px-4 py-1.5 bg-nordible-blue text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Step 3
              </div>
              <h2 className="text-3xl font-bold font-heading text-nordible-dark mb-6 flex items-center gap-4">
                <Shield className="w-8 h-8 text-nordible-blue" />
                Ensure You Reach the Inbox
              </h2>
              <p className="text-lg text-nordible-dark/70 mb-8 leading-relaxed">
                To make sure your invoices don't end up in spam, add these security records to your DNS settings:
              </p>
              
              <div className="space-y-6">
                <div className="bg-nordible-dark rounded-2xl p-6 text-white font-mono text-sm">
                  <h4 className="text-nordible-orange font-bold font-heading text-lg mb-4">SPF Record (TXT)</h4>
                  <p>v=spf1 include:mail.nordible.co ~all</p>
                </div>
                <div className="bg-nordible-dark rounded-2xl p-6 text-white font-mono text-sm">
                  <h4 className="text-nordible-orange font-bold font-heading text-lg mb-4">DKIM Record (TXT)</h4>
                  <p className="opacity-60 italic">(Unique key provided in your welcome email)</p>
                </div>
              </div>
            </div>

          </div>

        </div>
        
        <SupportCTA />
      </main>
      <Footer />
    </>
  );
}
