import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-nordible-dark text-white pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 drop-shadow-sm">
                   <Image
                      src="/logo.webp"
                      alt="Nordible Logo"
                      fill
                      className="object-contain invert brightness-0"
                    />
                </div>
                <span className="font-heading font-black text-2xl text-white">
                  email by <span className="text-nordible-blue">Nordible.co</span>
                </span>
              </div>
            </Link>
            <p className="text-nordible-bg opacity-80 mb-6 max-w-sm">
              Professional email hosting for serious businesses. Elevate your brand perception and close more deals with a custom domain email.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-nordible-bg opacity-80">
              <li><Link href="#features" className="hover:text-nordible-accent transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-nordible-accent transition-colors">Pricing</Link></li>
              <li><Link href="#security" className="hover:text-nordible-accent transition-colors">Security</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Guides</h4>
            <ul className="space-y-4 text-nordible-bg opacity-80">
              <li><Link href="/business-email-setup.html" className="hover:text-nordible-accent transition-colors">Get Started</Link></li>
              <li><Link href="/gmail-business-email-setup.html" className="hover:text-nordible-accent transition-colors">Gmail Integration</Link></li>
              <li><Link href="/outlook-business-email-setup.html" className="hover:text-nordible-accent transition-colors">Outlook Setup</Link></li>
              <li><Link href="/apple-mail-business-email-setup.html" className="hover:text-nordible-accent transition-colors">Apple Mail Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-nordible-bg opacity-80">
              <li><Link href="mailto:mail@nordible.co" className="hover:text-nordible-accent transition-colors">Contact Support</Link></li>
              <li><Link href="https://wa.me/919152333993" className="hover:text-nordible-accent transition-colors">WhatsApp Support</Link></li>
              <li><Link href="#" className="hover:text-nordible-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-nordible-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-nordible-bg opacity-60">
          <p>&copy; {new Date().getFullYear()} Nordible Mail. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Trusted by businesses worldwide 🌍
          </div>
        </div>
      </div>
    </footer>
  );
}
