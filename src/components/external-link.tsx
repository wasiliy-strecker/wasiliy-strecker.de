import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2} />
    </a>
  );
}
