# AGENTS.md

## Scope

- These instructions apply to the entire `next-press` repository.
- Read the nearest nested `AGENTS.md` before changing files in a workspace; its instructions add to these rules.
- Read the relevant workspace README before changing its behavior or structure.
- If a relevant `CONTEXT.md` is added later, read it before changing domain behavior. Do not infer missing domain rules.

## Repository

- This is a pnpm workspace coordinated by Turborepo. Use the Node.js and pnpm versions declared in `package.json`.
- `apps/web` is the public Next.js application; `apps/cms` is the separate CMS/admin application.
- `packages/oxlint-config` and `packages/typescript-config` are shared technical configuration packages. They do not own application or domain logic.
- Keep product-specific code, assets, configuration, and dependencies in the application that owns them.

## Workspace Changes

- Make changes in the smallest relevant workspace and preserve unrelated workspaces and existing user changes.
- Create shared packages only for code or configuration that is already required by multiple workspaces. Do not extract anticipated reuse.
- Consume internal packages through the existing `@next-press/*` scope and `workspace:*` protocol.
- Keep the public application independent from CMS-only UI and configuration unless an explicit shared contract is introduced.

## Dependencies

- Use pnpm; do not introduce another package manager or lockfile.
- Add dependencies to the workspace that imports or builds them. Keep only repository-level tooling in the root package.
- Use `catalog:` for dependencies intentionally versioned across workspaces and update `pnpm-lock.yaml` with manifest changes.
- Put runtime imports in `dependencies`; use `devDependencies` for build, type, lint, formatting, generation, and CSS processing tools.

## Validation

- Prefer the targeted `:web` or `:cms` scripts while iterating.
- Before handoff, run the relevant subset of `pnpm fmt:check`, `pnpm lint`, and `pnpm check-types`.
- Run `pnpm build` or the relevant app build when a change can affect production compilation.
- There is no automated test task. Do not claim test coverage or add undocumented test commands.

## Documentation and Environment

- Keep README files aligned with scripts, dependencies, workspace ownership, and supported versions.
- Document new environment variable names in the owning app's `.env.example`; never commit secrets or local values.
