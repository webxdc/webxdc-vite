# Webxdc Vite Template

A minimalist Vite project template for Webxdc development.

## Features

- ⚡️ Fast development with [Vite 2](https://github.com/vitejs/vite) and [pnpm](https://pnpm.js.org/)

- 📱 Integrated [Webxdc simulator](https://github.com/webxdc/hello) to test your Webxdc right on the browser while developing,
  and [Eruda](https://github.com/liriliri/eruda) to debug inside Delta Chat.

- 📦 Automatically minify, build and release your `.xdc` file

## Usage

### Installing

After cloning this repo for the first time, install dependecies:

```
pnpm i
```

### Testing

To test your work in real time while developing:

```
pnpm dev
```

**💡 TIP:** To debug inside Delta Chat, uncomment the `script` tag at the end of
`index.html` file and your Webxdc will be packaged with developer tools inside!

### Building

To package your Webxdc file:

```
pnpm build
```

The resulting optimized `.xdc` file is saved in `dist/` folder.

### Releasing

To create a new release with your `.xdc` file:

```
git tag v1.0.1
git push origin v1.0.1
```

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/webxdc/webxdc-vite/generate).
