# NextPress: CMS

`cms` is the Next.js application reserved for a project's CMS/admin interface. The template currently provides a minimal App Router page only; it does not include a CMS backend, authentication, or content model.

## Development

Run commands from the repository root:

```bash
pnpm dev:cms
```

The development server listens at <http://localhost:3030>.

Application-specific checks are available from the root:

```bash
pnpm build:cms
pnpm check-types:cms
pnpm lint:cms
```

To run the production server after a build, target the workspace directly:

```bash
pnpm --filter cms start
```

## Shared Configuration

- `tsconfig.json` extends `@next-press/typescript-config/next` and defines `@/*` as an alias for `src/*`.
- `oxlint.config.ts` extends `@next-press/oxlint-config/next`.
- `postcss.config.ts` uses `@next-press/tailwind-config/postcss-config`.
- `src/app/globals.css` imports `@next-press/tailwind-config/shared-styles` before app-specific theme and base styles.

Application routes and layouts live in `src/app`; static assets live in `public`.

## Environment Variables

The current source does not require environment variables. Add future variable names to `.env.example`, keep local values in the ignored `.env` file, and do not commit secrets.
