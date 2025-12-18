#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const assetsRoot = path.join(projectRoot, 'public', 'brand-assets');
const svgDir = path.join(assetsRoot, 'svg');
const pngDir = path.join(assetsRoot, 'png');
const faviconsDir = path.join(assetsRoot, 'favicons');
const svgDensity = 600;

function ensureSharp() {
  try {
    return require('sharp');
  } catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
      throw err;
    }
    console.log('sharp not found, installing sharp@^0.33.5...');
    execSync('npm install sharp@^0.33.5 --save-dev', {
      cwd: projectRoot,
      stdio: 'inherit',
    });
    return require('sharp');
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function renderPng(sharpInstance, inputPath, outputPath, width, height) {
  await sharpInstance(inputPath, { density: svgDensity })
    .resize(width, height, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);
  console.log(`✓ ${path.relative(projectRoot, outputPath)} (${width}x${height})`);
}

async function run() {
  const sharp = ensureSharp();

  ensureDir(pngDir);
  ensureDir(faviconsDir);

  const logoSources = [
    { name: 'processzero-logo-dark', path: path.join(svgDir, 'processzero-logo-dark.svg') },
    { name: 'processzero-logo-light', path: path.join(svgDir, 'processzero-logo-light.svg') },
  ];

  const logoSizes = [
    { suffix: '@1x', width: 160, height: 40 },
    { suffix: '@2x', width: 320, height: 80 },
  ];

  const iconSource = path.join(svgDir, 'processzero-icon.svg');
  const faviconSizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  const jobs = [];

  logoSources.forEach((logo) => {
    logoSizes.forEach((size) => {
      const output = path.join(pngDir, `${logo.name}${size.suffix}.png`);
      jobs.push(renderPng(sharp, logo.path, output, size.width, size.height));
    });
  });

  faviconSizes.forEach((icon) => {
    const output = path.join(faviconsDir, icon.name);
    jobs.push(renderPng(sharp, iconSource, output, icon.size, icon.size));
  });

  await Promise.all(jobs);
  console.log('Asset generation complete.');
}

run().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
