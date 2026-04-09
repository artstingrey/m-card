# m-card

## Project Overview

**m-card** is a [Next.js 16](https://nextjs.org) web application bootstrapped with `create-next-app`. It uses the **App Router** architecture with React 19 and TypeScript. The project appears to be a landing page or marketing site, featuring components such as a Hero section, a "How It Works" section, and a running/marquee line component.

### Key Technologies

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.2.1 |
| UI Library | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | SCSS/SASS (with `node-sass` and `sass`), CSS Modules |
| Package Manager | pnpm |
| Linting | ESLint 9 (with `eslint-config-next`) |
| Font Loading | `next/font/local` (Inter, Bion — local font files) |
| Utilities | `clsx` for conditional className composition |

### Project Structure

```
m-card/
├── app/                      # Next.js App Router directory
│   ├── components/           # UI components
│   │   ├── core/             # Core/reusable components (e.g., Header)
│   │   ├── hero/             # Hero section component
│   │   ├── howItWork/        # "How it works" section component
│   │   └── runningLine/      # Marquee/running line component
│   ├── config/               # Configuration files (constants, menu configs, types)
│   ├── hooks/                # Custom React hooks
│   ├── stores/               # State stores (currently empty)
│   ├── styles/               # Global SCSS/CSS styles
│   ├── utils/                # Utility functions
│   ├── fonts.ts              # Local font definitions (Inter, Bion)
│   ├── globals.css           # Global styles entry
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page component
├── public/                   # Static assets
│   ├── fonts/                # Local font files (Inter, Bion)
│   ├── images/               # Image assets
│   └── svg/                  # SVG assets
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint configuration (flat config)
└── package.json              # Project dependencies and scripts
```

## Building and Running

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended, based on `@types/node` version)
- [pnpm](https://pnpm.io/) package manager

### Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the development server (uses webpack) |
| `pnpm build` | Build the production bundle |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |

### Development Workflow

1. Run `pnpm dev` to start the development server.
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Edit `app/page.tsx` or any component — changes will hot-reload automatically.

## Development Conventions

### TypeScript

- Strict mode is enabled (`"strict": true`).
- Path alias `@/*` maps to the project root, enabling imports like `@/app/styles/global.scss`.
- Module resolution uses `bundler` mode.

### Styling

- **Global styles**: Defined in `app/globals.css` and imported SCSS files.
- **CSS Modules**: Component-level styles use `.module.css` files (e.g., `page.module.css`).
- **SCSS/SASS**: The project supports SCSS files via `sass` and `node-sass` dependencies.
- **Utility**: `clsx` is used for conditional className composition.

### Fonts

Custom local fonts are used via `next/font/local`:
- **Inter**: Weights 500 (Medium), 600 (SemiBold)
- **Bion**: Weights 300 (BookCond), 700 (BoldCond)

Font variables are exposed as `--font-inter` and `--font-bion` CSS custom properties.

### Linting

ESLint uses the flat config format (`eslint.config.mjs`) with:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

### Image Optimization

Next.js image optimization is configured to output `image/avif` and `image/webp` formats with quality levels of 75 and 100.

## Important Notes

- **Next.js 16 has breaking changes** — APIs, conventions, and file structure may differ from earlier versions. Always consult the relevant documentation in `node_modules/next/dist/docs/` before writing code.
- The project uses **pnpm** as the package manager (evidenced by `pnpm-lock.yaml` and `pnpm-workspace.yaml`).
- Some native dependencies (`sharp`, `unrs-resolver`) are ignored in pnpm workspace builds.
