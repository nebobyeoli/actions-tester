const { test_secret } = require('../tools/build.js');

console.log('======= main.js =======');

if (test_secret == 12345678) console.log('number');
if (test_secret == '12345678') console.log('string');
console.log('test_secret: ' + test_secret);

console.log('\nPress any key to exit');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));