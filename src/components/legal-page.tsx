import { contactEmail } from "@/content/site";
import type { Locale } from "@/data/types";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function LegalPage({ locale, kind }: { locale: Locale; kind: "legal" | "privacy" }) {
  const alternateHref =
    kind === "legal"
      ? locale === "de"
        ? "/en/legal-notice/"
        : "/impressum/"
      : locale === "de"
        ? "/en/privacy/"
        : "/datenschutz/";
  return (
    <>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <main className="legal-main">
        <div className="shell legal-layout">
          {kind === "legal" ? (
            locale === "de" ? (
              <>
                <p className="eyebrow">Rechtliches</p>
                <h1>Impressum</h1>
                <section>
                  <h2>Angaben gemäß § 5 DDG</h2>
                  <p>
                    Wasiliy Strecker
                    <br />
                    Ludwigstrasse 23
                    <br />
                    86152 Augsburg
                    <br />
                    Deutschland
                  </p>
                </section>
                <section>
                  <h2>Kontakt</h2>
                  <p>
                    E-Mail: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </p>
                </section>
                <section>
                  <h2>Verantwortlich für Inhalte</h2>
                  <p>Wasiliy Strecker, Anschrift wie oben.</p>
                </section>
                <section>
                  <h2>Externe Links</h2>
                  <p>
                    Diese Website enthält Links zu externen Angeboten. Für deren Inhalte sind
                    ausschließlich die jeweiligen Betreiber verantwortlich.
                  </p>
                </section>
              </>
            ) : (
              <>
                <p className="eyebrow">Legal</p>
                <h1>Legal notice</h1>
                <section>
                  <h2>Provider information</h2>
                  <p>
                    Wasiliy Strecker
                    <br />
                    Ludwigstrasse 23
                    <br />
                    86152 Augsburg
                    <br />
                    Germany
                  </p>
                </section>
                <section>
                  <h2>Contact</h2>
                  <p>
                    Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                  </p>
                </section>
                <section>
                  <h2>Responsible for content</h2>
                  <p>Wasiliy Strecker, address as stated above.</p>
                </section>
                <section>
                  <h2>External links</h2>
                  <p>
                    This website links to external services. Their respective operators remain
                    solely responsible for their content.
                  </p>
                </section>
              </>
            )
          ) : locale === "de" ? (
            <>
              <p className="eyebrow">Datenschutz</p>
              <h1>Datenschutzerklärung</h1>
              <p className="legal-layout__lead">
                Diese Portfolio-Website kommt ohne Tracking, Analytics, Werbenetzwerke,
                Kontaktformular und nicht notwendige Cookies aus.
              </p>
              <section>
                <h2>Verantwortlicher</h2>
                <p>
                  Wasiliy Strecker
                  <br />
                  Ludwigstrasse 23
                  <br />
                  86152 Augsburg
                  <br />
                  E-Mail: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
              </section>
              <section>
                <h2>Bereitstellung der Website und Server-Logfiles</h2>
                <p>
                  Beim Aufruf dieser Website verarbeitet der Webserver technisch erforderliche
                  Informationen, insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Adresse,
                  übertragene Datenmenge, Referrer, Browser und Betriebssystem. Die Verarbeitung
                  dient der sicheren und stabilen Bereitstellung sowie der Fehleranalyse.
                </p>
              </section>
              <section>
                <h2>E-Mail-Kontakt</h2>
                <p>
                  Wenn Sie per E-Mail Kontakt aufnehmen, werden die von Ihnen übermittelten Daten
                  zur Bearbeitung Ihrer Nachricht verarbeitet. Bitte senden Sie keine vertraulichen
                  Unterlagen unverschlüsselt.
                </p>
              </section>
              <section>
                <h2>Externe Links</h2>
                <p>
                  Links zu GitHub, WordPress.org, Contest Gallery und zum Chrome Web Store werden
                  erst aufgerufen, wenn Sie sie aktiv auswählen. Für die anschließende Verarbeitung
                  gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
                </p>
              </section>
              <section>
                <h2>Ihre Rechte</h2>
                <p>
                  Sie können im Rahmen der gesetzlichen Voraussetzungen Auskunft, Berichtigung,
                  Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit verlangen sowie
                  einer Verarbeitung widersprechen. Zudem besteht ein Beschwerderecht bei einer
                  Datenschutzaufsichtsbehörde.
                </p>
              </section>
              <section>
                <h2>Stand</h2>
                <p>24. Juli 2026</p>
              </section>
            </>
          ) : (
            <>
              <p className="eyebrow">Privacy</p>
              <h1>Privacy notice</h1>
              <p className="legal-layout__lead">
                This portfolio website uses no tracking, analytics, advertising networks, contact
                form, or non-essential cookies.
              </p>
              <section>
                <h2>Controller</h2>
                <p>
                  Wasiliy Strecker
                  <br />
                  Ludwigstrasse 23
                  <br />
                  86152 Augsburg
                  <br />
                  Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </p>
              </section>
              <section>
                <h2>Website delivery and server logs</h2>
                <p>
                  When you access this website, the web server processes technically required
                  information, particularly the IP address, date and time, requested address,
                  transferred data volume, referrer, browser, and operating system. This supports
                  secure and stable delivery and error analysis.
                </p>
              </section>
              <section>
                <h2>Email contact</h2>
                <p>
                  If you contact me by email, the information you provide is processed to respond to
                  your message. Please do not send confidential documents without encryption.
                </p>
              </section>
              <section>
                <h2>External links</h2>
                <p>
                  Links to GitHub, WordPress.org, Contest Gallery, and the Chrome Web Store are only
                  requested after you actively select them. The respective provider&apos;s privacy
                  terms apply afterwards.
                </p>
              </section>
              <section>
                <h2>Your rights</h2>
                <p>
                  Subject to statutory requirements, you may request access, correction, deletion,
                  restriction, and data portability, or object to processing. You may also lodge a
                  complaint with a data protection authority.
                </p>
              </section>
              <section>
                <h2>Last updated</h2>
                <p>24 July 2026</p>
              </section>
            </>
          )}
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
