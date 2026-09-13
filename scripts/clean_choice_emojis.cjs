const fs = require('fs');
const path = require('path');

const files = [
  path.resolve('src/data/chapter1.ts'),
  path.resolve('src/data/chapter2.ts'),
  path.resolve('src/data/chapter3.ts'),
  path.resolve('src/i18n/chapter1Translations.ts')
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace leading emojis in label: '...' or label: "..."
  const updated = content.replace(/(label:\s*['"])([\p{Extended_Pictographic}\uFE0F\u200D\u20E3\s]+)([^'"]+['"])/gu, (match, prefix, emoji, rest) => {
    return prefix + rest.trimStart();
  });
  
  if (content !== updated) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Cleaned choice emojis from:', file);
  }
}
console.log('All files processed.');
