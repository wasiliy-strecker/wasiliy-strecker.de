import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = resolve(projectRoot, "src/data/github-repos.json");
const excludedRepositories = new Set(["wasiliy-strecker"]);
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "wasiliy-strecker-de-build",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const response = await fetch(
  "https://api.github.com/users/wasiliy-strecker/repos?per_page=100&sort=updated",
  { headers },
);

if (!response.ok) {
  throw new Error(`GitHub repository sync failed with HTTP ${response.status}.`);
}

const repositories = await response.json();
const snapshot = repositories
  .filter(
    (repository) =>
      !repository.fork && !repository.archived && !excludedRepositories.has(repository.name),
  )
  .map((repository) => ({
    name: repository.name,
    description: repository.description,
    language: repository.language,
    topics: repository.topics,
    htmlUrl: repository.html_url,
    homepage: repository.homepage || null,
    license: repository.license?.spdx_id ?? null,
    updatedAt: repository.updated_at,
  }))
  .sort((left, right) => left.name.localeCompare(right.name));

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
process.stdout.write(`Stored ${snapshot.length} public repositories in ${outputPath}.\n`);
