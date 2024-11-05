const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  favicon: [16, 32, 48],
  apple: [180],
  android: [192, 512]
};

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  // Read the SVG file
  const svg = await fs.readFile(inputSvg);

  // Generate ICO (favicon.ico)
  const icoBuffers = await Promise.all(
    sizes.favicon.map(size => 
      sharp(svg)
        .resize(size, size)
        .toFormat('png')
        .toBuffer()
    )
  );
  
  await sharp(icoBuffers[0])
    .toFile(path.join(publicDir, 'favicon.ico'));

  // Generate Apple Touch Icon
  await sharp(svg)
    .resize(180, 180)
    .toFormat('png')
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate Android icons
  await Promise.all(
    sizes.android.map(size =>
      sharp(svg)
        .resize(size, size)
        .toFormat('png')
        .toFile(path.join(publicDir, `logo${size}.png`))
    )
  );
}

generateFavicons().catch(console.error);