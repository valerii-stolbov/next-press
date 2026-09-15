<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CMS Application

- Read `README.md` in this directory before changing application structure or behavior.
- This workspace is a starting shell for a CMS/admin interface. It currently has no CMS backend, authentication, authorization model, or content model; do not invent rules for them.
- Keep routes, layouts, metadata, the web app manifest, and global styles under `src/app`; keep static assets under `public`.
- shadcn is a local source generator configured by `components.json`. Commit generated UI to `src/components/ui` and adapt it there as application code.
- Keep reusable CMS helpers in `src/lib`. Follow the aliases declared in `components.json` and `tsconfig.json` when generating or moving files.
- Keep Tailwind imports, shadcn theme tokens, radii, and dark-mode values in `src/app/globals.css`; keep their build dependencies in this workspace.
- Do not create or consume a shared UI package solely in anticipation of reuse. The web app does not consume CMS components.
- Continue consuming the shared TypeScript and Oxlint configurations from `@next-press/*` rather than duplicating them locally.
- Validate app changes with `pnpm check-types:cms`, `pnpm lint:cms`, and, when production compilation is affected, `pnpm build:cms` from the repository root.
