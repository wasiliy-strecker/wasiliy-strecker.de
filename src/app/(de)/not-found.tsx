import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader locale="de" alternateHref="/en/" />
      <main className="not-found">
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1>Diese Seite wurde nicht gefunden.</h1>
          <p>Der Link ist möglicherweise veraltet oder die Adresse wurde geändert.</p>
          <Link className="button button--primary" href="/">
            <ArrowLeft aria-hidden="true" size={18} />
            Zur Startseite
          </Link>
        </div>
      </main>
      <SiteFooter locale="de" />
    </>
  );
}
