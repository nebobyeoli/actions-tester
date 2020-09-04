const { setSecret } = require('@actions/core');

require('dotenv').config();
require('@actions/core');

// var sec = 'ABCD ' + process.env.test_secret.slice(0, 4);
// console.log(`test_secret: ${sec}`);
// console.log(`length: ${process.env.test_secret.length}`);

setSecret('test_secret');
console.log(process.env);