"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Digital Nomad & Consultant",
      content: "I sent a project proposal to a client in London. They replied asking if the gmail.com address was actually from my firm. That was the last straw. Switched to Nordible the same week."
    },
    {
      name: "Marcus K.",
      role: "Founder, Narrative Agency (Berlin)",
      content: "We were pitching a retail chain. The procurement team asked for our vendor email ID. When my team member sent his Gmail, the deal stalled for two weeks. Never again."
    },
    {
      name: "Elena S.",
      role: "Wealth Advisor (New York)",
      content: "My clients are high-net-worth individuals. When I moved to a custom domain, three people mentioned it in our first call. Small thing. Big professional signal."
    },
    {
      name: "David V.",
      role: "E-commerce Founder",
      content: "Nordible's support is incredible. I couldn't figure out the DNS settings, and they guided me through it on WhatsApp in 5 minutes. Best investment for my brand."
    },
    {
      name: "Thomas L.",
      role: "Freelance Software Engineer",
      content: "I connected my new Nordible email straight into my Apple Mail app. No new apps to learn, just works perfectly in the background across all my devices."
    },
    {
      name: "Jessica T.",
      role: "Growth Marketing Director",
      content: "The free migration was a lifesaver. I had years of client history in my old Yahoo account and Nordible's engineers moved everything over seamlessly."
    }
  ];

  // Double the testimonials for seamless looping
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-[#FAFBFF] border-y border-nordible-border/50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-24 mb-20 text-center">
        <h2 className="text-4xl md:text-[48px] font-bold font-heading text-nordible-dark mb-6 tracking-tighter">
          Trusted by Businesses Worldwide
        </h2>
        <div className="w-32 h-1.5 bg-nordible-blue mx-auto rounded-full"></div>
      </div>

      <div className="relative flex w-full">
        {/* Gradients to fade out the edges for a premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFBFF] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFBFF] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-10 pr-10"
          animate={{
            x: [0, -1920], // This is a rough estimation, for production use window width or refs
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {doubledTestimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="w-[450px] flex-shrink-0 bg-white p-10 rounded-[40px] border border-nordible-border/50 shadow-xl shadow-nordible-blue/5 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex gap-1 text-[#FFB800] mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-[#2D3F55] italic text-lg leading-relaxed mb-8 opacity-80">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-nordible-blue/10 flex items-center justify-center font-bold text-nordible-blue">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-nordible-dark text-lg leading-tight">{t.name}</h4>
                  <span className="text-sm text-nordible-blue font-semibold tracking-wide">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
