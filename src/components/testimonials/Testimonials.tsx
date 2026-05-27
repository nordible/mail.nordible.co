export function Testimonials() {
  const testimonials = [
    {
      name: "Ananya R.",
      role: "UX Consultant",
      content: "I sent a project proposal to a client in Singapore. She replied asking if the gmail.com address was really from the company. That was the last straw. Switched the same week."
    },
    {
      name: "Karthik M.",
      role: "Founder, Narrative Agency",
      content: "We were pitching a retail chain. The procurement team asked for our vendor email ID. When my team member sent his Gmail, the deal stalled for two weeks. Never again."
    },
    {
      name: "Priya S.",
      role: "Independent Financial Advisor",
      content: "My clients are HNIs. When I moved to a custom domain, three people mentioned it in our first call. Small thing. Big signal."
    },
    {
      name: "Rahul V.",
      role: "D2C Brand Owner",
      content: "Nordible's support is incredible. I couldn't figure out the DNS settings, and they guided me through it on WhatsApp in 5 minutes. Best investment."
    },
    {
      name: "Neha K.",
      role: "Freelance Developer",
      content: "I connected my new Nordible email straight into my Apple Mail app. No new apps to learn, just works perfectly in the background."
    },
    {
      name: "Vikram T.",
      role: "Marketing Consultant",
      content: "The free migration was a lifesaver. I had 4 years of client emails in my old Yahoo account and Nordible moved everything over seamlessly."
    }
  ];

  return (
    <section className="py-24 bg-nordible-bg border-y border-nordible-border">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            Don't Just Take Our Word For It
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-nordible-border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-nordible-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-[#2D3F55] italic mb-6">"{t.content}"</p>
              <div>
                <h4 className="font-heading font-bold text-nordible-dark">{t.name}</h4>
                <span className="text-sm text-[#2D3F55] opacity-70">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
