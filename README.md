# NextPress

NextPress is a reusable monorepo template for building websites. It keeps a public Next.js application, a separate CMS/admin Next.js application, and the configuration they share in one pnpm workspace.

Both applications are intentionally minimal starting points. The `cms` app does not include a CMS product or content model yet; it is a base admin application to extend for a specific project.

## Structure

```text
apps/
  web/                    Public website
  cms/                    CMS/admin application
packages/
  oxlint-config/          Shared Oxlint configuration
  typescript-config/      Shared TypeScript configuration
```

The workspace is defined by `pnpm-workspace.yaml`. Turborepo runs the application tasks declared in `turbo.json`; configuration packages are consumed directly through pnpm's `workspace:*` protocol.

## Tech Stack

- Next.js 16 and React 19
- TypeScript 6
- Tailwind CSS 4 with `tw-animate-css`
- shadcn/Base UI components in the CMS application
- Oxlint and Oxfmt
- Turborepo 2
- pnpm workspaces

## Requirements

- Node.js 24.20.0
- pnpm 12.4.2

These versions are declared in the root `package.json` through `engines` and `devEngines`.

## Installation

From the repository root:

```bash
pnpm install
```

## Development

Start both applications:

```bash
pnpm dev
```

Or start one application:

```bash
pnpm dev:web  # http://localhost:3000
pnpm dev:cms  # http://localhost:3030
```

## Available Scripts

Run these commands from the repository root.

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `pnpm dev`             | Start all development servers                  |
| `pnpm dev:web`         | Start only `web`                               |
| `pnpm dev:cms`         | Start only `cms`                               |
| `pnpm build`           | Build all applications                         |
| `pnpm build:web`       | Build only `web`                               |
| `pnpm build:cms`       | Build only `cms`                               |
| `pnpm check-types`     | Type-check all workspaces that define the task |
| `pnpm check-types:web` | Type-check only `web`                          |
| `pnpm check-types:cms` | Type-check only `cms`                          |
| `pnpm lint`            | Lint all workspaces that define the task       |
| `pnpm lint:web`        | Lint only `web`                                |
| `pnpm lint:cms`        | Lint only `cms`                                |
| `pnpm fmt`             | Format the repository with Oxfmt               |
| `pnpm fmt:check`       | Check formatting without changing files        |

Each application also provides a production `start` script; run it in that application's workspace after building it.

## Apps

### web

`apps/web` is the public website. It uses the Next.js App Router, listens on port 3000 in development, and currently contains a minimal landing page. See [`apps/web/README.md`](apps/web/README.md).

### cms

`apps/cms` is the starting point for a project's CMS/admin interface. It listens on port 3030 in development and
includes a local shadcn component setup built on Base UI, with application theme tokens and a `Button` component.
It does not include a CMS backend or content model. See [`apps/cms/README.md`](apps/cms/README.md).

Both apps configure Next.js with `output: 'standalone'` for a minimal self-hosted production bundle.

## Styling

Each application owns its Tailwind CSS setup. Its `postcss.config.ts` enables `@tailwindcss/postcss`, while
`src/app/globals.css` imports Tailwind CSS and `tw-animate-css` and defines the application's theme tokens and base
styles. The CMS stylesheet also imports the shadcn Tailwind layer and exposes light, dark, chart, and sidebar tokens.
Keeping these files inside each app allows the public site and admin interface to evolve independently.

The repository intentionally has no shared UI package. shadcn is a development-time generator in `apps/cms`; its
generated components are committed to `apps/cms/src/components/ui` and imported as ordinary application source.
Tailwind CSS, its PostCSS plugin, `tw-animate-css`, and the shadcn Tailwind layer are resolved while building the app,
so the corresponding packages are declared directly in the consuming application's `devDependencies`.

## Shared Packages

### `@next-press/typescript-config`

Provides `base`, `react`, and `next` TypeScript configurations. Both applications extend `@next-press/typescript-config/next` from their `tsconfig.json`. See [`packages/typescript-config/README.md`](packages/typescript-config/README.md).

### `@next-press/oxlint-config`

Provides `base`, `react`, and `next` Oxlint configurations. Each app extends the `next` configuration in its `oxlint.config.ts`. See [`packages/oxlint-config/README.md`](packages/oxlint-config/README.md).

## Environment Variables

No environment variables are required or read by the current application source. Each app includes an empty, committed `.env.example` and an ignored local `.env` file as a place for project-specific configuration.

When variables are added, keep them in the app that consumes them, document their names in that app's `.env.example`, and never commit secrets. Turborepo treats `.env` and `.env.*` files as build inputs.

## Creating a New Project

After copying or using this repository as a template:

1. Update the root package name and the `@next-press/*` package scope if the project should use its own naming.
2. Replace the placeholder page content and metadata in each app's `src/app` directory.
3. Replace the favicons and other files in each app's `public` directory.
4. Adapt the colors, typography, and other site-specific styles in each app's `src/app/globals.css`.
5. Add required environment variable names to the relevant `.env.example` files as integrations are introduced.

Keep reusable configuration in `packages` and product-specific code in the relevant application.

## Extending the Monorepo

New applications under `apps/*` and packages under `packages/*` are discovered automatically by the pnpm workspace. Give a new workspace a unique package name and only the scripts and dependencies it needs. If it participates in repository-wide `dev`, `build`, `check-types`, or `lint` tasks, use the existing script names so Turborepo can include it.

Create a shared package only when configuration or code is genuinely used by multiple workspaces. Consume internal packages with `workspace:*` and verify shared changes in every dependent app.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the development workflow and repository conventions.
