import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata = legalMetadata("en", "legal");

export default function EnglishLegalPage() {
  return <LegalPage locale="en" kind="legal" />;
}
