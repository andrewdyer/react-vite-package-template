# React + Vite Package Template

A template for creating packages using the [React](https://react.dev/) framework and the [Vite](https://vitejs.dev/) build tool, and written in [TypeScript](https://www.typescriptlang.org/).

## Introduction

This template provides a focused foundation for building and publishing reusable React component packages. It is designed to support consistent tooling, reliable builds, and automated releases, so effort goes into the components rather than the setup. Its linting, testing, Storybook and commit conventions match the shared packages in the [React + Vite + Turborepo Template](https://github.com/andrewdyer/react-vite-turborepo-template), so components built here follow the same standards and can move into the monorepo later.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **[Node.js](https://nodejs.org/)**: Version 24.19.0 or later is required (as specified in [.nvmrc](.nvmrc)).
- **[pnpm](https://pnpm.io/)**: Dependency management tool for Node.js, version 10.17.1 (as specified in [package.json](package.json)).
- **[yalc](https://github.com/wclr/yalc)** (optional): For testing the package locally in other projects without publishing it.

## Package

The repository follows a clear structure, keeping components, their tests and stories together alongside the build and tooling configuration.

```plaintext
repo/
├── .github/
│   └── workflows/             # Test, PR title, release and publish workflows
│
├── .husky/                    # Git hooks for lint-staged and commitlint
├── .storybook/                # Storybook configuration
│
├── src/
│   ├── components/            # React components with tests and stories
│   ├── index.ts               # Package entry point
│   └── setupTests.ts          # Vitest setup
│
├── eslint.config.js           # ESLint configuration
├── package.json               # Package manifest and scripts
├── tsconfig.json              # TypeScript project references
└── vite.config.ts             # Library build and Vitest configuration
```

The package is built with Vite and TypeScript, providing reusable components ready to publish and consume in other React projects. Key features include:

- [SWC (Speedy Web Compiler)](https://swc.rs/) for faster builds and development.
- ES module, CommonJS, and UMD builds, with React kept as a peer dependency rather than bundled.
- TypeScript declaration generation with [vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts).
- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, [Vitest UI](https://vitest.dev/guide/ui.html), [jsdom](https://github.com/jsdom/jsdom) environment, and [coverage reports](https://vitest.dev/guide/coverage.html) with enforced thresholds.
- [Storybook](https://storybook.js.org/) for developing and documenting components in isolation, with accessibility checks.
- [ESLint](https://eslint.org/) for linting TypeScript, React and hooks usage, import ordering, and Storybook stories.
- Pre-commit checks with [lint-staged](https://github.com/lint-staged/lint-staged) to maintain code quality.

## Tooling

Essential development tools configured for consistency and automation across the package, including:

- [Husky](https://typicode.github.io/husky) for Git hooks that automate development workflows, including staged file checks and commit message validation.
- [Commitlint](https://commitlint.js.org/) for enforcing a consistent commit message convention on commits and pull request titles.
- [Prettier](https://prettier.io/) for maintaining consistent code formatting.
- [Release Please](https://github.com/googleapis/release-please) for automated versioning and changelogs based on commit messages.
- [GitHub Actions](https://github.com/features/actions) for CI/CD, covering testing and pull request title checks, automated releasing, and publishing the package to [npm](https://www.npmjs.com/) with trusted publishing.

Together, these tools create a fast, reliable, and maintainable developer experience from the first component to the first release.

## Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

## License

This template is licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.
