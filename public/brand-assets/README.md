# Process Zero Brand Assets

This directory stores the Process Zero logo system in both vector and raster formats for product and marketing surfaces.

## Source of truth
- All master artwork lives in `public/brand-assets/svg/`. Update these files first; every PNG must be regenerated from them.

## Generation pipeline
- PNG logos and favicons are rendered from the SVGs with `sharp` via `scripts/generate-assets.js`. The script uses a transparent background and high-density rasterisation to preserve crisp edges.

## How to regenerate
- From the project root run: `node scripts/generate-assets.js`
- The script installs `sharp` automatically if it is not already available and overwrites existing outputs in `public/brand-assets/png/` and `public/brand-assets/favicons/`.

## Recommended usage
- Logos:
  Use `processzero-logo-dark` on light or neutral backgrounds.
  Use `processzero-logo-light` on dark or saturated backgrounds.
  `@1x` is for standard displays (160×40); `@2x` is for retina/high-DPI contexts (320×80).
- Favicons:
  `favicon-16x16.png` and `favicon-32x32.png` for browser tabs and shortcuts.
  `apple-touch-icon.png` (180×180) for iOS home screen icons.
  `android-chrome-192x192.png` and `android-chrome-512x512.png` for Android/Chrome shortcuts and PWA manifests.

## Notes
- Do not edit the generated PNGs directly; always update the SVG sources and regenerate.
- If an SVG changes, rerun the generation command so all raster assets stay in sync.
