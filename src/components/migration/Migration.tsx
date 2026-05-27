import { Mascot } from "@/components/mascot/Mascot";

export function Migration() {
  return (
    <section id="migration" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-nordible-section rounded-[40px] p-8 md:p-16 border border-nordible-border shadow-sm flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative z-10">
            <div className="w-full max-w-[400px] aspect-square relative">
              <Mascot variant="mail-send" alt="Mascot helping with migration" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-nordible-orange text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Free Service
            </div>
            <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-6 leading-tight">
              Switch Without <br /> The Headache
            </h2>
            <p className="text-lg text-[#2D3F55] mb-8">
              Worried about losing your old emails? Don't be. Our expert engineers will migrate all your existing emails, folders, and contacts for free.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-nordible-blue"></div>
                </div>
                <div>
                  <strong className="text-nordible-dark block mb-1">Zero Downtime</strong>
                  <span className="text-[#2D3F55] text-sm">You won't miss a single email during the switch.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-nordible-blue"></div>
                </div>
                <div>
                  <strong className="text-nordible-dark block mb-1">Existing Emails Preserved</strong>
                  <span className="text-[#2D3F55] text-sm">Every past email is safely copied over.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-nordible-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-nordible-blue"></div>
                </div>
                <div>
                  <strong className="text-nordible-dark block mb-1">Hands-Off Setup</strong>
                  <span className="text-[#2D3F55] text-sm">We do the heavy lifting, you focus on your business.</span>
                </div>
              </li>
            </ul>

            <a href="https://wa.me/919152333993" target="_blank" className="inline-flex items-center gap-2 bg-nordible-blue hover:bg-nordible-dark text-white px-8 py-4 rounded-full font-heading font-semibold transition-colors">
              Request Free Migration
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
