import { Mascot } from "@/components/mascot/Mascot";

export function Benefits() {
  return (
    <section className="py-32 bg-[#F3F7FF]">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[48px] font-bold font-heading text-nordible-dark mb-6">
            Why Professional Email?
          </h2>
          <div className="w-32 h-1.5 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] p-10 text-center border border-nordible-border/50 shadow-xl shadow-nordible-blue/5 hover:shadow-2xl hover:shadow-nordible-blue/10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-full aspect-square max-w-[220px] mx-auto mb-8 transition-transform duration-500 group-hover:scale-110">
              <Mascot variant="celebrate" alt="Googloo the Mascot showing Trust & Credibility" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-4">
              Stand Out from the Competition
            </h3>
            <p className="text-[#2D3F55] leading-relaxed text-lg opacity-80">
              A custom domain makes your brand look like an established industry leader. Build immediate trust with every email you send.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[40px] p-10 text-center border border-nordible-border/50 shadow-xl shadow-nordible-blue/5 hover:shadow-2xl hover:shadow-nordible-blue/10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-full aspect-square max-w-[220px] mx-auto mb-8 transition-transform duration-500 group-hover:scale-110">
              <Mascot variant="working-laptop" alt="Googloo the Mascot working on a laptop" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-4">
              Works Everywhere
            </h3>
            <p className="text-[#2D3F55] leading-relaxed text-lg opacity-80">
               Use your email on Gmail, Outlook, Apple Mail & more. Seamless sync across all your devices so you never miss a deal.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[40px] p-10 text-center border border-nordible-border/50 shadow-xl shadow-nordible-blue/5 hover:shadow-2xl hover:shadow-nordible-blue/10 transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-full aspect-square max-w-[220px] mx-auto mb-8 transition-transform duration-500 group-hover:scale-110">
              <Mascot variant="security-shield" alt="Googloo the Mascot protecting your email" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-4">
              Enterprise Security
            </h3>
            <p className="text-[#2D3F55] leading-relaxed text-lg opacity-80">
               Advanced spam protection and secure infrastructure. We keep your business communications safe from threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
