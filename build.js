require('@actions/core');
const yenv = require('yenv');

const env = yenv('.github/workflows/main.yml');

console.log(process.env);
// console.log('crossEnv: ' + process.env.crossEnv);
console.log('yenv: ' + env.build.steps.env.yEnv);
