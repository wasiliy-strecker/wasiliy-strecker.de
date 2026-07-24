import {
  Braces,
  Boxes,
  Coffee,
  Container,
  FileCode2,
  GalleryHorizontalEnd,
  Globe2,
  Network,
  PackageCheck,
  PanelsTopLeft,
  ServerCog,
  ShieldCheck,
  Shuffle,
  Workflow,
  Wrench,
} from "lucide-react";

import type { Project } from "@/data/types";

const icons: Record<string, typeof Coffee> = {
  "java-idempotency-kit": ShieldCheck,
  "pdf-batch-studio": FileCode2,
  "flowform-studio": Workflow,
  "react-resilience-lab": PanelsTopLeft,
  "node-reliability-lab": ServerCog,
  "csv-healer": Wrench,
  "contest-gallery": GalleryHorizontalEnd,
  "typed-config-processor": Braces,
  "java-concurrency-lab": Network,
  "java-patterns-playbook": Coffee,
  "virtual-tree-kit": Network,
  "typed-policy-kit": ShieldCheck,
  "accessible-reorder": Shuffle,
  "adaptive-network-policy": Network,
  "dart-concurrency-lab": Boxes,
  "rich-notes-images": PanelsTopLeft,
  "ws-forms": PackageCheck,
  "rest-api": Braces,
  "docker-wordpress": Container,
  "ubuntu-server-minimal-conf": ServerCog,
  "wasiliy-strecker-de": Globe2,
};

export function ProjectIcon({
  project,
  size = "default",
}: {
  project: Project;
  size?: "default" | "large";
}) {
  const Icon = icons[project.slug] ?? PackageCheck;
  return (
    <span className={`project-icon project-icon--${project.category} project-icon--${size}`}>
      <Icon aria-hidden="true" strokeWidth={1.8} />
    </span>
  );
}
