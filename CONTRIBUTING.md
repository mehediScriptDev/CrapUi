# Contributing to CrapUI

Thanks for taking the time to contribute! 🎉  
CrapUI is an npm package + CLI that scaffolds a React + Tailwind starter with Context API, React Router, and Lenis smooth scrolling.

## Tech stack
- React
- Tailwind CSS
- Context API
- React Router
- Lenis (smooth scrolling)

## Ways to contribute
- Fix bugs
- Improve the CLI experience (errors, prompts, flags)
- Improve templates (components, routing, structure)
- Improve animations and scrolling behavior
- Improve documentation (README, guides)
- Add tests
- Suggest a clean, simple, and professional project structure that can improve maintainability and scalability

## Before you start
- Please check existing Issues and Pull Requests first.
- If you are unsure what to work on, pick an issue labeled **good first issue**.

## Project setup

### Requirements
- Node.js 18+ (LTS recommended)
- npm (or yarn / pnpm)

### Install dependencies
```bash
npm install
```

## Important: The `templates/` folder is everything

**All user-facing code lives in `templates/basic/`** — this is the project template that gets copied when users run `npx crap-ui my-project`.

If you want to add:
- **New components** → Add to `templates/basic/src/Components/`
- **New utilities** → Add to `templates/basic/src/Components/utility/`
- **Context/state** → Add to `templates/basic/src/context/`
- **Routing changes** → Update `templates/basic/src/router/`
- **Dependencies** → Add to `templates/basic/package.json`

**The root `src/` folder is just for testing/development** — it does NOT get included in the npm package.

Always test your changes by:
1. Making changes in `templates/basic/`
2. Running `npx . test-project` from the repo root
3. Verifying the scaffolded project works

## How to submit a Pull Request

1. Fork the repository and create your branch from `main`.
2. Make your changes and test them locally.
3. Commit your changes with a clear message.
4. Push to your fork and submit a Pull Request.

**When creating a PR:**
- Write a clear, short title (e.g., "Setup redux with ....." or "Add professional component file structure")
- In the description, mention **what you added/changed** — be clear, concise, and smart
- Link related issues (e.g., "Closes #42")
- Keep PRs focused — one feature/fix per PR

**Example PR description:**
```
Added --help flag to CLI
- Shows usage, options, and examples
- Improves first-time user experience
Closes #24
```

We appreciate thoughtful, well-explained contributions!
