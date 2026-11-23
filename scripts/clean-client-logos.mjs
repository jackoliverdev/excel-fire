/**
 * Builds background-free, single-colour client logos for the logo strips.
 *
 *   node scripts/clean-client-logos.mjs
 *
 * Reads every logo in public/Excel/Clients and writes a transparent copy to public/Excel/Clients/mono/.
 * The originals are never touched, so switching back is just CLIENT_LOGO_STYLE = "original" in src/lib/projects.ts.
 *
 * Each output is black "ink" with an alpha mask, trimmed to the artwork, so CSS can show it dark in light mode
 * and invert it to white in dark mode. Three cases:
 *  - White background: ink strength = how far each pixel is from white (keeps anti-aliasing and light tints).
 *  - Solid coloured box with white lettering (NHS, Ventol): the box is removed and the white lettering becomes the ink.
 *  - Already transparent: the existing alpha is kept as the ink.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/Excel/Clients";
const OUT = path.join(SRC, "mono");

/** Logos whose artwork is white lettering knocked out of a solid box. */
const KNOCKOUT = new Set(["nhs.png.webp", "nhs-england.webp", "ventol.jpg.webp"]);

fs.mkdirSync(OUT, { recursive: true });

const lum = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

for (const file of fs.readdirSync(SRC).filter((name) => name.endsWith(".webp")).sort()) {
  const input = path.join(SRC, file);
  // Knockout logos are low-res JPEGs: a light blur before keying smooths their jagged edges.
  const source = KNOCKOUT.has(file) ? sharp(input).blur(0.6) : sharp(input);
  const { data, info } = await source.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const out = Buffer.alloc(width * height * 4);

  // Box colour for knockout logos: the most common colour well inside the artwork.
  let box = null;
  if (KNOCKOUT.has(file)) {
    const counts = new Map();
    for (let y = Math.floor(height * 0.15); y < height * 0.85; y += 2) {
      for (let x = Math.floor(width * 0.05); x < width * 0.95; x += 2) {
        const k = (y * width + x) * 4;
        const key = [data[k] >> 3, data[k + 1] >> 3, data[k + 2] >> 3].join(",");
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    const [top] = [...counts.entries()].sort((a, b) => b[1] - a[1]);
    box = top[0].split(",").map((v) => Number(v) * 8 + 4);
  }

  const hasAlpha = (await sharp(input).metadata()).hasAlpha;

  for (let i = 0; i < width * height; i++) {
    const k = i * 4;
    const [r, g, b, a] = [data[k], data[k + 1], data[k + 2], data[k + 3]];
    let ink;
    if (box) {
      // White lettering on a coloured box: ink rises from the box colour up to white.
      const boxLum = lum(...box);
      const t = (lum(r, g, b) - boxLum) / (255 - boxLum);
      // Smoothstep over the middle of the range: removes JPEG noise in the box and the box's own edge shading.
      const x = Math.max(0, Math.min(1, (t - 0.35) / 0.4));
      ink = x * x * (3 - 2 * x);
    } else if (hasAlpha) {
      // Already transparent: the alpha is the artwork. White parts (T&B's ampersand and script) get a lighter tone
      // so they still read against the solid parts once the logo is a single colour.
      ink = 1 - 0.55 * (Math.min(r, g, b) / 255);
    } else {
      // White background: distance from white, using the darkest channel so saturated colours stay strong.
      ink = (255 - Math.min(r, g, b)) / 255;
      if (ink < 0.08) ink = 0;
      // Lift light greys and pale brand tints so thin text stays legible once it is a single colour.
      ink = Math.pow(ink, 0.6);
    }
    ink = Math.max(0, Math.min(1, ink)) * (a / 255);
    out[k] = 0;
    out[k + 1] = 0;
    out[k + 2] = 0;
    out[k + 3] = Math.round(ink * 255);
  }

  const name = file.replace(/\.(png|jpe?g)\.webp$|\.webp$/i, "") + ".png";
  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 1 })
    .png({ compressionLevel: 9 })
    .toFile(path.join(OUT, name));
  console.log(`${file} -> mono/${name}${box ? " (knockout)" : ""}`);
}
