#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: crap-ui <project-name>');
  process.exit(1);
}
const name = args[0];
const target = path.resolve(process.cwd(), name);
if (fs.existsSync(target)) {
  console.error('Target directory already exists:', target);
  process.exit(1);
}
const templateDir = path.resolve(__dirname, '..', 'templates', 'basic');

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
console.log('Creating project', name);
copyRecursiveSync(templateDir, target);
console.log('Copied template into', name);

console.log('Running `npm install` in', name, '(this may take a few minutes)...');
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const proc = spawn(npm, ['install'], { cwd: target, stdio: 'inherit', shell: true });
proc.on('close', (code) => {
  if (code === 0) {
    console.log('\nSuccess!');
    console.log('To get started:');
    console.log('  cd', name);
    console.log('  npm run dev');
  } else {
    console.error('`npm install` exited with code', code);
  }
});
