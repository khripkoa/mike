import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const imagesDir = './public/images';
const files = readdirSync(imagesDir);

console.log('Converting images to AVIF...\n');

for (const file of files) {
    if (file.endsWith('.webp')) {
        const inputPath = join(imagesDir, file);
        const outputPath = inputPath.replace('.webp', '.avif');

        try {
            await sharp(inputPath)
                .avif({ quality: 80, effort: 6 })
                .toFile(outputPath);

            const originalSize = statSync(inputPath).size;
            const newSize = statSync(outputPath).size;
            const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

            console.log(`✓ ${file} → ${file.replace('.webp', '.avif')}`);
            console.log(`  ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)\n`);
        } catch (error) {
            console.error(`✗ Error converting ${file}:`, error.message);
        }
    }
}

console.log('Conversion complete!');
