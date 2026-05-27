import { Mascot } from "@/components/mascot/Mascot";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Pick a Domain",
      description: "Choose your new domain or connect your own existing domain.",
      mascotAlt: "Mascot choosing a domain",
      variant: "faq-thinking" as const
    },
    {
      number: 2,
      title: "Create Mailboxes",
      description: "Set up professional email addresses for your entire team.",
      mascotAlt: "Mascot working on a laptop to create mailboxes",
      variant: "working-laptop" as const
    },
    {
      number: 3,
      title: "Connect Devices",
      description: "Sync on all your devices in just a few simple clicks.",
      mascotAlt: "Mascot connecting phone and devices",
      variant: "mail-send" as const
    },
    {
      number: 4,
      title: "Start Emailing",
      description: "You're all set! Send and receive emails like a true pro.",
      mascotAlt: "Mascot celebrating success",
      variant: "celebrate" as const
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-px bg-nordible-border z-0 border-t border-dashed border-nordible-blue/30"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-nordible-blue text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-nordible-blue/20">
                {step.number}
              </div>
              <div className="w-full max-w-[160px] aspect-square mb-6">
                <Mascot variant={step.variant} alt={step.mascotAlt} className="w-full h-full" />
              </div>
              <h3 className="text-xl font-heading font-bold text-nordible-dark mb-2">
                {step.title}
              </h3>
              <p className="text-[#2D3F55] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
