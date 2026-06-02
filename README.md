# Marcin Lisiak Portfolio

Frontend portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Local Development

```bash
npm install
npm run dev
```

The project also includes `serve.mjs`, which serves the app on `http://localhost:3000` for local preview workflows:

```bash
node serve.mjs
```

## Production Build

```bash
npm run build
npm run preview
```

## Project Thumbnails

Project cards use local screenshots stored in `public/project-thumbs`.
To refresh them, run:

```bash
npm run thumbs
```

If Chrome is not in a standard Windows path, set `CHROME_PATH` to a Chromium-based browser executable.
