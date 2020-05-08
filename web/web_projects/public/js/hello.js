const fs = require('fs');

console.time('syn');
const data = fs.readFileSync('D:/Downloads/fidel_windows_3.1.2.zip');
console.timeEnd('syn');

console.time('callback');
console.time('asyn');
fs.readFile('/Users/gustavogretter/Downloads/zigly1.gif', (err, data) => {
  console.timeLog('callback');
});
console.timeEnd('asyn');
