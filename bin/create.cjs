#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");
const inquirer = require("inquirer");

const args = process.argv.slice(2);

async function main() {
  if (args.length === 0) {
    console.log("Usage: crap-ui <project-name>");
    process.exit(1);
  }

  const name = args[0];
  const target = path.resolve(process.cwd(), name);

  if (fs.existsSync(target)) {
    console.error("Target directory already exists:", target);
    process.exit(1);
  }

  const templateDir = path.resolve(__dirname, "..", "templates", "basic");

  function copyRecursiveSync(src, dest) {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const ent of entries) {
      const srcPath = path.join(src, ent.name);
      const destPath = path.join(dest, ent.name);

      if (ent.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyRecursiveSync(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  fs.mkdirSync(target, { recursive: true });
  console.log("Creating project:", name);
  copyRecursiveSync(templateDir, target);
  console.log("Template copied successfully.");

  console.log("\nTailwind CSS is already configured and will be installed automatically.");
  console.log("React Router will also be installed by default.\n");

  // Ask for optional packages
  const answers = await inquirer.prompt([
    {
      type: "confirm",
      name: "lenis",
      message: "Do you want Lenis for smooth scroll?",
      default: true
    },
    {
      type: "confirm",
      name: "reactIcons",
      message: "Do you want React Icons?",
      default: true
    },
    {
      type: "confirm",
      name: "lucideIcons",
      message: "Do you want Lucide?",
      default: false
    },
    {
      type: "confirm",
      name: "motion",
      message: "Do you want Motion (for animations)?",
      default: true
    },
    
  ]);

  console.log(`\nRunning npm install inside ${name} ...`);
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  const proc = spawn(npm, ["install"], {
    cwd: target,
    stdio: "inherit",
    shell: true
  });

  proc.on("close", (code) => {
    if (code !== 0) {
      console.error("npm install failed with code", code);
      process.exit(code);
    }

    console.log("\nInstalling required and optional packages...\n");

    const install = (pkg, label) => {
      try {
        console.log("Installing:", label);
        execSync(`${npm} install ${pkg}`, {
          cwd: target,
          stdio: "inherit",
          shell: true
        });
      } catch (err) {
        console.error(`Failed to install ${label}:`, err.message);
      }
    };

    // Always install React Router
    install("react-router", "React Router");

    // Optional installs
    if (answers.reactIcons) install("react-icons", "React Icons");
    if (answers.lucideIcons) install("lucide-react", "Lucide");
    if (answers.motion) install("motion", "Motion");
    if (answers.lenis) install("lenis", "Lenis");

    console.log("\nProject setup complete.");
    console.log("To get started:");
    console.log("  cd", name);
    console.log("  npm run dev\n");
  });
}

main();
