# `@next-press/typescript-config`

Shared TypeScript compiler settings for workspaces in this monorepo. The package is private and exposes three configurations:

- `@next-press/typescript-config/base` — strict, environment-neutral TypeScript defaults targeting ES2023.
- `@next-press/typescript-config/react` — the base settings plus DOM libraries and React JSX support.
- `@next-press/typescript-config/next` — the React settings plus the Next.js compiler plugin, JavaScript input support, preserved JSX, and incremental compilation.

Both `apps/web` and `apps/cms` use the `next` configuration. A Next.js app connects it in `tsconfig.json` like this:

```json
{
  "extends": "@next-press/typescript-config/next",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Use `base` for non-React TypeScript workspaces and `react` for React projects that do not need Next.js settings. The consuming workspace must provide TypeScript 6, as declared by this package's peer dependency.

This package contains compiler configuration only. Each application owns its path aliases, generated framework types,
and TypeScript development dependency.
