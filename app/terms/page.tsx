import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Terms of Service
          </span>
        </h1>
        <p className="text-lg text-purple-100">Please read these terms carefully before using Purpleware services.</p>
      </div>

      <div className="space-y-8 bg-purple-950/30 p-6 rounded-xl border border-purple-800">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">1. Acceptance of Terms</h2>
          <p className="text-purple-300">
            By accessing or using Purpleware services, you agree to be bound by these Terms of Service. If you do not
            agree to all the terms and conditions, you must not access or use our services.
          </p>
          <p className="text-purple-300">
            We reserve the right to modify these terms at any time. Your continued use of our services following the
            posting of changes constitutes your acceptance of such changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">2. Description of Service</h2>
          <p className="text-purple-300">
            Purpleware provides access to various gaming enhancements, tools, and utilities designed to improve gaming
            experiences. Our services are provided "as is" and "as available" without warranties of any kind.
          </p>
          <p className="text-purple-300">
            We do not guarantee that our services will always be available, uninterrupted, timely, secure, or
            error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">3. User Responsibilities</h2>
          <p className="text-purple-300">
            You are responsible for maintaining the confidentiality of your account information and for all activities
            that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>
          <p className="text-purple-300">
            You agree not to use our services for any illegal purposes or in violation of any applicable local, state,
            national, or international law or regulation.
          </p>
          <p className="text-purple-300">
            You acknowledge that using our services may violate the terms of service of certain games or platforms.
            Purpleware is not responsible for any consequences resulting from such violations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">4. Intellectual Property</h2>
          <p className="text-purple-300">
            All content, features, and functionality of our services, including but not limited to text, graphics,
            logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of Purpleware
            or its licensors.
          </p>
          <p className="text-purple-300">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of our materials without our express written consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">5. Limitation of Liability</h2>
          <p className="text-purple-300">
            In no event shall Purpleware, its officers, directors, employees, or agents be liable for any indirect,
            incidental, special, consequential, or punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses.
          </p>
          <p className="text-purple-300">
            Purpleware shall not be liable for any damage, loss, or injury resulting from hacking, tampering, or other
            unauthorized access or use of our services or your account or the information contained therein.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">6. Termination</h2>
          <p className="text-purple-300">
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for
            any reason whatsoever, including without limitation if you breach these Terms of Service.
          </p>
          <p className="text-purple-300">
            Upon termination, your right to use our services will immediately cease. All provisions of these Terms which
            by their nature should survive termination shall survive termination.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">7. Governing Law</h2>
          <p className="text-purple-300">
            These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of
            law provisions.
          </p>
          <p className="text-purple-300">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
            rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
            provisions of these Terms will remain in effect.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-purple-200">8. Contact Information</h2>
          <p className="text-purple-300">
            If you have any questions about these Terms, please contact us through our Discord server or via email.
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
