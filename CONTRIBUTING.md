# Contributing

## Getting Started

The repository requires Node.js 24.20.0 and pnpm 12.4.2, as declared in the root `package.json`.

```bash
git clone <repository-url>
cd <repository-directory>
pnpm install
pnpm dev
```

`pnpm dev` starts `web` at <http://localhost:3000> and `cms` at <http://localhost:3030>. Use `pnpm dev:web` or `pnpm dev:cms` when working on only one app.

## Repository Structure

- `apps/web` contains the public Next.js application.
- `apps/cms` contains the CMS/admin Next.js application.
- `packages/*` contains shared Oxlint and TypeScript configuration.

All directories immediately below `apps` and `packages` are pnpm workspaces. Turborepo coordinates common tasks across them.

## Development Workflow

1. Install dependencies with `pnpm install`.
2. Make the change in the smallest relevant app or package.
3. Run `pnpm fmt:check`, `pnpm lint`, and `pnpm check-types`. The `:web` and `:cms` variants can provide a faster app-specific feedback loop.
4. Run `pnpm build`, or the relevant `pnpm build:web` / `pnpm build:cms` command, when the change can affect the production build.

Use `pnpm fmt` to apply repository formatting.

There is currently no automated test task. Do not document or depend on one unless test tooling is added to the workspace.

## Code Quality

- **Oxlint** enforces the shared rules exported by `@next-press/oxlint-config`. Run it with `pnpm lint`.
- **TypeScript** uses strict shared settings from `@next-press/typescript-config`. Run `pnpm check-types`; each app generates Next.js route types before invoking `tsc --noEmit`.
- **Oxfmt** formats the repository and provides app-level import and Tailwind class sorting. Use `pnpm fmt` to write changes or `pnpm fmt:check` to verify them.
- **Next.js builds** provide the final production compilation check through `pnpm build`.

## Working with Apps

Public-site code belongs in `apps/web`; CMS/admin code belongs in `apps/cms`. Put routes and layouts in the app's `src/app` directory and static assets in its `public` directory.

Tailwind CSS and PostCSS are configured per application. Keep theme tokens and application-specific base styles in
that app's `src/app/globals.css` rather than extracting them prematurely.

CMS UI components are source-owned by `apps/cms`. Generate them with the shadcn CLI and commit the resulting files to
`apps/cms/src/components/ui`; do not introduce a shared component package until another workspace genuinely consumes
the same maintained component implementation.

Add app-specific dependencies to the app that uses them rather than to the repository root. Workspace-targeted commands can be run with pnpm's filter syntax, for example:

```bash
pnpm --filter web add <package>
pnpm --filter cms add -D <package>
```

## Working with Shared Packages

Create or extend a shared package only for configuration or code that is actually needed by more than one workspace. Avoid extracting app-specific code in anticipation of reuse.

Internal packages use the `@next-press/*` scope and are referenced with `workspace:*`. When changing shared configuration, run the relevant checks for every application that consumes it.

## Dependencies

- Use pnpm, the package manager declared by the project.
- Add each dependency to the smallest workspace that needs it.
- Keep application-only dependencies out of the root package unless a root-level tool requires them.
- Use `devDependencies` for build, lint, formatting, and type tooling that is not needed at runtime.
- Declare CSS build dependencies such as Tailwind CSS, its PostCSS plugin, and imported CSS packages in the app whose
  stylesheet references them, even when they are only needed during development and production builds.
- Keep versions aligned through the existing `catalog:` entries in `pnpm-workspace.yaml` when a dependency is intentionally shared across workspaces.

## Adding a New App

1. Create the app under `apps/<name>` with a unique `name` in its `package.json`.
2. Add only its required runtime and development dependencies. Reference internal configuration packages with `workspace:*` where applicable.
3. Define the standard `dev`, `build`, `check-types`, and `lint` scripts that the app supports. Turborepo will include matching scripts in repository-wide tasks automatically.
4. Add app-specific configuration, source files, static assets, and an `.env.example` if the app requires environment variables.
5. Run the repository-wide lint, type-check, formatting, and build commands to verify the new workspace and its shared-package integration.
