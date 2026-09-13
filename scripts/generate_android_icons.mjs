import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC_LOGO = path.resolve('logo.png');
const RES_DIR = path.resolve('android/app/src/main/res');

const DENSITIES = [
  { name: 'mipmap-mdpi', size: 48, fgSize: 108, safeLogo: 78 },
  { name: 'mipmap-hdpi', size: 72, fgSize: 162, safeLogo: 116 },
  { name: 'mipmap-xhdpi', size: 96, fgSize: 216, safeLogo: 154 },
  { name: 'mipmap-xxhdpi', size: 144, fgSize: 324, safeLogo: 232 },
  { name: 'mipmap-xxxhdpi', size: 192, fgSize: 432, safeLogo: 310 }
];

async function generateIcons() {
  console.log('Generating Android icons from', SRC_LOGO);
  
  for (const d of DENSITIES) {
    const dir = path.join(RES_DIR, d.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // 1. ic_launcher_foreground.png (transparent canvas with logo centered in safe zone)
    const resizedForFg = await sharp(SRC_LOGO)
      .resize(d.safeLogo, d.safeLogo, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const fgLeft = Math.round((d.fgSize - d.safeLogo) / 2);
    const fgTop = Math.round((d.fgSize - d.safeLogo) / 2);

    await sharp({
      create: {
        width: d.fgSize,
        height: d.fgSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: resizedForFg, top: fgTop, left: fgLeft }])
      .png()
      .toFile(path.join(dir, 'ic_launcher_foreground.png'));

    // 2. ic_launcher.png (legacy full icon with dark background #121118)
    const logoSizeLegacy = Math.round(d.size * 0.88);
    const resizedForLegacy = await sharp(SRC_LOGO)
      .resize(logoSizeLegacy, logoSizeLegacy, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toBuffer();

    const legLeft = Math.round((d.size - logoSizeLegacy) / 2);
    const legTop = Math.round((d.size - logoSizeLegacy) / 2);

    await sharp({
      create: {
        width: d.size,
        height: d.size,
        channels: 4,
        background: { r: 18, g: 17, b: 24, alpha: 1 }
      }
    })
      .composite([{ input: resizedForLegacy, top: legTop, left: legLeft }])
      .png()
      .toFile(path.join(dir, 'ic_launcher.png'));

    // 3. ic_launcher_round.png (legacy circular icon)
    const radius = d.size / 2;
    const circleSvg = Buffer.from(
      `<svg width="${d.size}" height="${d.size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="#fff"/></svg>`
    );

    const baseRound = await sharp({
      create: {
        width: d.size,
        height: d.size,
        channels: 4,
        background: { r: 18, g: 17, b: 24, alpha: 1 }
      }
    })
      .composite([{ input: resizedForLegacy, top: legTop, left: legLeft }])
      .png()
      .toBuffer();

    await sharp(baseRound)
      .composite([{ input: circleSvg, blend: 'dest-in' }])
      .png()
      .toFile(path.join(dir, 'ic_launcher_round.png'));

    console.log(`✓ ${d.name} icons generated successfully`);
  }

  // Also generate favicon in public/
  await sharp(SRC_LOGO)
    .resize(192, 192, { fit: 'contain' })
    .png()
    .toFile(path.resolve('public/favicon.png'));

  console.log('All icons generated successfully!');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
