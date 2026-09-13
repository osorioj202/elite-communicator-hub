
import fs from 'fs';

const filePath = 'c:/Users/PC/Downloads/test/src/data/pockets/culturalPockets.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Function to convert string to LocalizedString object safely
const localizeRegex = /(tip|avoid):\s*'([^']*)'/g;
content = content.replace(localizeRegex, (match, key, text) => {
    // Escape single quotes in text for the object
    const escapedText = text.replace(/'/g, "\\'");
    return `${key}: { en: '${escapedText}', es: '${escapedText} [ES]' }`;
});

fs.writeFileSync(filePath, content);
console.log('Successfully localized culturalPockets.ts');
