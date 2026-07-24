import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader locale="en" alternateHref="/" />
      <main className="not-found">
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1>This page could not be found.</h1>
          <p>The link may be outdated or the address may have changed.</p>
          <a className="button button--primary" href="/en/">
            <ArrowLeft aria-hidden="true" size={18} />
            Back to home
          </a>
        </div>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
