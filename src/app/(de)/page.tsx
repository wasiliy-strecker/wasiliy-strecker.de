import { HomePage } from "@/components/home-page";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata("de");

export default function GermanHomePage() {
  return <HomePage locale="de" />;
}
