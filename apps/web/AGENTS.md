<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Web Application

- Read `README.md` in this directory before changing application structure or behavior.
- This workspace owns the public-facing site. It is currently a minimal shell without a content model, backend integration, authentication, or confirmed business rules; do not invent them.
- Keep routes, layouts, metadata, and global styles under `src/app`, and static assets under `public`.
- Tailwind CSS and PostCSS configuration belong to this app. Keep its theme and base styles in `src/app/globals.css`.
- Do not import CMS shadcn configuration or files from `apps/cms`. Public-site components should remain owned by this app unless a real shared contract is introduced.
- Continue consuming the shared TypeScript and Oxlint configurations from `@next-press/*` rather than duplicating them locally.
- Validate app changes with `pnpm check-types:web`, `pnpm lint:web`, and, when production compilation is affected, `pnpm build:web` from the repository root.
