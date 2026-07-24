import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "../globals.css";

import type { ReactNode } from "react";

export default function GermanLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
