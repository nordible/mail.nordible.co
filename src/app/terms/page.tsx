import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-nordible-dark mb-8">Terms of Service</h1>
          <p className="text-nordible-dark/60 mb-10">Last Updated: May 31, 2026</p>

          <div className="prose prose-nordible max-w-none space-y-8 text-nordible-dark/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by Email by Nordible.Co ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">2. Description of Service</h2>
              <p>
                Email by Nordible.Co provides professional email hosting, custom domain integration, and related technical support services. We reserve the right to modify or discontinue any part of the Service with reasonable notice to active users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">3. User Obligations</h2>
              <p>You agree to use the Service in compliance with all applicable laws and regulations. You specifically agree NOT to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use the Service for sending unsolicited bulk email (SPAM).</li>
                <li>Engage in illegal activities or transmit illegal content.</li>
                <li>Attempt to compromise the security or integrity of our servers or networks.</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with a person or entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">4. Payments and Fees</h2>
              <p>
                Fees for the Service are billed on a subscription basis (annually). All fees are non-refundable except as expressly stated in our 30-day money-back guarantee for new accounts. We reserve the right to change our fees upon notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">5. Account Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">6. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Nordible.Co and its licensors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall Nordible.Co be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-nordible-dark mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-nordible-bg rounded-2xl border border-nordible-border/50">
                <p><strong>Email:</strong> mail@nordible.co</p>
                <p><strong>WhatsApp:</strong> +91-9152333993</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
