import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How we collect, use and protect your personal data in line with UK GDPR and the Data Protection Act 2018.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="18 July 2026"
      path="/privacy-policy"
      intro={`${site.legalName} ("we", "us", "our") is committed to protecting your privacy. This policy explains what personal data we collect, how we use it, and your rights under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`}
      sections={[
        {
          h2: "1. Who we are",
          body: [
            `${site.legalName} is the data controller responsible for your personal data. You can contact us at ${site.email} or by post at ${site.address}.`,
          ],
        },
        {
          h2: "2. Information we collect",
          body: [
            "We collect information you provide directly to us, and some information automatically when you use our website. This may include:",
            [
              "Contact details such as your name, email address and telephone number",
              "Event details you share when requesting a quote (event type, date, venue postcode, budget)",
              "Any message content you send via our forms",
              "Technical data such as your IP address, browser type and pages visited (via analytics)",
            ],
          ],
        },
        {
          h2: "3. How we use your information",
          body: [
            "We use your personal data to:",
            [
              "Respond to your enquiries and provide quotes",
              "Plan, design and deliver your firework or drone display",
              "Manage bookings, payments and our contractual obligations",
              "Send you service updates and, where you have consented, marketing communications",
              "Improve our website, services and customer experience",
            ],
          ],
        },
        {
          h2: "4. Lawful basis for processing",
          body: [
            "We rely on the following lawful bases under UK GDPR: performance of a contract (to deliver services you have booked); legitimate interests (to respond to enquiries and improve our services); consent (for marketing communications, which you may withdraw at any time); and legal obligation (for example, to comply with safety and financial record-keeping requirements).",
          ],
        },
        {
          h2: "5. Sharing your information",
          body: [
            "We do not sell your personal data. We may share it with trusted third parties who help us operate our business — such as payment processors, IT and email providers, and, where relevant, venues, councils or safety authorities in connection with your event. All such parties are required to keep your data secure and use it only for the purposes we specify.",
          ],
        },
        {
          h2: "6. Data retention",
          body: [
            "We keep your personal data only for as long as necessary to fulfil the purposes described in this policy, including any legal, accounting or reporting requirements. Enquiry data that does not result in a booking is typically retained for up to 24 months.",
          ],
        },
        {
          h2: "7. Your rights",
          body: [
            "Under UK GDPR you have the right to:",
            [
              "Access the personal data we hold about you",
              "Request correction of inaccurate data",
              "Request erasure of your data in certain circumstances",
              "Object to or restrict our processing of your data",
              "Request data portability",
              "Withdraw consent at any time where processing is based on consent",
            ],
            `To exercise any of these rights, please contact us at ${site.email}. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
          ],
        },
        {
          h2: "8. Cookies",
          body: [
            "Our website uses essential cookies to function correctly and may use analytics cookies to help us understand how visitors use the site. You can control cookies through your browser settings.",
          ],
        },
        {
          h2: "9. Security",
          body: [
            "We use appropriate technical and organisational measures to protect your personal data against unauthorised access, loss or misuse. However, no transmission over the internet can be guaranteed to be completely secure.",
          ],
        },
        {
          h2: "10. Changes to this policy",
          body: [
            "We may update this policy from time to time. Any changes will be posted on this page with a revised 'last updated' date.",
          ],
        },
        {
          h2: "11. Contact us",
          body: [
            `If you have any questions about this privacy policy or how we handle your data, please contact us at ${site.email} or ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
