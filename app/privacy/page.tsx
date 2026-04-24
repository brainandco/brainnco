import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "brain & co. Privacy Policy. How we collect, use, store, and protect your personal data in line with GDPR, CCPA, and global privacy laws.",
}

const lastUpdated = "February 2025"

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground">
            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              1. Introduction
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              At brain & co. (“we,” “us,” or “our”), we take your privacy seriously. This Privacy Policy explains how we collect, use, store, and share your personal data when you use our website, engage with our marketing services, or otherwise interact with us. We are committed to handling your information in line with applicable privacy laws, including the General Data Protection Regulation (GDPR) in the European Union and European Economic Area, the California Consumer Privacy Act (CCPA) and related laws in the United States, and other global privacy regulations. We encourage you to read this policy carefully.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              2. Types of Data We Collect
            </h2>
            <h3 className="mt-6 text-base font-semibold text-primary">
              Personal data
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We may collect information that identifies or can reasonably be linked to you, such as:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Name and contact details (e.g., email address, phone number, mailing address)</li>
              <li>Job title and company or organization name</li>
              <li>Communication preferences and correspondence with us</li>
              <li>Information you provide when filling out forms, subscribing to newsletters, or requesting services</li>
              <li>Payment and billing information where relevant to our services</li>
            </ul>
            <h3 className="mt-6 text-base font-semibold text-primary">
              Non-personal and technical data
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We may also collect information that, on its own, does not identify you, including:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>IP address and general geographic location</li>
              <li>Browser type, device type, and operating system</li>
              <li>Pages visited, time spent on the site, and referring URLs</li>
              <li>Cookies, pixel tags, and similar technologies (see Section 9)</li>
            </ul>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              3. How We Collect Data
            </h2>
            <ul className="mt-4 list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-primary">Directly from you:</strong> When you complete contact or inquiry forms, sign up for newsletters, email us, engage in client or prospect communications, or provide information in meetings or contracts.</li>
              <li><strong className="text-primary">Automatically:</strong> When you visit our website, through cookies and similar tracking technologies that collect usage and technical data as described in this policy.</li>
              <li><strong className="text-primary">From third parties:</strong> We may receive data from analytics providers, social media platforms (where you interact with our content or ads), advertising partners, and other service providers that support our business and website.</li>
            </ul>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              4. How We Use Your Data
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We use the data we collect to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Deliver and manage our marketing and agency services (e.g., campaign management, analytics, strategy, and reporting)</li>
              <li>Communicate with you, including responding to inquiries, sending service-related messages, and, where you have agreed, marketing communications such as newsletters and updates</li>
              <li>Improve our website, content, and user experience, and to analyze how our site and campaigns perform</li>
              <li>Comply with legal obligations, enforce our terms, and protect our rights and the security of our systems and users</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We process personal data only where we have a lawful basis, such as your consent, performance of a contract, compliance with law, or our legitimate interests (e.g., improving our services and communicating with clients and prospects), where those interests are not overridden by your rights.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              5. Data Sharing
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We may share your data in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong className="text-primary">Service providers:</strong> With third parties that help us operate our business and website, such as hosting providers, email and communication tools, analytics and advertising platforms, payment processors, and CRM or marketing automation tools. These providers are contractually required to use your data only for the purposes we specify and in line with applicable law.</li>
              <li><strong className="text-primary">Legal and safety:</strong> Where required by law, court order, or government or law enforcement request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others, or to investigate fraud or security issues.</li>
              <li><strong className="text-primary">Business transfers:</strong> In connection with a merger, sale of assets, or other corporate change, in which case your data may be transferred as part of that transaction, subject to this policy and applicable law.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We do not sell your personal data. Where local law gives you a right to opt out of “sales” or “sharing” of personal data (e.g., under CCPA), we do not sell or share your data in that sense unless we have described otherwise and you have not exercised your opt-out.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              6. Data Security
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We implement technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse. These measures include:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Encryption of data in transit (e.g., TLS/HTTPS) and, where appropriate, at rest</li>
              <li>Access controls and authentication so that only authorized personnel can access personal data</li>
              <li>Use of secure, reputable servers and service providers with appropriate security practices</li>
              <li>Regular review and updating of our security practices and training of staff</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              No method of transmission or storage is completely secure. If we become aware of a data breach that is likely to pose a risk to your rights and freedoms, we will notify the relevant supervisory authority and, where required by law (e.g., under GDPR), affected individuals without undue delay, and will take steps to mitigate the impact of the breach.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              7. Your Rights
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Depending on where you live, you may have the following rights in relation to your personal data:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong className="text-primary">Access:</strong> To request a copy of the personal data we hold about you.</li>
              <li><strong className="text-primary">Correction:</strong> To request that we correct or update inaccurate or incomplete personal data.</li>
              <li><strong className="text-primary">Deletion:</strong> To request that we delete your personal data, subject to certain legal exceptions (e.g., where we must retain data for legal or contractual reasons).</li>
              <li><strong className="text-primary">Restriction and portability:</strong> In some jurisdictions (e.g., under GDPR), to request restriction of processing or to receive your data in a portable format.</li>
              <li><strong className="text-primary">Opt-out of marketing:</strong> To unsubscribe from marketing emails at any time via the link in our emails or by contacting us, and to opt out of certain cookies or tracking as described in this policy.</li>
              <li><strong className="text-primary">Objection:</strong> Where we rely on legitimate interests, to object to processing of your data on grounds relating to your situation; and, where applicable, to object to processing for direct marketing.</li>
              <li><strong className="text-primary">Withdraw consent:</strong> Where we rely on your consent, to withdraw it at any time without affecting the lawfulness of processing before withdrawal.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To exercise any of these rights, please contact us using the details in Section 12. We will respond within the timeframes required by applicable law. You may also have the right to lodge a complaint with a data protection supervisory authority in your country.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              8. Data Retention
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, including to provide our services, comply with legal obligations (e.g., tax, accounting), resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it in accordance with our retention and deletion procedures.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              9. Cookies and Tracking Technologies
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our website and some of our service providers use cookies and similar technologies (e.g., pixels, local storage) to collect information about your use of our site and, in some cases, to deliver relevant ads.
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li><strong className="text-primary">Strictly necessary:</strong> Required for the website to function (e.g., security, load balancing). These generally cannot be disabled.</li>
              <li><strong className="text-primary">Functional:</strong> Remember your preferences and choices to improve your experience.</li>
              <li><strong className="text-primary">Analytical:</strong> Help us understand how visitors use our site (e.g., page views, traffic sources). We may use tools such as Google Analytics or similar services.</li>
              <li><strong className="text-primary">Advertising:</strong> Used to deliver and measure ads, including on other sites, and may be set by us or our advertising partners.</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You can manage or disable many cookies through your browser settings. You can also use industry tools (e.g., opt-out links for interest-based advertising) where available. Disabling certain cookies may affect site functionality or your experience.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              10. International Data Transfers
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Your data may be processed and stored in countries other than your own, including where data protection laws differ from those in your jurisdiction. When we transfer data internationally, we take steps to ensure it remains protected in line with this policy and applicable law. This may include using standard contractual clauses, adequacy decisions, or other mechanisms recognized under GDPR, CCPA, or other regulations. You may request more information about the safeguards we use for international transfers by contacting us.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              11. Children’s Privacy
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our website and services are not directed at children under 13 (or the higher age specified in your jurisdiction, e.g., 16 in some countries). We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us and we will take steps to delete it promptly.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              12. Policy Updates
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other reasons. The “Last updated” date at the top of this page will be revised when we make changes. We will inform you of significant changes by posting the updated policy on this page and, where required by law or where we have your contact details, by additional notice (e.g., email or a prominent notice on our website). We encourage you to review this policy periodically.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              13. Contact Information
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you have questions about this Privacy Policy, wish to exercise your privacy rights, or have concerns about how we handle your personal data, please contact us:
            </p>
            <ul className="mt-4 list-none space-y-1 text-muted-foreground pl-0">
              <li><strong className="text-primary">brain & co.</strong></li>
              <li>Email: <a href="mailto:contact@brainnco.com" className="text-primary underline underline-offset-4 hover:no-underline">contact@brainnco.com</a></li>
              <li>Website: <Link href="/contact" className="text-primary underline underline-offset-4 hover:no-underline">Contact page</Link></li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We will respond to your request in accordance with applicable data protection laws.
            </p>

            <p className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
              This Privacy Policy is intended to align with requirements under the GDPR (EU/EEA), CCPA/CPRA (California), and other privacy laws in the regions where brain & co. operates. Specific rights and terms may vary by jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
