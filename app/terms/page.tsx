import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the brain & co. website and marketing services. Rules, user responsibilities, and legal terms.",
}

const lastUpdated = "February 2025"

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Terms content */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground">
            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              1. Introduction
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These Terms and Conditions (“Terms”) govern your access to and use of the website and services operated by brain & co. (“we,” “us,” or “our”). By accessing or using our website at brainnco.com (and related domains) or by engaging our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website or services. We recommend that you read these Terms carefully and keep a copy for your records.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              2. Services Provided
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              brain & co. is a marketing agency that provides a range of digital and strategic marketing services. Our services may include, but are not limited to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Content creation and content marketing strategy</li>
              <li>Campaign management (including paid media, email, and social campaigns)</li>
              <li>Search engine optimization (SEO) and search engine marketing (SEM)</li>
              <li>Pay-per-click (PPC) and paid advertising management</li>
              <li>Brand strategy and creative development</li>
              <li>Social media marketing and community management</li>
              <li>Analytics, reporting, and performance measurement</li>
              <li>Website design, development, and optimization</li>
              <li>Consulting and advisory services related to marketing and growth</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The specific scope, deliverables, and fees for any engagement will be set out in a separate agreement, statement of work, or proposal agreed between you and brain & co. Nothing on this website constitutes an offer to provide any particular service until such an agreement is executed.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              3. User Responsibilities
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When using our website or services, you agree to:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Use the website and services only for lawful purposes and in accordance with these Terms and all applicable laws and regulations</li>
              <li>Not use the website or services to conduct, promote, or facilitate any illegal, fraudulent, harmful, or offensive activity</li>
              <li>Respect the intellectual property rights of brain & co. and third parties, including copyrights, trademarks, and other proprietary rights</li>
              <li>Not copy, scrape, frame, or mirror any part of the website or its content without our prior written consent</li>
              <li>Not introduce viruses, malware, or other harmful code, or attempt to gain unauthorized access to our systems, networks, or data</li>
              <li>Provide accurate and complete information when contacting us, registering for an account, or entering into a service agreement</li>
              <li>Not use the website or services in any way that could damage, disable, or impair our systems or interfere with other users’ use</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Breach of these obligations may result in suspension or termination of your access to the website or services and may expose you to legal action.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              4. Account Registration and Security
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Where we offer or require account registration (e.g., client portals, tools, or newsletters), you are responsible for:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Providing accurate, current, and complete registration information</li>
              <li>Maintaining the confidentiality of your account credentials (e.g., username and password)</li>
              <li>All activities that occur under your account, whether or not you authorized them</li>
              <li>Notifying us promptly of any unauthorized access or suspected breach of your account</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We will not be liable for any loss or damage arising from your failure to maintain the security of your account. We reserve the right to suspend or terminate any account that we reasonably believe has been compromised or used in violation of these Terms.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              5. Intellectual Property
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              All content, materials, and features on this website—including but not limited to text, graphics, logos, icons, images, audio and video clips, software, and the design, layout, and “look and feel” of the site—are the property of brain & co. or our licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The “brain & co.” name and logo, and any other trade names or marks used on the website, are trademarks or registered trademarks of brain & co. You may not use our trademarks, logos, or other proprietary indicia without our prior written permission.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You may view and download content from the website only for your personal, non-commercial use, provided you do not remove any copyright or other proprietary notices. Any other use—including reproduction, modification, distribution, or commercial exploitation—without our written consent is prohibited. For client work, ownership of deliverables will be as set out in the relevant service agreement or statement of work.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              6. Limitation of Liability
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To the fullest extent permitted by applicable law:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-muted-foreground">
              <li>The website and our services are provided “as is” and “as available.” We do not warrant that the website or services will be uninterrupted, error-free, or free of viruses or other harmful components. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li>
              <li>brain & co., its directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, goodwill, or business opportunity) arising out of or in connection with your use of the website or services, whether based in contract, tort, negligence, strict liability, or otherwise, even if we have been advised of the possibility of such damages.</li>
              <li>Our total liability to you for any claims arising from or related to these Terms or your use of the website or services shall not exceed the amount you have paid to brain & co. in the twelve (12) months preceding the claim, or, if no such payment has been made, one hundred (100) units of the currency in which we invoice (e.g., USD or SAR).</li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. In such jurisdictions, our liability will be limited to the maximum extent permitted by law. Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other matter that cannot be excluded or limited under applicable law.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              7. Termination of Services
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We may suspend or terminate your access to the website or our services, with or without notice, if we reasonably believe that you have breached these Terms, engaged in fraudulent or illegal activity, or for any other reason we consider necessary to protect our business, users, or third parties.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For paid or contracted services, termination will be governed by the terms of the applicable service agreement or statement of work. Unless otherwise agreed, you may stop using the website and our services at any time. Provisions of these Terms that by their nature should survive termination (including intellectual property, limitation of liability, governing law, and dispute resolution) will remain in effect after termination.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              8. Governing Law
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              These Terms and any dispute or claim arising out of or in connection with them or the website or services shall be governed by and construed in accordance with the laws of the jurisdiction in which brain & co. is established, without regard to its conflict of law provisions. For the avoidance of doubt, if brain & co. operates in or from Saudi Arabia, the laws of the Kingdom of Saudi Arabia may apply; if from another jurisdiction, the laws of that jurisdiction will apply as stated in our service agreements or on request.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              You agree that any legal action or proceeding relating to your access to or use of the website or services shall be brought exclusively in the courts of that jurisdiction, and you consent to the personal jurisdiction of such courts. We may, however, seek injunctive or other relief in any court of competent jurisdiction.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              9. Amendments to Terms
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We reserve the right to modify or replace these Terms at any time. The “Last updated” date at the top of this page indicates when the Terms were last revised. Changes will be effective upon posting to this page. Your continued use of the website or services after any changes constitutes your acceptance of the revised Terms.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              For material changes that affect your rights or obligations, we will use reasonable efforts to notify you—for example, by posting a notice on the website or, where we have your contact details and the change is significant, by email. We encourage you to review these Terms periodically. If you do not agree to the updated Terms, you must stop using the website and our services.
            </p>

            <h2 className="mt-10 font-serif text-xl font-bold text-primary sm:text-2xl">
              10. Contact Information
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you have any questions about these Terms and Conditions or wish to contact us regarding your use of the website or services, please reach out:
            </p>
            <ul className="mt-4 list-none space-y-1 text-muted-foreground pl-0">
              <li><strong className="text-primary">brain & co.</strong></li>
              <li>Email: <a href="mailto:contact@brainnco.com" className="text-primary underline underline-offset-4 hover:no-underline">contact@brainnco.com</a></li>
              <li>Website: <Link href="/contact" className="text-primary underline underline-offset-4 hover:no-underline">Contact page</Link></li>
            </ul>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We will respond to inquiries in a reasonable time. For matters related to data privacy, please refer to our <Link href="/privacy" className="text-primary underline underline-offset-4 hover:no-underline">Privacy Policy</Link>.
            </p>

            <p className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
              By using the brain & co. website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
