import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/metadata";

export const metadata = legalMetadata("de", "legal");

export default function GermanLegalPage() {
  return <LegalPage locale="de" kind="legal" />;
}
