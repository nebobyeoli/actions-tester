require('@actions/core');
// const yenv = require('yenv');
// const env = yenv('.github/workflows/main.yml');

console.log('test_secret: ' + process.env.test_secret);
console.log('.');
console.log(process.env);
// console.log('yenv: ' + env.build.steps.env.yEnv);
