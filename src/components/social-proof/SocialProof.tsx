export function SocialProof() {
  return (
    <section className="py-16 border-b border-nordible-border bg-white">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-[#2D3F55] uppercase tracking-wider mb-8">
          Trusted by businesses worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder logos using text for now to maintain layout without external image dependencies */}
          <div className="text-2xl font-bold font-heading text-nordible-dark">stripe</div>
          <div className="text-2xl font-bold font-heading text-nordible-dark">amazon</div>
          <div className="text-2xl font-bold font-heading text-nordible-dark flex items-center gap-1">
            <div className="w-6 h-6 bg-[#95BF47] rounded-sm"></div> shopify
          </div>
          <div className="text-2xl font-bold font-heading text-nordible-dark">Microsoft</div>
          <div className="text-2xl font-bold font-heading text-nordible-dark">HubSpot</div>
        </div>
      </div>
    </section>
  );
}
