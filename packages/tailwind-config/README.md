# `@next-press/tailwind-config`

Shared Tailwind CSS 4 setup for applications in this monorepo. The private package owns the Tailwind/PostCSS dependencies and exports:

- `@next-press/tailwind-config/postcss-config` — a PostCSS configuration that enables `@tailwindcss/postcss`.
- `@next-press/tailwind-config/shared-styles` — a CSS entry point that imports `tailwindcss` and `tw-animate-css`.

Both applications re-export the PostCSS configuration from their local `postcss.config.ts`:

```ts
import config from '@next-press/tailwind-config/postcss-config';

export default config;
```

Their `src/app/globals.css` files load the shared CSS before defining app-specific theme values and base styles:

```css
@import '@next-press/tailwind-config/shared-styles';
```

This package provides framework imports, not a complete site theme. Keep branding, design tokens, and styles that differ between sites in the consuming app unless they become genuinely shared.
