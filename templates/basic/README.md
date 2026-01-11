
<p align="center">
	<img src="public/crapui.jpg" alt="CrapUI logo" width="240" />
</p>

# CrapUI

A small React component library designed for fast prototyping and sensible defaults. This repository contains a minimal example app and the base setup used while developing CrapUI.

## Technologies & versions used

**Runtime**
- React: 19.2.0
- React DOM: 19.2.0

**Build / Dev**
- Vite: 7.2.4
- @vitejs/plugin-react: 5.1.1

**Styling**
- Tailwind CSS: 4.1.18
- @tailwindcss/vite: 4.1.18

**Icons / Utilities**
- react-icons: 5.5.0
- lucide: 0.562.0
- react-router: 7.12.0

**Lint / Dev tooling**
- ESLint: 9.39.1
- @eslint/js: 9.39.1

> These versions are taken from the project's `package.json` at the time of editing.

## Getting started

> Prerequisites: Node.js (recommended v18+), npm

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Project structure (highlight)

- `src/` — React source files (components, pages, context)
- `public/` — static assets (logo used above: `public/crapui.jpg`)
- `index.html`, `vite.config.js` — Vite entry and config

## Example usage

Open `src/App.jsx` to see a clean example of how the library's components are composed in a landing page.

## Contributing

Contributions are welcome. Open an issue to discuss changes or submit a pull request. Keep changes small and focused; include basic tests or a short demo page when adding new components.

---

_Made with a pinch of sarcasm — CrapUI_
