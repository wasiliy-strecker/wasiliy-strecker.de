# wasiliy-strecker.de

Bilingual developer portfolio for [Wasiliy Strecker](https://wasiliy-strecker.de/).
The website presents professional experience, production evidence, and a curated
catalog of Java, React/Node.js, Flutter/Dart, PHP/WordPress, browser, and
infrastructure projects.

## Stack

- Next.js 16 with React 19 and TypeScript
- fully static export for Plesk/Nginx/Apache hosting
- German and English routes with localized metadata
- Vitest content-contract tests
- Playwright and Axe browser checks
- GitHub Actions verification

## Local development

```bash
npm ci
npm run dev
```

Open <http://127.0.0.1:53545/>.

## Verification

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

## Repository metadata

`npm run sync:github` refreshes the committed snapshot of public repository
metadata. The public website does not call GitHub or WordPress APIs at runtime.

## Deployment

`scripts/deploy.sh` verifies the project, backs up the existing Plesk document
root, synchronizes the static `out/` directory, applies the domain-specific
security headers, and validates Nginx. The script intentionally contains no
passwords, private keys, or server environment files.

## License

The source code is available under the [MIT License](LICENSE). Personal content
and media are excluded as described in [CONTENT-LICENSE.md](CONTENT-LICENSE.md).
