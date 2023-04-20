import fs from 'fs';

function directoryTree(dir, prefix = '') {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let result = '';
  files.forEach((file, index) => {
    const isLast = index === files.length - 1;
    const marker = isLast ? '└──' : '├──';
    result += `${prefix}${marker} ${file.name}\n`;
    if (file.isDirectory()  && !files.includes('node_modules')) {
      const newPrefix = `${prefix}${isLast ? '   ' : '│  '}`;
      result += directoryTree(`${dir}/${file.name}`, newPrefix);
    }
  });
  return result;
}

console.log(directoryTree('.'));
