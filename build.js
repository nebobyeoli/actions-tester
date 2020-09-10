const core = require('@actions/core');
// const yenv = require('yenv');
// const env = yenv('.github/workflows/main.yml');
core.exportVariable('envVar', secrets.TEST_SECRET );

console.log(`::set-env name=APP_NAME::$(cat Dockerfile | grep APP_NAME= | head -n 1 | grep -o '".*"' | sed 's/"//g')`);
console.log('test_secret: ' + process.env.test_secret);
console.log('envVar: ' + process.env.envVar);
console.log('.');
console.log(process.env);
// console.log('yenv: ' + env.build.steps.env.yEnv);
