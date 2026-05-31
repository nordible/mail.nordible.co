import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-nordible-dark mb-8">Privacy Policy</h1>
          <p className="text-nordible-dark/60 mb-10">Last Updated: May 31, 2026</p>

          <div className="prose prose-nordible max-w-none space-y-8 text-nordible-dark/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">1. Introduction</h2>
              <p>
                Email by Nordible.Co ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email hosting services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and business details provided during registration.</li>
                <li><strong>Derivative Data:</strong> IP address, browser type, operating system, and access times when you visit our website or use our webmail.</li>
                <li><strong>Domain Data:</strong> Information about the domains you link to our service for email hosting.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, operate, and maintain our email services.</li>
                <li>Process transactions and manage your account.</li>
                <li>Improve, personalize, and expand our services.</li>
                <li>Understand and analyze how you use our services.</li>
                <li>Communicate with you for customer service, updates, and support.</li>
                <li>Detect and prevent fraud and abuse of our systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">4. Data Security & Retention</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. Your email data is stored on secure servers with industry-standard encryption (SSL/TLS). We encourage all users to enable Two-Factor Authentication (2FA) for added security.
              </p>
              <p className="mt-4">
                We retain your information as long as your account is active or as needed to provide you services, comply with legal obligations, and resolve disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">5. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data stored on our systems. You can manage most of your data through your account dashboard or by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">7. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-nordible-bg rounded-2xl border border-nordible-border/50">
                <p><strong>Email:</strong> mail@nordible.co</p>
                <p><strong>WhatsApp:</strong> +91-9152333993</p>
                <p><strong>Address:</strong> Bangalore, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
