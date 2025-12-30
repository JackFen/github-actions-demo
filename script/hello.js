const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'hello.txt');

fs.writeFileSync(outputPath, 'hello world\n', 'utf8');

console.log('hello.txt generated');