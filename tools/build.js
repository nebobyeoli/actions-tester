const path = require('path');
console.log(path.join(__dirname, 'tools/build.js'));
console.log();

console.log('======= build.js =======');

const test_secret = process.env.test_secret;

if (test_secret == 12345678) console.log('number');
if (test_secret == '12345678') console.log('string');
console.log('test_secret: ' + test_secret);

module.exports.text_secret = test_secret;
// export const text_secret = test_secret;