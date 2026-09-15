# NextPress: CMS

`cms` is the Next.js application reserved for a project's CMS/admin interface. The template provides a minimal App
Router page, installable-app metadata, and a local, source-owned shadcn component setup built on Base UI. It does not include
a CMS backend, authentication, or content model.

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
- `src/app/globals.css` imports Tailwind CSS, `tw-animate-css`, and the shadcn Tailwind layer, then defines the app's
  light and dark theme tokens and base styles.

Application routes, layouts, metadata, and the global stylesheet live in `src/app`; reusable UI components live in
`src/components/ui`; shared helpers live in `src/lib`; static assets live in `public`.

Tailwind CSS, `@tailwindcss/postcss`, `tw-animate-css`, and the shadcn CLI are build-time tools and therefore live in
this application's `devDependencies`. The Base UI primitive, variant, class-name, and icon packages used by generated
components are runtime dependencies of the CMS itself.

## UI Components

The shadcn configuration is stored in `components.json`. It uses the `base-nova` style, Base UI primitives, Lucide
icons, CSS variables, and these import aliases:

- `@/components` for application components
- `@/components/ui` for reusable UI primitives
- `@/lib` for shared application code
- `@/lib/utils` for the `cn` class-name helper
- `@/hooks` for reusable hooks

Add a component from the repository root with:

```bash
pnpm --filter cms exec shadcn add <component>
```

For example, the included button can be imported with:

```tsx
import { Button } from '@/components/ui/button';

<Button variant="outline">Save draft</Button>;
```

Generated components are committed application source, so adapt their markup and variants in `src/components/ui`
when the CMS design requires it. Keep shared colors, radii, and dark-mode values in `src/app/globals.css` rather than
duplicating them in individual components. Dark mode is activated by a `.dark` class on an ancestor element.

There is intentionally no shared shadcn package or configuration in the monorepo. If another application needs UI,
keep its custom components and styling in that application unless a real cross-application component contract emerges.

## App Metadata

`src/app/manifest.ts` exposes the web app manifest and references the Android icons in `public`. The root layout adds
Apple web app settings, a white browser theme color, and favicon metadata. Replace the names, descriptions, colors,
and icon files when adapting the template for a real project.

## Environment Variables

The current source does not require environment variables. Add future variable names to `.env.example`, keep local values in the ignored `.env` file, and do not commit secrets.
