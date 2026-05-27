export function FAQ() {
  const faqs = [
    {
      question: "What is a custom domain email address?",
      answer: "A custom domain email is an address that uses your business name instead of a provider's (like @gmail.com). For example, if your business is 'Sharma Designs', your email would be ramesh@sharmadesigns.in. It makes you look 10x more professional instantly."
    },
    {
      question: "How is this different from Gmail or Yahoo?",
      answer: "While Gmail is great for personal use, it doesn't give you brand ownership. Nordible Mail gives you a dedicated server for your business, better deliverability to corporate inboxes, and the ability to create multiple addresses for your team under one brand."
    },
    {
      question: "Can I use my existing domain?",
      answer: "Yes, absolutely! If you already have a domain, you can connect it to Nordible Mail in just a few clicks. If you don't have one yet, our Professional plan includes a free domain for the first year to get you started."
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
    <section className="py-24 bg-nordible-bg" id="faq">
      <div className="max-w-[768px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white border border-nordible-border rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-nordible-dark text-lg select-none">
                {faq.question}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#2D3F55] leading-relaxed">
                <p>{faq.answer}</p>
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
