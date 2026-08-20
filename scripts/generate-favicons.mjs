import sharp from "sharp";
import fs from "fs";
import path from "path";

async function generateAllFavicons() {
  const sourceBuffer = fs.readFileSync("public/icon-512.png");

  // Generate PNG sizes
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "favicon-96x96.png", size: 96 },
    { name: "icon-192.png", size: 192 },
    { name: "icon-512.png", size: 512 },
    { name: "apple-touch-icon.png", size: 180 },
  ];

  for (const item of sizes) {
    const outPath = path.join("public", item.name);
    const buf = await sharp(sourceBuffer)
      .resize(item.size, item.size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();
    fs.writeFileSync(outPath, buf);
    console.log(`Generated: ${outPath} (${item.size}x${item.size})`);
  }

  // Generate multi-resolution favicon.ico (16, 32, 48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of icoSizes) {
    const buf = await sharp(sourceBuffer)
      .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 100, compressionLevel: 9 })
      .toBuffer();
    pngBuffers.push({ size: s, buffer: buf });
  }

  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO format
  header.writeUInt16LE(numImages, 4); // Number of images

  const headerSize = 6 + numImages * 16;
  let currentOffset = headerSize;
  const entries = [];

  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // Width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2); // Colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Size of image data
    entry.writeUInt32LE(currentOffset, 12); // Offset
    entries.push(entry);
    currentOffset += buffer.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.buffer)]);
  fs.writeFileSync("public/favicon.ico", icoBuffer);
  console.log(`Generated: public/favicon.ico (Multi-size 16x16, 32x32, 48x48, size: ${icoBuffer.length} bytes)`);
}

generateAllFavicons().catch((err) => {
  console.error(err);
  process.exit(1);
});
