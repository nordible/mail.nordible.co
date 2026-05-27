import { CheckCircle2 } from "lucide-react";

export function Features() {
  const features = [
    { title: "Custom Domains", desc: "Use your own @brand.com or get a free domain for the first year on our Professional plan." },
    { title: "Spam Filtering", desc: "Enterprise-grade algorithms keep your inbox clean and protect you from phishing attacks." },
    { title: "Webmail Access", desc: "Access your email from any browser with our clean, ad-free web interface." },
    { title: "IMAP/SMTP Support", desc: "Full protocol support to connect your mailbox to any software or CRM." },
    { title: "Gmail/Outlook Ready", desc: "Integrates perfectly with the native apps you already know and love." },
    { title: "Email Aliases", desc: "Create unlimited forwarders like info@ or sales@ that route to your main inbox." },
    { title: "Shared Mailboxes", desc: "Collaborate with your team on support@ or contact@ without sharing passwords." },
    { title: "Mobile Support", desc: "Push notifications and ActiveSync support for iOS and Android devices." },
    { title: "Team Accounts", desc: "Easily add new employees as your business grows with centralized billing." },
    { title: "Backup & Recovery", desc: "Daily snapshots ensure you never lose an important business communication." }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            Everything Your Business Needs
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#2D3F55] max-w-2xl mx-auto">
            We've built a robust infrastructure so you don't have to worry about the technical details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-nordible-blue" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-nordible-dark mb-2">{feature.title}</h3>
                <p className="text-[#2D3F55] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
