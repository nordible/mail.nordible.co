"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    { title: "Custom Domains", desc: "Easily connect any domain you already own." },
    { title: "Spam Filtering", desc: "Enterprise-grade algorithms keep your inbox clean." },
    { title: "Webmail Access", desc: "Access your email from any browser instantly." },
    { title: "IMAP/SMTP Support", desc: "Connect your mailbox to any software or CRM." },
    { title: "Gmail/Outlook Ready", desc: "Integrates perfectly with the apps you love." },
    { title: "Email Aliases", desc: "Create unlimited forwarders like info@ or sales@." },
    { title: "Shared Mailboxes", desc: "Collaborate with your team on support@ accounts." },
    { title: "Mobile Support", desc: "Push notifications and ActiveSync for all devices." },
    { title: "Team Accounts", desc: "Easily add new employees as your business grows." },
    { title: "Backup & Recovery", desc: "Daily snapshots ensure you never lose a message." }
  ];

  const doubledFeatures = [...features, ...features];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            Everything Your Business Needs
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#2D3F55] max-w-2xl mx-auto">
            We've built a robust infrastructure so you don't have to worry about the technical details.
          </p>
        </div>
      </div>

      <div className="relative flex w-full">
        {/* Edge Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 pr-8"
          animate={{ x: [0, -1600] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {doubledFeatures.map((feature, idx) => (
            <div key={idx} className="w-[320px] flex-shrink-0 flex gap-4 bg-nordible-section p-6 rounded-[24px] border border-nordible-border/50">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-nordible-blue" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-nordible-dark mb-1">{feature.title}</h3>
                <p className="text-[#2D3F55] text-sm leading-relaxed opacity-70">{feature.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
