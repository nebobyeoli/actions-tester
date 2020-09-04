require('@actions/core');
const yenv = require('yenv');

const env = yenv('env.yml');

console.log(process.env);
console.log('crossEnv: ' + process.env.crossEnv);
console.log('yenv: ' + env.yEnv);
