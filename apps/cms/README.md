# NextPress: CMS

`cms` is the Next.js application reserved for a project's CMS/admin interface. The template provides a minimal App
Router page and installable-app metadata; it does not include a CMS backend, authentication, or content model.

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
- `postcss.config.ts` enables the Tailwind CSS PostCSS plugin.
- `src/app/globals.css` imports Tailwind CSS and `tw-animate-css`, then defines the app's theme and base styles.

Application routes, layouts, metadata, and the global stylesheet live in `src/app`; static assets live in `public`.

## App Metadata

`src/app/manifest.ts` exposes the web app manifest and references the Android icons in `public`. The root layout adds
Apple web app settings, a white browser theme color, and favicon metadata. Replace the names, descriptions, colors,
and icon files when adapting the template for a real project.

## Environment Variables

The current source does not require environment variables. Add future variable names to `.env.example`, keep local values in the ignored `.env` file, and do not commit secrets.
