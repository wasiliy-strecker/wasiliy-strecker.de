import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata = legalMetadata("de", "privacy");

export default function GermanPrivacyPage() {
  return <LegalPage locale="de" kind="privacy" />;
}
