# NextPress

NextPress is a reusable monorepo template for building websites. It keeps a public Next.js application, a separate CMS/admin Next.js application, and the configuration they share in one pnpm workspace.

Both applications are intentionally minimal starting points. The `cms` app does not include a CMS product or content model yet; it is a base admin application to extend for a specific project.

## Structure

```text
apps/
  web/                    Public website
  cms/                    CMS/admin application
packages/
  oxlint-config/          Shared Oxlint rules
  tailwind-config/        Shared Tailwind CSS and PostCSS setup
  typescript-config/      Shared TypeScript configurations
```

The workspace is defined by `pnpm-workspace.yaml`. Turborepo runs the application tasks declared in `turbo.json`; configuration packages are consumed directly through pnpm's `workspace:*` protocol.

## Tech Stack

- Next.js 16 and React 19
- TypeScript 6
- Tailwind CSS 4 with `tw-animate-css`
- Oxlint and Oxfmt
- Turborepo 2
- pnpm workspaces

## Requirements

- Node.js 24.20.0
- pnpm 12.3.4

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

| Command                | Purpose                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `pnpm dev`             | Start all development servers                                 |
| `pnpm dev:web`         | Start only `web`                                              |
| `pnpm dev:cms`         | Start only `cms`                                              |
| `pnpm build`           | Build all applications                                        |
| `pnpm build:web`       | Build only `web`                                              |
| `pnpm build:cms`       | Build only `cms`                                              |
| `pnpm check-types`     | Type-check all workspaces that define the task                |
| `pnpm check-types:web` | Type-check only `web`                                         |
| `pnpm check-types:cms` | Type-check only `cms`                                         |
| `pnpm lint`            | Lint all workspaces that define the task                      |
| `pnpm lint:web`        | Lint only `web`                                               |
| `pnpm lint:cms`        | Lint only `cms`                                               |
| `pnpm fmt`             | Format the repository with Oxfmt                              |
| `pnpm fmt:check`       | Check formatting without changing files                       |
| `pnpm clean`           | Remove generated application build and TypeScript cache files |

Each application also provides a production `start` script; run it in that application's workspace after building it.

## Apps

### web

`apps/web` is the public website. It uses the Next.js App Router, listens on port 3000 in development, and currently contains a minimal landing page. See [`apps/web/README.md`](apps/web/README.md).

### cms

`apps/cms` is the starting point for a project's CMS/admin interface. It uses the same base stack as `web`, listens on port 3030 in development, and currently contains only a minimal placeholder page. See [`apps/cms/README.md`](apps/cms/README.md).

Both apps configure Next.js with `output: 'standalone'` for a minimal self-hosted production bundle.

## Shared Packages

### `@next-press/typescript-config`

Provides `base`, `react`, and `next` TypeScript configurations. Both applications extend `@next-press/typescript-config/next` from their `tsconfig.json`. See [`packages/typescript-config/README.md`](packages/typescript-config/README.md).

### `@next-press/tailwind-config`

Exports the shared PostCSS configuration and a CSS entry point that imports Tailwind CSS and `tw-animate-css`. Each app re-exports the PostCSS config from its own `postcss.config.ts` and imports the shared styles from `src/app/globals.css`. See [`packages/tailwind-config/README.md`](packages/tailwind-config/README.md).

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
4. Adapt the colors, typography, and other site-specific styles in each app's `globals.css`.
5. Add required environment variable names to the relevant `.env.example` files as integrations are introduced.

Keep reusable configuration in `packages` and product-specific code in the relevant application.

## Extending the Monorepo

New applications under `apps/*` and packages under `packages/*` are discovered automatically by the pnpm workspace. Give a new workspace a unique package name and only the scripts and dependencies it needs. If it participates in repository-wide `dev`, `build`, `check-types`, `lint`, or `clean` tasks, use the existing script names so Turborepo can include it.

Create a shared package only when configuration or code is genuinely used by multiple workspaces. Consume internal packages with `workspace:*` and verify shared changes in every dependent app.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the development workflow and repository conventions.
