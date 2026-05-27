import { Mascot } from "@/components/mascot/Mascot";

export function Benefits() {
  return (
    <section className="py-24 bg-nordible-bg">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            Why Professional Email?
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[24px] p-8 text-center border border-nordible-border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full aspect-square max-w-[200px] mx-auto mb-6">
              <Mascot variant="security-shield" alt="Mascot with shield for Trust & Credibility" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-3">
              Trust & Credibility
            </h3>
            <p className="text-[#2D3F55] leading-relaxed">
              Look trustworthy with your own business email. Stop sending proposals from generic free accounts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[24px] p-8 text-center border border-nordible-border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full aspect-square max-w-[200px] mx-auto mb-6">
              <Mascot variant="working-laptop" alt="Mascot with laptop for Works Everywhere" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-3">
              Works Everywhere
            </h3>
            <p className="text-[#2D3F55] leading-relaxed">
              Use your email on Gmail, Outlook, Apple Mail & more. Seamless sync across all your devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[24px] p-8 text-center border border-nordible-border shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-full aspect-square max-w-[200px] mx-auto mb-6">
              <Mascot variant="security-shield" alt="Mascot with lock for Enterprise Security" className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-nordible-dark mb-3">
              Enterprise Security
            </h3>
            <p className="text-[#2D3F55] leading-relaxed">
              Advanced spam protection and secure infrastructure. Keep your business communications safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
