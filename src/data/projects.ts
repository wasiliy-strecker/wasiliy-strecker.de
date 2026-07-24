import type { Project, ProjectCategory } from "./types";

const github = (repository: string) => `https://github.com/wasiliy-strecker/${repository}`;

export const categoryLabels: Record<ProjectCategory, { de: string; en: string }> = {
  java: { de: "Java", en: "Java" },
  "react-node": { de: "React & Node.js", en: "React & Node.js" },
  "flutter-dart": { de: "Flutter & Dart", en: "Flutter & Dart" },
  "php-wordpress": { de: "PHP & WordPress", en: "PHP & WordPress" },
  "browser-web": { de: "Browser & Web", en: "Browser & Web" },
  "devops-tools": { de: "DevOps & Tools", en: "DevOps & Tools" },
};

export const projects: Project[] = [
  {
    slug: "java-idempotency-kit",
    repository: "java-idempotency-kit",
    title: "Java Idempotency Kit",
    category: "java",
    featuredOrder: 1,
    status: { de: "Bibliothek & Referenzanwendung", en: "Library & reference application" },
    summary: {
      de: "Idempotente Request-Verarbeitung für Java 21 und Spring Boot mit atomaren PostgreSQL-Leases, sicherem Replay und nachvollziehbaren Fehlergrenzen.",
      en: "Idempotent request processing for Java 21 and Spring Boot with atomic PostgreSQL leases, safe replay, and explicit failure boundaries.",
    },
    problem: {
      de: "Wiederholte Requests dürfen Zahlungen oder Bestellungen nicht doppelt ausführen. Gleichzeitig müssen Parallelität, Abstürze und Key-Konflikte nachvollziehbar behandelt werden.",
      en: "Retried requests must not execute payments or orders twice. Concurrency, crashes, and key conflicts still need explicit and reviewable behavior.",
    },
    outcome: {
      de: "Eine modulare Bibliothek mit Spring-Boot-Starter, Memory- und JDBC-Store sowie einer ausführbaren Order-API als Architekturbeispiel.",
      en: "A modular library with a Spring Boot starter, memory and JDBC stores, plus an executable order API as an architecture example.",
    },
    highlights: {
      de: [
        "Atomare Lease-Übernahme und Compare-and-set-Übergänge",
        "Sicheres Ergebnis-Replay und Konflikterkennung",
        "PostgreSQL, Flyway, Micrometer und Testcontainers",
        "Dokumentierte Garantien und bewusst benannte Crash-Windows",
      ],
      en: [
        "Atomic lease takeover and compare-and-set transitions",
        "Safe result replay and key-conflict detection",
        "PostgreSQL, Flyway, Micrometer, and Testcontainers",
        "Documented guarantees and deliberately named crash windows",
      ],
    },
    technologies: ["Java 21", "Spring Boot", "PostgreSQL", "Maven", "Testcontainers"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("java-idempotency-kit"),
      },
    ],
  },
  {
    slug: "pdf-batch-studio",
    repository: "pdf-batch-studio",
    title: "PDF Batch Studio",
    category: "java",
    featuredOrder: 2,
    status: { de: "Desktop- & Webanwendung", en: "Desktop & web application" },
    summary: {
      de: "CSV-gesteuerte PDF-Automatisierung als Spring-Boot-Webanwendung und vollständig offline nutzbare JavaFX-Desktop-App.",
      en: "CSV-driven PDF automation as a Spring Boot web application and a fully offline JavaFX desktop app.",
    },
    problem: {
      de: "Personalisierte PDFs aus großen CSV-Dateien müssen zuverlässig erzeugt, überprüft, abgebrochen und als nachvollziehbares Ergebnis exportiert werden.",
      en: "Personalized PDFs from large CSV files need reliable generation, preview, cancellation, and traceable export results.",
    },
    outcome: {
      de: "Ein gemeinsamer Java-Kern versorgt eine responsive Weboberfläche und eine native Offline-Anwendung für Windows, macOS und Linux.",
      en: "A shared Java core powers both a responsive web interface and a native offline application for Windows, macOS, and Linux.",
    },
    highlights: {
      de: [
        "AcroForm-Verarbeitung mit Apache PDFBox",
        "Asynchrone Jobs, Fortschritt, Abbruch und Teilerfolge",
        "Spring Boot, JavaFX, PostgreSQL, H2 und Flyway",
        "Plattformpakete, Docker-Bundle, Checksummen und SBOM",
      ],
      en: [
        "AcroForm processing with Apache PDFBox",
        "Asynchronous jobs, progress, cancellation, and partial success",
        "Spring Boot, JavaFX, PostgreSQL, H2, and Flyway",
        "Platform packages, Docker bundle, checksums, and SBOM",
      ],
    },
    technologies: ["Java 21", "Spring Boot", "JavaFX", "PDFBox", "PostgreSQL", "Docker"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("pdf-batch-studio"),
      },
    ],
    image: "/media/projects/pdf-batch-studio.webp",
    imageAlt: {
      de: "PDF Batch Studio mit abgeschlossenem Verarbeitungsauftrag",
      en: "PDF Batch Studio showing a completed processing job",
    },
  },
  {
    slug: "flowform-studio",
    repository: "flowform-studio",
    title: "FlowForm Studio",
    category: "react-node",
    featuredOrder: 3,
    status: { de: "Full-Stack-Portfolioanwendung", en: "Full-stack portfolio application" },
    summary: {
      de: "Visueller Formular- und Freigabe-Workflow mit React, NestJS, PostgreSQL, WebSockets und einem durchgängigen Recruiter-Szenario.",
      en: "Visual form and approval workflow with React, NestJS, PostgreSQL, WebSockets, and a complete recruiter walkthrough.",
    },
    problem: {
      de: "Formulare und Freigaberegeln verändern sich, während bereits eingereichte Vorgänge reproduzierbar und revisionssicher bleiben müssen.",
      en: "Forms and approval rules evolve while already submitted processes must remain reproducible and auditable.",
    },
    outcome: {
      de: "Ein zusammenhängender Full-Stack-Workflow vom visuellen Designer über Einreichung und Rückfrage bis zur mehrstufigen Freigabe.",
      en: "A coherent full-stack workflow from visual design through submission and clarification to multi-stage approval.",
    },
    highlights: {
      de: [
        "React 19, React Flow, TanStack Query und Zustand",
        "NestJS, OpenAPI, Socket.IO und geteilte Zod-Verträge",
        "PostgreSQL, Prisma, Redis, BullMQ und MinIO",
        "Transaktionales Audit, Outbox und Playwright-Browsertests",
      ],
      en: [
        "React 19, React Flow, TanStack Query, and Zustand",
        "NestJS, OpenAPI, Socket.IO, and shared Zod contracts",
        "PostgreSQL, Prisma, Redis, BullMQ, and MinIO",
        "Transactional audit, outbox, and Playwright browser tests",
      ],
    },
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "WebSockets", "Playwright"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("flowform-studio"),
      },
    ],
  },
  {
    slug: "react-resilience-lab",
    repository: "react-resilience-lab",
    title: "React Resilience Lab",
    category: "react-node",
    featuredOrder: 4,
    status: { de: "Ausführbares Resilience-Lab", en: "Executable resilience lab" },
    summary: {
      de: "React- und Node.js-Muster für Abbruch, persistente Optimistic UI, idempotentes Replay und sichtbare Konfliktauflösung.",
      en: "React and Node.js patterns for cancellation, persistent optimistic UI, idempotent replay, and visible conflict recovery.",
    },
    problem: {
      de: "Oberflächen müssen auch bei Race Conditions, Netzwerkausfällen, wiederholten Requests und parallelen Änderungen korrekt bleiben.",
      en: "Interfaces must remain correct across request races, network outages, repeated requests, and concurrent updates.",
    },
    outcome: {
      de: "Eine ausführbare Incident-Konsole mit gezielt fehlerhaftem API-Gegenstück und deterministischen Browsernachweisen.",
      en: "An executable incident console paired with an intentionally adversarial API and deterministic browser evidence.",
    },
    highlights: {
      de: [
        "Persistente IndexedDB-Outbox und optimistische Projektionen",
        "ETag-, If-Match- und Idempotency-Key-Semantik",
        "Explizite Rebase- oder Verwerfen-Entscheidung bei Konflikten",
        "Vitest, Playwright, Axe und CI über mehrere Node-Versionen",
      ],
      en: [
        "Persistent IndexedDB outbox and optimistic projections",
        "ETag, If-Match, and Idempotency-Key semantics",
        "Explicit keep-or-rebase conflict decisions",
        "Vitest, Playwright, Axe, and CI across Node versions",
      ],
    },
    technologies: ["React", "TypeScript", "Node.js", "IndexedDB", "Playwright", "Axe"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("react-resilience-lab"),
      },
    ],
    image: "/media/projects/react-resilience-lab.webp",
    imageAlt: {
      de: "Incident-Konsole des React Resilience Lab",
      en: "React Resilience Lab incident console",
    },
  },
  {
    slug: "node-reliability-lab",
    repository: "node-reliability-lab",
    title: "Node Reliability Lab",
    category: "react-node",
    featuredOrder: 5,
    status: { de: "Ausführbares Backend-Lab", en: "Executable backend lab" },
    summary: {
      de: "Node.js-Laufzeitmuster für begrenzte Parallelität, Streaming, Worker-Isolation, Diagnostik und kontrolliertes Herunterfahren.",
      en: "Node.js runtime patterns for bounded concurrency, streaming, worker isolation, diagnostics, and graceful shutdown.",
    },
    problem: {
      de: "Unbegrenzte Queues, blockierende CPU-Arbeit und unvollständiges Herunterfahren machen lang laufende Services unzuverlässig.",
      en: "Unbounded queues, blocking CPU work, and incomplete shutdown make long-running services unreliable.",
    },
    outcome: {
      de: "Ein NDJSON-Service, der Backpressure, Worker Threads, Request-Kontext, Prometheus-Metriken und Shutdown-Verhalten demonstriert.",
      en: "An NDJSON service demonstrating backpressure, worker threads, request context, Prometheus metrics, and shutdown behavior.",
    },
    highlights: {
      de: [
        "Begrenztes Streaming und explizite Admission Control",
        "Worker Threads für isolierte CPU-Arbeit",
        "AsyncLocalStorage und korrelierte Diagnostik",
        "Readiness, Drain-Frist und reale SIGTERM-Tests",
      ],
      en: [
        "Bounded streaming and explicit admission control",
        "Worker threads for isolated CPU work",
        "AsyncLocalStorage and correlated diagnostics",
        "Readiness, drain deadlines, and real SIGTERM tests",
      ],
    },
    technologies: ["Node.js", "TypeScript", "Worker Threads", "Streams", "Prometheus", "Vitest"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("node-reliability-lab"),
      },
    ],
  },
  {
    slug: "csv-healer",
    repository: "csv-healer",
    title: "CSV Healer",
    category: "flutter-dart",
    featuredOrder: 6,
    status: { de: "Flutter-Desktop-Produkt", en: "Flutter desktop product" },
    summary: {
      de: "Datenschutzfreundliche Flutter-Desktop-App zum Analysieren, Reparieren und sicheren Exportieren realer CSV-Dateien.",
      en: "Privacy-first Flutter desktop app for inspecting, repairing, and safely exporting real-world CSV files.",
    },
    problem: {
      de: "CSV-Dateien aus Excel, DATEV, Shops und Banken unterscheiden sich bei Trennzeichen, Encoding, Quotes und Zahlenformaten.",
      en: "CSV files from Excel, DATEV, shops, and banks differ in delimiters, encoding, quoting, and number formats.",
    },
    outcome: {
      de: "Eine lokale Desktop-Anwendung mit erklärbaren Warnungen, Stapelverarbeitung, sicheren Profilen und ohne Uploads oder Tracking.",
      en: "A local desktop application with explainable warnings, batch processing, safe profiles, and no uploads or tracking.",
    },
    highlights: {
      de: [
        "Material-3-Oberfläche mit Riverpod",
        "Flutter-unabhängiger Dart-Verarbeitungskern",
        "Virtualisierte Vorschau und erklärbare Reparaturregeln",
        "Windows- und macOS-Releases mit automatisierten Prüfungen",
      ],
      en: [
        "Material 3 interface with Riverpod",
        "Flutter-independent Dart processing core",
        "Virtualized preview and explainable repair rules",
        "Windows and macOS releases with automated checks",
      ],
    },
    technologies: ["Flutter", "Dart", "Riverpod", "Desktop", "CSV", "Offline-first"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("csv-healer"),
      },
      {
        kind: "release",
        label: { de: "Releases ansehen", en: "View releases" },
        href: `${github("csv-healer")}/releases`,
      },
    ],
  },
  {
    slug: "contest-gallery",
    title: "Contest Gallery",
    category: "php-wordpress",
    status: { de: "Produktiv eingesetztes WordPress-Produkt", en: "Production WordPress product" },
    summary: {
      de: "Umfangreiches WordPress-Plug-in für Uploads, Mediengalerien, Abstimmungen, Benutzerkonten und PayPal-/Stripe-Verkäufe.",
      en: "Comprehensive WordPress plugin for uploads, media galleries, voting, user accounts, and PayPal/Stripe sales.",
    },
    problem: {
      de: "Organisationen benötigen flexible Wettbewerbe und Medien-Workflows, ohne mehrere unverbundene Plug-ins kombinieren zu müssen.",
      en: "Organizations need flexible contest and media workflows without combining several disconnected plugins.",
    },
    outcome: {
      de: "Ein seit Jahren gepflegtes Produkt mit mehr als 1.000 aktiven Installationen, 88 öffentlichen Bewertungen und internationaler Nutzung.",
      en: "A long-running product with more than 1,000 active installations, 88 public reviews, and international use.",
    },
    highlights: {
      de: [
        "Upload-, Voting-, Kommentar- und Benutzer-Workflows",
        "PayPal-, Stripe- und Google-Sign-In-Integrationen",
        "Mehrsprachigkeit, Medienverarbeitung und Datenschutzoptionen",
        "Kontinuierliche Releases, Support und Security-Härtung",
      ],
      en: [
        "Upload, voting, commenting, and user workflows",
        "PayPal, Stripe, and Google Sign-In integrations",
        "Localization, media processing, and privacy options",
        "Continuous releases, support, and security hardening",
      ],
    },
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "PayPal", "Stripe"],
    links: [
      {
        kind: "product",
        label: { de: "Produktwebsite", en: "Product website" },
        href: "https://www.contest-gallery.com/",
      },
      {
        kind: "store",
        label: { de: "WordPress-Verzeichnis", en: "WordPress directory" },
        href: "https://wordpress.org/plugins/contest-gallery/",
      },
    ],
  },
  {
    slug: "typed-config-processor",
    repository: "typed-config-processor",
    title: "Typed Config Processor",
    category: "java",
    status: { de: "Java-Bibliothek", en: "Java library" },
    summary: {
      de: "Compile-time typsichere Java-Konfiguration mit Annotation Processing, generierten Loadern und secret-sicherer Diagnostik.",
      en: "Compile-time type-safe Java configuration with annotation processing, generated loaders, and secret-safe diagnostics.",
    },
    problem: {
      de: "String-basierte Konfiguration verschiebt viele Fehler in die Laufzeit und kann sensible Werte in Fehlermeldungen preisgeben.",
      en: "String-based configuration moves many errors to runtime and can expose sensitive values in diagnostics.",
    },
    outcome: {
      de: "Ein Prozessor erzeugt typisierte Loader und Dokumentation ohne Runtime Reflection.",
      en: "A processor generates typed loaders and documentation without runtime reflection.",
    },
    highlights: {
      de: [
        "Annotation Processing mit echten Compiler-Tests",
        "Generierte Quelltexte und Beispielkonfiguration",
        "Validierung und maskierte Secret-Diagnostik",
      ],
      en: [
        "Annotation processing with real compiler tests",
        "Generated sources and example configuration",
        "Validation and redacted secret diagnostics",
      ],
    },
    technologies: ["Java", "Annotation Processing", "Maven", "JUnit"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("typed-config-processor"),
      },
    ],
  },
  {
    slug: "java-concurrency-lab",
    repository: "java-concurrency-lab",
    title: "Java Concurrency Lab",
    category: "java",
    status: { de: "Ausführbares Java-Lab", en: "Executable Java lab" },
    summary: {
      de: "Produktionsnahe Java-21-Beispiele für Virtual Threads, Single Flight, begrenzte Ressourcen, Abbruch und deterministische Tests.",
      en: "Production-minded Java 21 examples for virtual threads, single flight, bounded resources, cancellation, and deterministic tests.",
    },
    problem: {
      de: "Mehr Parallelität verbessert Durchsatz nur, wenn knappe Abhängigkeiten, Abbruch und Fehlerausbreitung kontrolliert bleiben.",
      en: "More concurrency improves throughput only when scarce dependencies, cancellation, and failure propagation remain controlled.",
    },
    outcome: {
      de: "Kleine wiederverwendbare Primitive und ein ausführbares Aggregationsbeispiel mit fokussierten Race-Tests.",
      en: "Small reusable primitives and an executable aggregation example with focused race tests.",
    },
    highlights: {
      de: [
        "Virtual Threads mit expliziter Kapazitätsbegrenzung",
        "Single-Flight-Zusammenführung gleicher Requests",
        "Deadlines, kooperativer Abbruch und Fail-fast-Gruppen",
      ],
      en: [
        "Virtual threads with explicit capacity limits",
        "Single-flight coalescing for identical requests",
        "Deadlines, cooperative cancellation, and fail-fast groups",
      ],
    },
    technologies: ["Java 21", "Virtual Threads", "Maven", "JUnit"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("java-concurrency-lab"),
      },
    ],
  },
  {
    slug: "java-patterns-playbook",
    repository: "java-patterns-playbook",
    title: "Java Patterns Playbook",
    category: "java",
    status: { de: "Java-Referenzprojekt", en: "Java reference project" },
    summary: {
      de: "Ausführbare Java-21-Entwurfsmuster und Idiome mit realistischen Beispielen, Tests und expliziten Trade-offs.",
      en: "Executable Java 21 design patterns and idioms with realistic examples, tests, and explicit trade-offs.",
    },
    problem: {
      de: "Musterkataloge bleiben abstrakt, wenn Einsatzgrenzen und Konsequenzen nicht an einem realistischen Workflow sichtbar werden.",
      en: "Pattern catalogs stay abstract when their boundaries and consequences are not visible in a realistic workflow.",
    },
    outcome: {
      de: "Ein fokussierter Katalog mit Bestellworkflow, nachvollziehbaren Alternativen und ausführbaren Tests.",
      en: "A focused catalog with an order workflow, reviewable alternatives, and executable tests.",
    },
    highlights: {
      de: [
        "Creational, Structural und Behavioral Patterns",
        "Domänennahe Java-Idiome",
        "Tests und dokumentierte Trade-offs",
      ],
      en: [
        "Creational, structural, and behavioral patterns",
        "Domain-oriented Java idioms",
        "Tests and documented trade-offs",
      ],
    },
    technologies: ["Java 21", "Design Patterns", "Maven", "JUnit"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("java-patterns-playbook"),
      },
    ],
  },
  {
    slug: "virtual-tree-kit",
    repository: "virtual-tree-kit",
    title: "Virtual Tree Kit",
    category: "react-node",
    status: { de: "Bibliothek in Entwicklung", en: "Library in development" },
    summary: {
      de: "Headless, barrierearme und virtualisierte Tree-Primitives für React mit großen Hierarchien und vorhersehbarer Tastatursteuerung.",
      en: "Headless, accessible, virtualized tree primitives for React with large hierarchies and predictable keyboard focus.",
    },
    problem: {
      de: "Große Baumstrukturen müssen schnell rendern, ohne Semantik, Fokus oder Tastaturbedienung zu verlieren.",
      en: "Large tree structures need fast rendering without losing semantics, focus, or keyboard operation.",
    },
    outcome: {
      de: "Ein framework-unabhängiger Kern mit React-Primitives; öffentliche API und Demo werden schrittweise ausgebaut.",
      en: "A framework-independent core with React primitives; the public API and demo are being expanded incrementally.",
    },
    highlights: {
      de: [
        "Headless Architektur",
        "Virtualisierung großer Hierarchien",
        "Fokus- und Tastaturmodell",
      ],
      en: ["Headless architecture", "Large-hierarchy virtualization", "Focus and keyboard model"],
    },
    technologies: ["React", "TypeScript", "Accessibility", "Virtualization"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("virtual-tree-kit"),
      },
    ],
  },
  {
    slug: "typed-policy-kit",
    repository: "typed-policy-kit",
    title: "Typed Policy Kit",
    category: "react-node",
    status: { de: "TypeScript-Bibliothek", en: "TypeScript library" },
    summary: {
      de: "Typsichere Autorisierungsregeln für React und Express mit kontextuellem RBAC und Default-deny-Semantik.",
      en: "Type-safe authorization policies for React and Express with contextual RBAC and default-deny semantics.",
    },
    problem: {
      de: "UI-Berechtigungen und serverseitige Durchsetzung driften leicht auseinander und erzeugen Sicherheitslücken.",
      en: "UI permissions and server-side enforcement easily drift apart and create security gaps.",
    },
    outcome: {
      de: "Geteilte, typisierte Policies mit serverseitiger Autorität und verständlichen Entscheidungen.",
      en: "Shared, typed policies with server-side authority and explainable decisions.",
    },
    highlights: {
      de: ["Kontextuelles RBAC", "Default deny", "React- und Express-Integration"],
      en: ["Contextual RBAC", "Default deny", "React and Express integration"],
    },
    technologies: ["TypeScript", "React", "Express", "RBAC"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("typed-policy-kit"),
      },
    ],
  },
  {
    slug: "accessible-reorder",
    repository: "accessible_reorder",
    title: "Accessible Reorder",
    category: "flutter-dart",
    status: { de: "Flutter-Package", en: "Flutter package" },
    summary: {
      de: "Barrierearme, zustandsunabhängige Reorder-Listen und -Grids für Pointer, Touch, Tastatur, Screenreader und RTL.",
      en: "Accessible, state-management-agnostic reorderable lists and grids for pointer, touch, keyboard, screen readers, and RTL.",
    },
    problem: {
      de: "Drag-and-drop-Komponenten schließen Tastatur- und Screenreader-Nutzer häufig aus.",
      en: "Drag-and-drop components often exclude keyboard and screen-reader users.",
    },
    outcome: {
      de: "Ein wiederverwendbares Flutter-Package mit mehreren Eingabemethoden und expliziten Policies.",
      en: "A reusable Flutter package with multiple input methods and explicit policies.",
    },
    highlights: {
      de: ["Pointer, Touch und Tastatur", "Screenreader-Ansagen", "RTL- und Grid-Unterstützung"],
      en: ["Pointer, touch, and keyboard", "Screen-reader announcements", "RTL and grid support"],
    },
    technologies: ["Flutter", "Dart", "Accessibility", "Keyboard Navigation"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("accessible_reorder"),
      },
    ],
  },
  {
    slug: "adaptive-network-policy",
    repository: "adaptive_network_policy",
    title: "Adaptive Network Policy",
    category: "flutter-dart",
    status: { de: "Flutter-Package", en: "Flutter package" },
    summary: {
      de: "Native Netzwerkbedingungen und deterministische Ausführungsrichtlinien für Flutter auf Android, iOS und macOS.",
      en: "Native network conditions and deterministic execution policies for Flutter on Android, iOS, and macOS.",
    },
    problem: {
      de: "Mobile Anwendungen brauchen nachvollziehbare Entscheidungen für Offline-Zustände, eingeschränkte Verbindungen und teure Netzwerke.",
      en: "Mobile applications need reviewable decisions for offline states, constrained connections, and expensive networks.",
    },
    outcome: {
      de: "Ein austauschbares Policy-Modell mit nativen Plattformadaptern und deterministischen Tests.",
      en: "A replaceable policy model with native platform adapters and deterministic tests.",
    },
    highlights: {
      de: [
        "Native Netzwerkbeobachtung",
        "Explizite Ausführungs-Policies",
        "Deterministische Tests",
      ],
      en: ["Native network observation", "Explicit execution policies", "Deterministic tests"],
    },
    technologies: ["Flutter", "Dart", "Android", "iOS", "macOS"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("adaptive_network_policy"),
      },
    ],
  },
  {
    slug: "dart-concurrency-lab",
    repository: "dart-concurrency-lab",
    title: "Dart Concurrency Lab",
    category: "flutter-dart",
    status: { de: "Ausführbares Dart-Lab", en: "Executable Dart lab" },
    summary: {
      de: "Dart-Concurrency-Experimente mit deterministischen Tests, Benchmarks und einer produktionsnahen Streaming-CLI.",
      en: "Dart concurrency experiments with deterministic tests, benchmarks, and a production-style streaming CLI.",
    },
    problem: {
      de: "Isolates, Streams und Parallelitätsgrenzen sind ohne messbare, deterministische Szenarien schwer zu bewerten.",
      en: "Isolates, streams, and concurrency limits are difficult to evaluate without measurable deterministic scenarios.",
    },
    outcome: {
      de: "Kleine ausführbare Experimente trennen Semantik von bloßen Timing-Beobachtungen.",
      en: "Small executable experiments separate semantic guarantees from timing observations.",
    },
    highlights: {
      de: ["Isolates und Streaming", "Deterministische Tests", "Reproduzierbare Benchmarks"],
      en: ["Isolates and streaming", "Deterministic tests", "Reproducible benchmarks"],
    },
    technologies: ["Dart", "Isolates", "Streams", "Benchmarks"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("dart-concurrency-lab"),
      },
    ],
  },
  {
    slug: "rich-notes-images",
    repository: "rich-notes-images",
    title: "Rich Notes & Images",
    category: "browser-web",
    status: { de: "Chrome-Erweiterung", en: "Chrome extension" },
    summary: {
      de: "Local-first Chrome-Erweiterung für tabbasierte Rich-Text-Notizen, Bilder, Suche und vollständige ZIP-Backups.",
      en: "Local-first Chrome extension for tabbed rich-text notes, images, search, and complete ZIP backups.",
    },
    problem: {
      de: "Schnelle Browsernotizen sollen offline, durchsuchbar und ohne externes Konto verfügbar sein.",
      en: "Quick browser notes should remain offline, searchable, and available without an external account.",
    },
    outcome: {
      de: "Eine veröffentlichte Manifest-V3-Erweiterung mit lokaler IndexedDB-Persistenz und portablen Backups.",
      en: "A published Manifest V3 extension with local IndexedDB persistence and portable backups.",
    },
    highlights: {
      de: ["TinyMCE und Bildablage", "IndexedDB und Volltextsuche", "ZIP-Import und -Export"],
      en: ["TinyMCE and image storage", "IndexedDB and full-text search", "ZIP import and export"],
    },
    technologies: ["JavaScript", "Chrome Extensions", "IndexedDB", "TinyMCE"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("rich-notes-images"),
      },
      {
        kind: "store",
        label: { de: "Chrome Web Store", en: "Chrome Web Store" },
        href: "https://chromewebstore.google.com/detail/notes-tabs-popup-tinymce/gpkojjmcckkkdhljdapipnfngoneleog",
      },
    ],
  },
  {
    slug: "ws-forms",
    repository: "ws-forms",
    title: "WS Forms",
    category: "php-wordpress",
    status: { de: "WordPress-Experiment", en: "WordPress experiment" },
    summary: {
      de: "Experimentelles WordPress-Commerce-Plug-in mit Controllern, Repositories, REST-Endpunkten und Zahlungs-Workflows.",
      en: "Experimental WordPress commerce plugin with controllers, repositories, REST endpoints, and payment workflows.",
    },
    problem: {
      de: "Komplexere WordPress-Prozesse benötigen klarere Grenzen als klassische prozedurale Plug-in-Strukturen.",
      en: "More complex WordPress processes need clearer boundaries than classic procedural plugin structures.",
    },
    outcome: {
      de: "Ein fokussiertes Experiment für strukturierte Plugin-Architektur und Integrationsgrenzen.",
      en: "A focused experiment for structured plugin architecture and integration boundaries.",
    },
    highlights: {
      de: [
        "Controller und Repositories",
        "Eigene Tabellen und REST-Endpunkte",
        "Payment-Provider-Workflows",
      ],
      en: [
        "Controllers and repositories",
        "Custom tables and REST endpoints",
        "Payment provider workflows",
      ],
    },
    technologies: ["PHP", "WordPress", "REST", "MySQL"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("ws-forms"),
      },
    ],
  },
  {
    slug: "rest-api",
    repository: "rest-api",
    title: "Framework-free PHP REST API",
    category: "php-wordpress",
    status: { de: "PHP-API-Lab", en: "PHP API lab" },
    summary: {
      de: "Kompakte REST-API ohne Framework für versioniertes Routing, API-Key-Authentifizierung, CORS, Validierung und Request Tracing.",
      en: "Compact framework-free REST API for versioned routing, API-key authentication, CORS, validation, and request tracing.",
    },
    problem: {
      de: "Frameworks verbergen häufig, welche Verantwortung Routing, Validierung und Fehlerabbildung tatsächlich übernehmen.",
      en: "Frameworks often hide the responsibilities of routing, validation, and error mapping.",
    },
    outcome: {
      de: "Ein kleiner HTTP-Kern, der die wesentlichen API-Grenzen sichtbar macht.",
      en: "A small HTTP core that keeps essential API boundaries visible.",
    },
    highlights: {
      de: ["Versioniertes Routing", "API-Key und CORS", "Validierung und Request IDs"],
      en: ["Versioned routing", "API keys and CORS", "Validation and request IDs"],
    },
    technologies: ["PHP", "REST", "HTTP", "MySQL"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("rest-api"),
      },
    ],
  },
  {
    slug: "docker-wordpress",
    repository: "docker-wordpress",
    title: "Docker WordPress Stack",
    category: "devops-tools",
    status: { de: "Entwicklungsumgebung", en: "Development environment" },
    summary: {
      de: "Reproduzierbare lokale WordPress-Umgebung mit MariaDB, phpMyAdmin, Mailpit, Health Checks und isolierten Laufzeitdaten.",
      en: "Reproducible local WordPress environment with MariaDB, phpMyAdmin, Mailpit, health checks, and isolated runtime data.",
    },
    problem: {
      de: "Lokale WordPress-Setups driften schnell auseinander und machen Fehler schwer reproduzierbar.",
      en: "Local WordPress setups quickly drift and make defects difficult to reproduce.",
    },
    outcome: {
      de: "Ein kompakter Compose-Stack für identische Entwicklungs- und Testbedingungen.",
      en: "A compact Compose stack for consistent development and test conditions.",
    },
    highlights: {
      de: ["Docker Compose", "MariaDB und phpMyAdmin", "Mailpit und Health Checks"],
      en: ["Docker Compose", "MariaDB and phpMyAdmin", "Mailpit and health checks"],
    },
    technologies: ["Docker", "WordPress", "MariaDB", "Mailpit"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("docker-wordpress"),
      },
    ],
  },
  {
    slug: "ubuntu-server-minimal-conf",
    repository: "ubuntu-server-minimal-conf",
    title: "Ubuntu Server Baseline",
    category: "devops-tools",
    status: { de: "Deployment-Runbook", en: "Deployment runbook" },
    summary: {
      de: "Prüfbares Apache-Deployment- und Hardening-Runbook mit Verifikation, Rollback und bewusst kleinem Umfang.",
      en: "Reviewable Apache deployment and hardening runbook with verification, rollback, and deliberately small scope.",
    },
    problem: {
      de: "Serveränderungen ohne Vorprüfung und Rollback-Pfad machen kleine Deployments unnötig riskant.",
      en: "Server changes without preflight checks and rollback paths make small deployments unnecessarily risky.",
    },
    outcome: {
      de: "Ein nachvollziehbarer Baseline-Ablauf für minimale Ubuntu-Webserver.",
      en: "A reviewable baseline workflow for minimal Ubuntu web servers.",
    },
    highlights: {
      de: ["Explizite Vorprüfungen", "Apache-Härtung", "Verifikation und Rollback"],
      en: ["Explicit preflight checks", "Apache hardening", "Verification and rollback"],
    },
    technologies: ["Ubuntu", "Apache", "Bash", "Linux"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("ubuntu-server-minimal-conf"),
      },
    ],
  },
  {
    slug: "wasiliy-strecker-de",
    repository: "wasiliy-strecker.de",
    title: "wasiliy-strecker.de",
    category: "browser-web",
    status: { de: "Portfolio-Website", en: "Portfolio website" },
    summary: {
      de: "Diese zweisprachige, barrierearme und statisch ausgelieferte Portfolio-Website mit React, TypeScript, Tests und CI.",
      en: "This bilingual, accessible, statically exported portfolio website with React, TypeScript, tests, and CI.",
    },
    problem: {
      de: "Recruiter brauchen in wenigen Sekunden eine klare Einordnung von Erfahrung, technischer Ausrichtung und belastbaren Projektnachweisen.",
      en: "Recruiters need a clear view of experience, technical direction, and credible project evidence within seconds.",
    },
    outcome: {
      de: "Eine schnelle, zweisprachige Website mit kuratierter Startseite, statischen Projektdetails und reproduzierbarem Plesk-Deployment.",
      en: "A fast bilingual website with a curated home page, static project details, and reproducible Plesk deployment.",
    },
    highlights: {
      de: [
        "Statischer Next.js-Export",
        "Zweisprachige SEO-Metadaten",
        "Playwright- und Accessibility-Tests",
      ],
      en: ["Static Next.js export", "Bilingual SEO metadata", "Playwright and accessibility tests"],
    },
    technologies: ["Next.js", "React", "TypeScript", "Playwright", "Accessibility"],
    links: [
      {
        kind: "github",
        label: { de: "Quellcode auf GitHub", en: "Source on GitHub" },
        href: github("wasiliy-strecker.de"),
      },
      {
        kind: "product",
        label: { de: "Live-Website", en: "Live website" },
        href: "https://wasiliy-strecker.de/",
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((project) => project.featuredOrder !== undefined)
  .sort((left, right) => left.featuredOrder! - right.featuredOrder!);

export const otherProjects = projects.filter((project) => project.featuredOrder === undefined);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
