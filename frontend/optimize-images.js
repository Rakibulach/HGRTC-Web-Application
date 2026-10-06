import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Ei duita folder-er shob image process hobe — maxWidth mane oi width-er beshi
// hole choto kore debe (karon website-e eto boro dekhanor dorkar hoyна)
const TARGETS = [
  { dir: 'src/assets/images', maxWidth: 1600 },
  { dir: 'public/images', maxWidth: 900 },
];

const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

function walk(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walk(full));
    } else if (EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      results.push(full);
    }
  }
  return results;
}

async function optimize() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const { dir, maxWidth } of TARGETS) {
    if (!fs.existsSync(dir)) continue;
    const files = walk(dir);

    for (const file of files) {
      const before = fs.statSync(file).size;
      const ext = path.extname(file).toLowerCase();
      const image = sharp(fs.readFileSync(file));
      const metadata = await image.metadata();

      let pipeline = image;
      if (metadata.width && metadata.width > maxWidth) {
        pipeline = pipeline.resize({ width: maxWidth });
      }

      const outputBuffer = ext === '.png'
        ? await pipeline.png({ quality: 75, compressionLevel: 9 }).toBuffer()
        : await pipeline.jpeg({ quality: 75, mozjpeg: true }).toBuffer();

      fs.writeFileSync(file, outputBuffer);
      totalBefore += before;
      totalAfter += fs.statSync(file).size;

      console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(fs.statSync(file).size / 1024).toFixed(0)}KB`);
    }
  }

  console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
}

optimize();