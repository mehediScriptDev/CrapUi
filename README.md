# CrapUi

A small, lightweight collection of React UI building blocks and a Vite starter template for quickly prototyping interfaces.

## Quick Start

Create a new project with one command:

```bash
npx crap-ui my-app
cd my-app
npm run dev
```

That's it! Your Vite + React + Tailwind project is ready.

## Manual Installation

- **Prerequisites**: Node.js `>=16` and `npm` (or `pnpm` / `yarn`).
- **Clone the repository**:

```bash
git clone https://github.com/mehediScriptDev/CrapUi.git
cd CrapUi
```

- **Install dependencies**:

```bash
npm install
# or: pnpm install
```

**Project Setup**

- **Run the development server**:

```bash
npm run dev
# opens local dev server (Vite)
```

- **Build for production**:

```bash
npm run build
```

- **Preview the production build locally**:

```bash
npm run preview
```

- **Quick-start from the template**: the `templates/basic` folder contains a ready-to-use Vite + React setup. To create a new project from the template:

```bash
cp -R templates/basic my-new-project
cd my-new-project
npm install
npm run dev
```

- **Key paths**:
  - `src/` — application source files
  - `src/Components/` — example UI components (buttons, layout helpers, etc.)
  - `templates/basic/` — standalone starter template you can copy or adapt

**Benefits**

- **Fast development**: Vite-based setup gives near-instant hot reload and minimal setup time.
- **Ready examples**: example components live in `src/Components` so you can reuse or extend them.
- **Template-driven**: `templates/basic` is a drop-in starter for new projects — copy and go.
- **Small and flexible**: minimal opinionated glue so you can add your preferred styling system easily.

If you want, I can add a short example showing how to import and use a component from `src/Components` in `src/App.jsx`.
# CrapUi
A small collection of React + Tailwind components I build daily...simple and reusable.
<img src="crapui.jpg"/>