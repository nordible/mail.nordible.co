export function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[40px] font-bold font-heading text-nordible-dark mb-4">
            How We Compare
          </h2>
          <div className="w-24 h-1 bg-nordible-blue mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#2D3F55]">
            Enterprise-grade features without the enterprise price tag.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-nordible-dark">
                <th className="text-left py-6 px-4 font-heading font-bold text-lg text-nordible-dark">Feature</th>
                <th className="py-6 px-4 font-heading font-bold text-xl text-nordible-blue bg-nordible-bg rounded-t-xl border-x border-t border-nordible-border">Nordible Mail</th>
                <th className="py-6 px-4 font-heading font-bold text-lg text-[#2D3F55]">Google Workspace</th>
                <th className="py-6 px-4 font-heading font-bold text-lg text-[#2D3F55]">Microsoft 365</th>
              </tr>
            </thead>
            <tbody className="text-[#2D3F55]">
              <tr className="border-b border-nordible-border">
                <td className="py-4 px-4 font-semibold text-nordible-dark">Starting Price</td>
                <td className="py-4 px-4 text-center font-bold text-nordible-dark bg-nordible-bg border-x border-nordible-border">₹149/mo</td>
                <td className="py-4 px-4 text-center">₹500+/mo</td>
                <td className="py-4 px-4 text-center">₹450+/mo</td>
              </tr>
              <tr className="border-b border-nordible-border">
                <td className="py-4 px-4 font-semibold text-nordible-dark">Business Email</td>
                <td className="py-4 px-4 text-center font-bold text-[#10B981] bg-nordible-bg border-x border-nordible-border">Yes</td>
                <td className="py-4 px-4 text-center">Yes</td>
                <td className="py-4 px-4 text-center">Yes</td>
              </tr>
              <tr className="border-b border-nordible-border">
                <td className="py-4 px-4 font-semibold text-nordible-dark">Support</td>
                <td className="py-4 px-4 text-center font-bold text-[#10B981] bg-nordible-bg border-x border-nordible-border">Direct WhatsApp</td>
                <td className="py-4 px-4 text-center text-[#EF4444]">Automated Bots</td>
                <td className="py-4 px-4 text-center text-[#EF4444]">Support Tickets</td>
              </tr>
              <tr className="border-b border-nordible-border">
                <td className="py-4 px-4 font-semibold text-nordible-dark">Migration Help</td>
                <td className="py-4 px-4 text-center font-bold text-[#10B981] bg-nordible-bg border-x border-nordible-border">Free & Managed</td>
                <td className="py-4 px-4 text-center text-[#EF4444]">Do It Yourself</td>
                <td className="py-4 px-4 text-center text-[#EF4444]">Do It Yourself</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-nordible-dark rounded-bl-xl">Spam Protection</td>
                <td className="py-4 px-4 text-center font-bold text-[#10B981] bg-nordible-bg border-x border-b border-nordible-border rounded-b-xl">Enterprise Grade</td>
                <td className="py-4 px-4 text-center">Enterprise Grade</td>
                <td className="py-4 px-4 text-center">Enterprise Grade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
