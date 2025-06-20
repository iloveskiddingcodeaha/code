import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Privacy Policy
          </span>
        </h1>
        <p className="text-lg text-purple-100">
          This Privacy Policy explains how Purpleware collects, uses, and protects your information.
        </p>
      </div>

      <div className="space-y-8 bg-purple-950/30 p-6 rounded-xl border border-purple-800">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">1. Information We Collect</h2>
          <p className="text-purple-300">
            We collect information you provide directly to us when you create an account, make a purchase, or
            communicate with us. This may include your name, email address, payment information, and any other
            information you choose to provide.
          </p>
          <p className="text-purple-300">
            We automatically collect certain information about your device when you visit our website, including your IP
            address, browser type, operating system, referring URLs, and information about your usage of our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">2. How We Use Your Information</h2>
          <p className="text-purple-300">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-purple-300 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience with our services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">3. Sharing of Information</h2>
          <p className="text-purple-300">We may share your information with:</p>
          <ul className="list-disc pl-6 text-purple-300 space-y-2">
            <li>
              Vendors, consultants, and other service providers who need access to such information to carry out work on
              our behalf
            </li>
            <li>
              In response to a request for information if we believe disclosure is in accordance with any applicable
              law, regulation, or legal process
            </li>
            <li>
              If we believe your actions are inconsistent with our user agreements or policies, or to protect the
              rights, property, and safety of Purpleware or others
            </li>
            <li>
              In connection with, or during negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another company
            </li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">4. Data Security</h2>
          <p className="text-purple-300">
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
            access, disclosure, alteration, and destruction.
          </p>
          <p className="text-purple-300">
            However, no security system is impenetrable, and we cannot guarantee the security of our systems or your
            information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">5. Your Choices</h2>
          <p className="text-purple-300">
            You may update, correct, or delete your account information at any time by logging into your account or
            contacting us. If you wish to delete or deactivate your account, please note that we may retain certain
            information as required by law or for legitimate business purposes.
          </p>
          <p className="text-purple-300">
            You may opt out of receiving promotional emails from us by following the instructions in those emails. If
            you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing
            business relations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">6. Cookies</h2>
          <p className="text-purple-300">
            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your
            browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies,
            this could affect the availability and functionality of our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">7. Children's Privacy</h2>
          <p className="text-purple-300">
            Our services are not directed to children under 18 years of age, and we do not knowingly collect personal
            information from children under 18. If we learn we have collected personal information from a child under
            18, we will delete such information as quickly as possible.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">8. Changes to this Privacy Policy</h2>
          <p className="text-purple-300">
            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by
            email or through a notice on our website prior to the change becoming effective.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">9. Contact Information</h2>
          <p className="text-purple-300">
            If you have any questions about this Privacy Policy, please contact us through our Discord server or via
            email.
          </p>
        </section>
      </div>

      <div className="text-center text-purple-400 text-sm">Last updated: {new Date().toLocaleDateString()}</div>

      <div className="flex justify-center">
        <Link href="/">
          <button className="bg-purple-800 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
