import { contactEmail, getCopy, githubUrl } from "@/content/site";
import type { Locale } from "@/data/types";
import { legalPath, privacyPath } from "@/lib/routes";

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = getCopy(locale);

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <a className="brand brand--footer" href={locale === "de" ? "/" : "/en/"}>
            <span className="brand__mark" aria-hidden="true">
              WS
            </span>
            <span className="brand__text">
              <strong>{text.name}</strong>
              <span>{text.footer.statement}</span>
            </span>
          </a>
        </div>
        <div className="site-footer__links">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={legalPath(locale)}>{text.footer.legal}</a>
          <a href={privacyPath(locale)}>{text.footer.privacy}</a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Wasiliy Strecker</span>
        <span>{text.footer.rights}</span>
      </div>
    </footer>
  );
}
