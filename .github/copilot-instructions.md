# GitHub Copilot Instructions for TechXWeb

## Project Overview
TechXWeb is a modern React-based web application built with TypeScript, Vite, and Tailwind CSS.

## Technology Stack

### Core Technologies
- **React 19.1** - UI framework
- **TypeScript 5.8** - Type-safe development
- **Vite 7.x** - Build tool and dev server
- **React Router DOM 7.8** - Client-side routing

### Styling & UI
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Framer Motion 12.x** - Animation library
- **Lucide React** - Icon library

### 3D & Graphics
- **Three.js 0.167** - 3D graphics library
- **@react-three/fiber 9.x** - React renderer for Three.js
- **OGL 1.x** - WebGL library

### Code Quality
- **Biome 2.2** - Linter and formatter (NO ESLint or Prettier)
- **TypeScript strict mode** - Enabled with strict type checking

## Coding Guidelines

### TypeScript
- Always use TypeScript for all files (`.tsx` for components, `.ts` for utilities)
- Enable strict mode - no implicit `any` types
- Properly type all function parameters and return values
- Use `type` imports when importing types: `import type { SomeType } from '...'`
- Use proper React types: `MouseEvent<HTMLElement>`, `useRef<HTMLElement>(null)`, etc.

### React Best Practices
- Use functional components with hooks
- Prefer named exports for components
- Use proper TypeScript types for props and state
- Type event handlers correctly (e.g., `MouseEvent<HTMLElement>`)
- Type refs with proper HTML element types

### Styling
- **Tailwind CSS 4.x** - Use utility classes
- NO `@tailwind base/components/utilities` directives (deprecated in v4)
- Use `@import "tailwindcss"` in CSS files
- Follow mobile-first responsive design
- Use CSS custom properties for theming when needed

### Code Formatting (Biome)
- **Indentation**: 2 spaces
- **Line width**: 100 characters
- **Semicolons**: as needed (ASI-compatible)
- **Trailing commas**: ES5 style
- **Never mention ESLint** - this project uses Biome exclusively

### File Structure
```
website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── assets/         # Static assets
│   └── main.tsx        # Entry point
├── public/             # Public static files
└── package.json
```

### Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Check code with Biome
- `pnpm lint:fix` - Auto-fix issues with Biome
- `pnpm format` - Format code with Biome

## Monorepo Structure
- Root level contains workspace configuration
- `website/` package contains the actual application
- Use `pnpm --filter website <command>` from root to run package-specific commands

## Important Notes
- ❌ **NO ESLint** - Do not add ESLint config or dependencies
- ❌ **NO Prettier** - Biome handles formatting
- ✅ **Use Biome** for all linting and formatting
- ✅ **Tailwind CSS v4** syntax (no old `@tailwind` directives)
- ✅ **TypeScript strict mode** - Always type properly
- ✅ **React 19** - Use latest React patterns and hooks

## When Making Changes
1. Run `pnpm format` before committing
2. Ensure TypeScript has no errors (`tsc` check is in build)
3. Test in development mode with `pnpm dev`
4. Keep dependencies up to date within their major versions
