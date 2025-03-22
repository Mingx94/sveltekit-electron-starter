# SvelteKit + Electron Starter

A modern desktop application starter template combining SvelteKit and Electron.

## Features

- [Electron](https://www.electronjs.org/)
- [Electron vite](https://electron-vite.org/)
- [SvelteKit](https://svelte.dev/docs/kit/introduction)
- [TailwindCSS v4](https://tailwindcss.com/)

### Testing and code quality

- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
# For macos
npm run build:mac

# For windows
npm run build:win

# For linux
npm run build:linux
```

### Testing

```bash
# Run vitest tests
npm run test
```

### File protocol

For loading files use the custom `fs://` protocol. The default electron files protocol doesn't work with sveltekit.

```html
<!-- Example -->
<img src="fs:///Users/user/Downloads/image.jpeg" alt="" />
```

## Project Structure

```shell
project
├── resources                   # Application resources
├── src                         #
│   ├── main                    # Main scripts
│   ├── preload                 # Preload scripts
│   ├── renderer                # SvelteKit (renderer) folder
│   │   ├── lib                 # Lib folder for SvelteKit
│   │   └── routes              # Routes
│   └── shared                  # Shared files between main, preload and renderer
├── static                      # Static assets for SvelteKit
├── electron.vite.config.ts
├── eslint.config.mjs
├── package.json
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
└── vitest-setup-client.ts
```
