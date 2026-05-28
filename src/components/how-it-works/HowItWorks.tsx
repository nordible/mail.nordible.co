import { Mascot } from "@/components/mascot/Mascot";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Pick a Domain",
      description: "Choose your new domain or connect your own existing domain.",
      mascotAlt: "Googloo the Mascot choosing a domain",
      variant: "pricing-peek" as const
    },
    {
      number: 2,
      title: "Create Mailboxes",
      description: "Set up professional email addresses for your entire team.",
      mascotAlt: "Googloo the Mascot working on a laptop to create mailboxes",
      variant: "mail-sorting" as const
    },
    {
      number: 3,
      title: "Connect Devices",
      description: "Sync on all your devices in just a few simple clicks.",
      mascotAlt: "Googloo the Mascot connecting phone and devices",
      variant: "working-laptop" as const
    },
    {
      number: 4,
      title: "Start Emailing Professionally",
      description: "You're all set! Send and receive emails like a true pro.",
      mascotAlt: "Googloo the Mascot celebrating success",
      variant: "mail-send" as const
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-[48px] font-bold font-heading text-nordible-dark mb-6">
            How It Works
          </h2>
          <div className="w-32 h-1.5 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[24px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-nordible-blue/20 z-0"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 text-center flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-nordible-blue text-white flex items-center justify-center font-bold text-xl mb-10 shadow-lg shadow-nordible-blue/30 group-hover:scale-110 transition-transform duration-300 ring-8 ring-white">
                {step.number}
              </div>
              <div className="w-full max-w-[180px] aspect-square mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <Mascot variant={step.variant} alt={step.mascotAlt} className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-4">
                {step.title}
              </h3>
              <p className="text-[#2D3F55] text-base leading-relaxed opacity-70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
