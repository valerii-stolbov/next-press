# NextPress: WEB

`web` is the public Next.js application in the NextPress template. It is a minimal App Router site intended to be replaced with project-specific pages, assets, metadata, and styling.

## Development

Run commands from the repository root:

```bash
pnpm dev:web
```

The development server listens at <http://localhost:3000>.

Application-specific checks are available from the root:

```bash
pnpm build:web
pnpm check-types:web
pnpm lint:web
```

To run the production server after a build, target the workspace directly:

```bash
pnpm --filter web start
```

## Shared Configuration

- `tsconfig.json` extends `@next-press/typescript-config/next` and defines `@/*` as an alias for `src/*`.
- `oxlint.config.ts` extends `@next-press/oxlint-config/next`.
- `postcss.config.ts` enables the Tailwind CSS PostCSS plugin.
- `src/app/globals.css` imports Tailwind CSS and `tw-animate-css`, then defines the app's theme and base styles.

Application routes, layouts, metadata, and the global stylesheet live in `src/app`; static assets such as browser
favicons live in `public`.

## Environment Variables

The current source does not require environment variables. Add future variable names to `.env.example`, keep local values in the ignored `.env` file, and do not commit secrets.
