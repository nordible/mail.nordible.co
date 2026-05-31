import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Mascot } from "@/components/mascot/Mascot";
import { Mail, ArrowRight, Settings, ShieldCheck, CheckCircle2, Info } from "lucide-react";
import { SupportCTA } from "@/components/cta/SupportCTA";
import Link from "next/link";

export default function GmailSetup() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-[#FAFBFF]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EA4335]/10 text-[#EA4335] rounded-full font-bold text-sm mb-6">
              <Mail className="w-4 h-4" />
              Integration Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-nordible-dark mb-6 tracking-tight">
              Use Nordible Email Inside Gmail
            </h1>
            <p className="text-xl text-nordible-dark/70 max-w-2xl mx-auto leading-relaxed">
              Love the Gmail interface? You can keep it. Connect your professional domain to your personal Gmail account and manage everything in one place.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              <section className="bg-white rounded-[32px] p-8 md:p-10 border border-nordible-border shadow-md">
                <h2 className="text-2xl font-bold font-heading text-nordible-dark mb-6">The Strategy</h2>
                <p className="text-nordible-dark/70 mb-6">
                  To ensure a fast, real-time experience, we use a two-part integration:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="mt-1 bg-nordible-blue/10 p-1 rounded-full text-nordible-blue">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-nordible-dark block">Incoming Mail:</strong>
                      <span className="text-nordible-dark/70">Instant server-level forwarding from Nordible to Gmail.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 bg-nordible-blue/10 p-1 rounded-full text-nordible-blue">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-nordible-dark block">Outgoing Mail:</strong>
                      <span className="text-nordible-dark/70">Gmail routes replies through Nordible's SMTP for 100% deliverability.</span>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Part 1 */}
              <section className="bg-white rounded-[32px] p-8 md:p-10 border border-nordible-border shadow-md">
                <div className="inline-block px-3 py-1 bg-nordible-blue/10 text-nordible-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  Part 1
                </div>
                <h2 className="text-3xl font-bold font-heading text-nordible-dark mb-6">Setup Instant Forwarding</h2>
                <ol className="space-y-6 list-decimal list-inside text-nordible-dark/70">
                  <li className="pl-2">Log into <Link href="https://mail.nordible.co" className="text-nordible-blue font-bold">mail.nordible.co</Link> with your credentials.</li>
                  <li className="pl-2">Go to <strong>Email &gt; Configuration &gt; Mailboxes</strong>.</li>
                  <li className="pl-2">Click <strong>Edit</strong> on your mailbox.</li>
                  <li className="pl-2">Add your <strong>@gmail.com</strong> address in the <strong>Forwarding</strong> section.</li>
                </ol>
                <div className="mt-8 p-6 bg-nordible-orange/5 border-l-4 border-nordible-orange rounded-r-2xl">
                   <p className="text-nordible-dark font-bold mb-1">Crucial Step:</p>
                   <p className="text-nordible-dark/70">Ensure <strong>"Keep a copy in the mailbox"</strong> is checked to maintain a backup on our secure servers.</p>
                </div>
              </section>

              {/* Part 2 */}
              <section className="space-y-8">
                <div className="bg-white rounded-[32px] p-8 md:p-10 border border-nordible-border shadow-md">
                  <div className="inline-block px-3 py-1 bg-nordible-blue/10 text-nordible-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    Part 2
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-nordible-dark mb-6">"Send Mail As" in Gmail</h2>
                  
                  <div className="space-y-10">
                    <div className="flex gap-6">
                      <div className="shrink-0 w-10 h-10 bg-nordible-blue text-white rounded-full flex items-center justify-center font-black">1</div>
                      <div>
                        <h4 className="text-xl font-bold text-nordible-dark mb-2">Access Settings</h4>
                        <p className="text-nordible-dark/70">In Gmail Desktop, click the <strong>Gear icon &gt; See all settings &gt; Accounts and Import</strong>. Click <strong>Add another email address</strong>.</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="shrink-0 w-10 h-10 bg-nordible-blue text-white rounded-full flex items-center justify-center font-black">2</div>
                      <div>
                        <h4 className="text-xl font-bold text-nordible-dark mb-2">Authenticate SMTP</h4>
                        <p className="text-nordible-dark/70 mb-4">Enter these exact details in the yellow popup window:</p>
                        <div className="bg-nordible-dark rounded-2xl p-6 text-white font-mono text-sm space-y-2">
                           <p><span className="opacity-50">SMTP Server:</span> mail.nordible.co</p>
                           <p><span className="opacity-50">Port:</span> 465</p>
                           <p><span className="opacity-50">Username:</span> you@yourdomain.com</p>
                           <p><span className="opacity-50">Connection:</span> SSL (Required)</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="shrink-0 w-10 h-10 bg-nordible-blue text-white rounded-full flex items-center justify-center font-black">3</div>
                      <div>
                        <h4 className="text-xl font-bold text-nordible-dark mb-2">Verify Domain</h4>
                        <p className="text-nordible-dark/70">Check your Gmail for the verification code (it will arrive instantly thanks to Part 1), paste it in, and you're done!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Sidebar / Tips */}
            <div className="space-y-8">
              <div className="bg-nordible-dark rounded-[32px] p-8 text-white sticky top-32">
                <div className="w-24 h-24 mb-6">
                  <Mascot variant="working-laptop" alt="Mascot working" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4 text-nordible-orange">Pro Tip</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  In Gmail Settings, change <strong>"When replying to a message"</strong> to <strong>"Reply from the same address the message was sent to"</strong>.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  This ensures you never accidentally reply to a client from your personal address.
                </p>
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
