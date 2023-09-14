# WebXDC Vite Template [![CI](https://github.com/webxdc/webxdc-vite/actions/workflows/ci.yml/badge.svg)](https://github.com/webxdc/webxdc-vite/actions/workflows/ci.yml) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A minimalist Vite project template for [WebXDC](https://webxdc.org) development.

## Features

- ⚡️ Fast development with [Vite](https://github.com/vitejs/vite) and [pnpm](https://pnpm.js.org/)

- 📱 Integrated [WebXDC emulator](https://github.com/webxdc/webxdc-dev) to test your WebXDC right on the browser while developing,
  and [Eruda](https://github.com/liriliri/eruda) to debug inside Delta Chat.

- 📝 Code formatting with [Prettier](https://github.com/prettier/prettier)

- 📦 Automatically minify, build and release your `.xdc` file

- 🦕 Automatically support legacy/old browsers

## Usage

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Checking code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm dev-mini
# Alternatively to test in a more advanced WebXDC emulator:
pnpm dev
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```

## Try it now!

[**Create a repo from this template on GitHub**](https://github.com/webxdc/webxdc-vite/generate).
