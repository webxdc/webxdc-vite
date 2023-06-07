# WebXDC Vite Template

A minimalist Vite project template for WebXDC development.

## Features

- ⚡️ Fast development with [Vite](https://github.com/vitejs/vite) and [pnpm](https://pnpm.js.org/)

- 📱 Integrated [WebXDC emulator](https://github.com/webxdc/webxdc-dev) to test your WebXDC right on the browser while developing,
  and [Eruda](https://github.com/liriliri/eruda) to debug inside Delta Chat.

- 📦 Automatically minify, build and release your `.xdc` file

## Usage

### Installing Dependencies

After cloning this repo for the first time, install dependecies:

```
pnpm i
```

### Testing

To test your work while developing:

```
pnpm dev
```

**💡 TIP:** To debug inside Delta Chat, uncomment the `script` tag at the end of
`index.html` file and your WebXDC will be packaged with developer tools inside!

### Building

To package your WebXDC file:

```
pnpm build
```

The resulting optimized `.xdc` file is saved in `dist/` folder.

### Releasing

To automatically build and create a new GitHub release with your `.xdc` file:

```
git tag v1.0.1
git push origin v1.0.1
```

## Try it now!

[**Create a repo from this template on GitHub**](https://github.com/webxdc/webxdc-vite/generate).
