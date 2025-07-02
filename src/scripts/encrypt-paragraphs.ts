import fs from "fs";
import path from "path";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();

const key = process.env.ENCRYPT_KEY;
if (!key) {
  console.error("❌ ENCRYPT_KEY not set in .env.local");
  process.exit(1);
}

const blogDir = "./src/blog";
const outDir = "./public/encrypted";

fs.mkdirSync(outDir, { recursive: true });

// Only .md files
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

files.forEach((file) => {
  const inputPath = path.join(blogDir, file);
  const outputFilename = `${path.basename(file, ".md")}.txt.enc`;
  const outputPath = path.join(outDir, outputFilename);

  const content = fs.readFileSync(inputPath, "utf-8");

  const encrypted = CryptoJS.AES.encrypt(content, key).toString();

  fs.writeFileSync(outputPath, encrypted);

  console.log(`✅ Encrypted: ${file} -> ${outputPath}`);
});
