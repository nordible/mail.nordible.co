import Link from "next/link";
import { Mascot } from "@/components/mascot/Mascot";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-nordible-dark text-white pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          
          <div className="lg:col-span-2 flex items-start gap-0">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shrink-0 -mr-4 md:-mr-6 lg:-mr-8 transform -scale-x-100 transition-transform hover:scale-[-1.05] duration-500 drop-shadow-xl relative z-0">
              <Mascot variant="pricing-peek" alt="Googloo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col pt-2 relative z-10">
              <Link href="/" className="inline-block mb-4 group">
                <span className="font-heading font-black text-2xl lg:text-3xl text-white tracking-tight">
                  <span className="text-nordible-blue">{siteConfig.logoPrefix}</span> <span className="text-lg font-bold opacity-90">{siteConfig.logoSuffix}</span>
                </span>
              </Link>
              <p className="text-nordible-bg opacity-70 max-w-[280px] text-base leading-relaxed font-medium">
                Professional email hosting for serious businesses. Elevate your brand perception and close more deals with a custom domain email.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-6 uppercase tracking-[0.2em] text-white/40">Product</h4>
            <ul className="space-y-4 text-nordible-bg opacity-80 font-medium text-sm">
              <li><Link href="#features" className="hover:text-nordible-blue transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-nordible-blue transition-colors">Pricing</Link></li>
              <li><Link href="#security" className="hover:text-nordible-blue transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-6 uppercase tracking-[0.2em] text-white/40">Guides</h4>
            <ul className="space-y-4 text-nordible-bg opacity-80 font-medium text-sm">
              <li><Link href="/business-email-setup" className="hover:text-nordible-blue transition-colors">Get Started</Link></li>
              <li><Link href="/gmail-business-email-setup" className="hover:text-nordible-blue transition-colors">Gmail Integration</Link></li>
              <li><Link href="/outlook-business-email-setup" className="hover:text-nordible-blue transition-colors">Outlook Setup</Link></li>
              <li><Link href="/apple-mail-business-email-setup" className="hover:text-nordible-blue transition-colors">Apple Mail Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-base mb-6 uppercase tracking-[0.2em] text-white/40">Company</h4>
            <ul className="space-y-4 text-nordible-bg opacity-80 font-medium text-sm">
              <li><Link href="mailto:mail@nordible.co" className="hover:text-nordible-blue transition-colors">Contact Support</Link></li>
              <li><Link href="https://wa.me/919152333993" target="_blank" rel="noopener noreferrer" className="hover:text-nordible-blue transition-colors">WhatsApp Support</Link></li>
              <li><Link href="/privacy" className="hover:text-nordible-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-nordible-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-nordible-bg opacity-50 font-medium">
          <p>&copy; {new Date().getFullYear()} EMAIL by Nordible.Co. All rights reserved.</p>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            Built with <span className="text-nordible-blue animate-pulse">❤️</span> by Nordible.co
          </div>
        </div>
      </div>
    </footer>
  );
}
