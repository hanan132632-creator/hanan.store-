import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

const svgPath = path.resolve('public/favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
  const sizes = [16, 32, 48, 96, 180, 192];
  const pngBuffers = {};

  for (const size of sizes) {
    const pngBuf = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers[size] = pngBuf;
  }

  // Write PNG files
  fs.writeFileSync('public/favicon-48x48.png', pngBuffers[48]);
  fs.writeFileSync('public/favicon-96x96.png', pngBuffers[96]);
  fs.writeFileSync('public/favicon-192x192.png', pngBuffers[192]);
  fs.writeFileSync('public/apple-touch-icon.png', pngBuffers[180]);

  // Generate multi-resolution ICO (16, 32, 48)
  const icoBuffer = await toIco([pngBuffers[16], pngBuffers[32], pngBuffers[48]]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  console.log('All Google-compliant favicons generated successfully!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
