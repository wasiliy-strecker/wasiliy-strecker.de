import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("German home presents the recruiter story and every project", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Wasiliy Strecker/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Robuste Software für echte Abläufe",
  );
  await expect(page.getByText("10+", { exact: true })).toBeVisible();
  await expect(page.getByText("1.000+", { exact: true })).toBeVisible();
  await expect(page.locator(".production-card")).toHaveCount(2);
  const chromeProduct = page.locator(".production-card--chrome");
  await expect(chromeProduct.getByRole("heading")).toHaveText("Rich Notes & Images");
  await expect(chromeProduct.getByText("247", { exact: true })).toBeVisible();
  await expect(chromeProduct.getByText("Featured", { exact: true })).toBeVisible();
  await expect(chromeProduct.getByRole("link", { name: /Im Chrome Web Store/ })).toHaveAttribute(
    "href",
    "https://chromewebstore.google.com/detail/rich-notes-images/gpkojjmcckkkdhljdapipnfngoneleog",
  );
  await expect(chromeProduct.getByRole("link", { name: /Quellcode auf GitHub/ })).toHaveAttribute(
    "href",
    "https://github.com/wasiliy-strecker/rich-notes-images",
  );
  await expect(page.locator(".project-card")).toHaveCount(21);
  await expect(page.getByRole("link", { name: "Projekt ansehen" }).first()).toBeVisible();
});

test("English content and language navigation are available", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "EN", exact: true }).click();

  await expect(page).toHaveURL(/\/en\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Reliable software for real workflows",
  );
  await expect(page.getByText("10+", { exact: true })).toBeVisible();
  await expect(page.locator(".production-card--chrome")).toContainText("247");
  await expect(page.locator(".production-card--chrome")).toContainText("Featured");
});

test("filters compact projects and opens a bilingual detail page", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Flutter & Dart" }).click();
  const compactGrid = page.locator(".project-grid--compact");
  await expect(compactGrid.locator(".project-card")).toHaveCount(3);
  await compactGrid.getByRole("link", { name: "Projekt ansehen" }).first().click();

  await expect(page).toHaveURL(/\/projekte\/accessible-reorder\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Accessible Reorder");
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/projects\/accessible-reorder\/$/);
});

test("legal pages are reachable and the initial page has no serious accessibility issues", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Impressum" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Impressum");
  await expect(page.getByText("Ludwigstrasse 23")).toBeVisible();

  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .disableRules(["color-contrast"])
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
