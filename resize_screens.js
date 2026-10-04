const sharp = require('sharp');
const fs = require('fs');

async function processScreens() {
  for (let i = 1; i <= 4; i++) {
    const input = `./public/elite_screen_${i}.jpg`;
    const outJpg = `./public/elite_screen_${i}_1080x1920.jpg`;
    const outPng = `./public/elite_screen_${i}_1080x1920.png`;

    await sharp(input)
      .resize(1080, 1920, { fit: 'fill' })
      .toColorspace('srgb')
      .jpeg({ quality: 92, progressive: false, chromaSubsampling: '4:2:0' })
      .toFile(outJpg);

    await sharp(input)
      .resize(1080, 1920, { fit: 'fill' })
      .toColorspace('srgb')
      .png({ palette: false, quality: 100 })
      .toFile(outPng);

    // Overwrite default files with 1080x1920
    fs.copyFileSync(outJpg, `./public/elite_screen_${i}.jpg`);

    console.log(`Processed screen ${i} to exact 1080x1920 JPG & PNG`);
  }
}

processScreens().catch(console.error);
