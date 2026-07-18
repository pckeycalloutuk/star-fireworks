import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing bookings, quotes and use of our firework and drone display services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="18 July 2026"
      path="/terms"
      intro={`These terms and conditions govern your use of our website and the provision of firework and drone display services by ${site.legalName}. By booking a display or using our website, you agree to these terms.`}
      sections={[
        {
          h2: "1. Quotations and bookings",
          body: [
            "All quotations are valid for 30 days unless otherwise stated and are subject to a site survey and availability. A booking is confirmed only once we have received your signed agreement and deposit.",
          ],
        },
        {
          h2: "2. Deposits and payment",
          body: [
            "We require a non-refundable deposit of 25% of the total fee to secure your date, with the balance due no later than 14 days before the display. Deposits are transferable to a rescheduled date where a display is postponed by us for safety or weather reasons.",
          ],
        },
        {
          h2: "3. Cancellations by you",
          body: [
            "If you cancel your booking, the following charges apply:",
            [
              "More than 28 days before the event: loss of deposit only",
              "8–28 days before the event: 50% of the total fee",
              "7 days or fewer before the event: 100% of the total fee",
            ],
          ],
        },
        {
          h2: "4. Postponement and weather",
          body: [
            "Firework and drone displays are weather-dependent. Where conditions — particularly high winds — make a display unsafe, we reserve the right to postpone. In such cases we will work with you to reschedule to a mutually convenient date at no additional display fee, though any third-party costs already incurred may still apply.",
          ],
        },
        {
          h2: "5. Site, access and safety",
          body: [
            "You are responsible for ensuring we have safe, timely access to a suitable firing site and that the area can accommodate the required safety distances. We reserve the right to modify or cancel a display on the day if, in our professional judgement, it cannot be fired safely. The safety of spectators, crew and property is always our overriding priority.",
          ],
        },
        {
          h2: "6. Insurance and liability",
          body: [
            `We hold ${site.insurance.toLowerCase()} insurance. Our liability is limited to the extent permitted by law. We are not liable for losses arising from circumstances beyond our reasonable control, including adverse weather, venue restrictions, or third-party actions.`,
          ],
        },
        {
          h2: "7. Permissions and licences",
          body: [
            "Unless otherwise agreed in writing, we will obtain the necessary operational permissions for the display. You are responsible for securing landowner and venue consent and for informing relevant neighbours where appropriate.",
          ],
        },
        {
          h2: "8. Retail purchases",
          body: [
            "Fireworks purchased from our shop are sold to persons aged 18 and over only, subject to proof of age. Consumer fireworks must be used in accordance with the manufacturer's instructions and applicable law. Sold goods are non-returnable once removed from our premises, except where faulty.",
          ],
        },
        {
          h2: "9. Website use",
          body: [
            "The content of this website is for general information only and is subject to change without notice. All trademarks, images and content remain our property or that of our licensors and may not be reproduced without permission.",
          ],
        },
        {
          h2: "10. Governing law",
          body: [
            "These terms are governed by the laws of England and Wales, and any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.",
          ],
        },
        {
          h2: "11. Contact",
          body: [
            `For any questions about these terms, please contact us at ${site.email} or ${site.phone}.`,
          ],
        },
      ]}
    />
  );
}
