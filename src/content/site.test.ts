import { describe, expect, it } from "vitest";

import { copy } from "./site";

describe("recruiter-facing portfolio copy", () => {
  it.each(["de", "en"] as const)(
    "keeps the experience claim and production evidence consistent in %s",
    (locale) => {
      const text = copy[locale];

      expect(text.proof.yearsValue).toBe("10+");
      expect(text.hero.body).toContain("10");
      expect(text.hero.body).not.toContain("8 years");
      expect(text.hero.body).not.toContain("8 Jahre");
      expect(text.production.contest.title).toBe("Contest Gallery");
      expect(text.production.chrome.title).toBe("Rich Notes & Images");
      expect(text.production.chrome.metricOne).toBe("247");
      expect(text.production.chrome.metricTwo).toBe("Featured");
      expect(text.production.chrome.body).toContain("3.0.0");
    },
  );
});
