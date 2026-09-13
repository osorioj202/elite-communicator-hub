
import fs from 'fs';
import path from 'path';

const filePath = 'c:/Users/PC/Downloads/test/src/data/pockets/culturalPockets.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// Simple regex to find tips and avoids that are strings and convert them to objects
// tip: '...', -> tip: { en: '...', es: '...' },
content = content.replace(/(\btip:\s*)'([^']*)',/g, "$1{ en: '$2', es: '$2 [ES]' },");
content = content.replace(/(\bavoid:\s*)'([^']*)',/g, "$1{ en: '$2', es: '$2 [ES]' },");

fs.writeFileSync(filePath, content);
console.log('Done');
