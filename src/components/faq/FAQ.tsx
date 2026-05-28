import { Mascot } from "@/components/mascot/Mascot";
import { siteConfig } from "@/lib/constants";

export function FAQ() {
  const faqs = [
    {
      question: "What is a custom domain email address?",
      answer: "A custom domain email is an address that uses your business name instead of a provider's (like @gmail.com). For example, if your business is 'Sharma Designs', your email would be ramesh@sharmadesigns.in. It makes you look 10x more professional instantly."
    },
    {
      question: "Is this better than Google Workspace?",
      answer: "For growing businesses worldwide, yes. Google Workspace costs ₹500+ per user. We provide the same professional credibility and reliable inbox starting at just ₹89/month, making it a negligible cost for a massive brand upgrade."
    },
    {
      question: "Can I use my existing domain?",
      answer: `Yes, absolutely! If you already have a domain, you can connect it to ${siteConfig.name} in just a few clicks. We provide easy instructions to connect any domain you own.`
    },
    {
      question: "Will my old emails be lost if I switch?",
      answer: "Not at all. Our team handles the entire migration for you. We can move all your existing emails from Gmail, Yahoo, or any other provider to your new professional inbox without any downtime."
    },
    {
      question: "Does this work on my iPhone / Android?",
      answer: "Yes, it works perfectly with the default mail apps on iOS and Android, as well as Outlook and the Gmail app. You don't need to download any new apps—just connect our server to your favorite email client."
    },
    {
      question: "What happens if I cancel — do I lose my emails?",
      answer: "Your data belongs to you. If you decide to leave, you can export all your emails easily. We don't believe in locking you in—we want you to stay because you love the service."
    }
  ];

  return (
    <section className="py-48 bg-[#FAFBFF]" id="faq">
      <div className="max-w-[900px] mx-auto px-8 md:px-12 lg:px-24">
        <div className="text-center mb-24 relative">
          <div className="flex flex-row items-center justify-center gap-6 mb-8">
            <div className="text-right">
              <h2 className="text-4xl md:text-[56px] font-bold font-heading text-nordible-dark tracking-tight mb-2">
                Got Questions?
              </h2>
              <p className="text-xl text-nordible-blue font-black uppercase tracking-[0.2em]">Googloo has answers.</p>
            </div>
            <div className="w-24 h-24 transform rotate-6 hover:rotate-0 transition-transform duration-500 cursor-help shrink-0">
              <Mascot variant="pricing-peek" alt="Googloo the Mascot" className="w-full h-full object-contain drop-shadow-xl" />
            </div>
          </div>
          <div className="w-32 h-2 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white border border-nordible-border/50 rounded-[32px] overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-xl shadow-nordible-blue/5 hover:shadow-nordible-blue/10 transition-all duration-500"
            >
              <summary className="flex items-center justify-between cursor-pointer p-8 md:p-10 font-heading font-black text-nordible-dark text-xl md:text-2xl select-none leading-tight transition-all group-open:bg-nordible-section/30">
                {faq.question}
                <div className="w-12 h-12 rounded-2xl bg-nordible-blue/10 flex items-center justify-center shrink-0 group-open:bg-nordible-blue group-open:text-white transition-all duration-500 group-open:rotate-180 shadow-sm">
                  <svg className="w-6 h-6 transform stroke-[4]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </div>
              </summary>
              <div className="px-8 md:px-10 pb-10 text-[#2D3F55] text-lg leading-relaxed opacity-70 font-medium bg-gradient-to-b from-nordible-section/30 to-white">
                <div className="pt-4 border-t border-nordible-dark/5">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* FAQ Schema for SEO Discoverability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
