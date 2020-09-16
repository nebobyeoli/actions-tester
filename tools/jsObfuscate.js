const fs = require('fs');
const JSObfuscator = require('javascript-obfuscator');

var obfOptions = {
    identifierNamesGenerator: 'mangled',
    splitStrings: true,
    simplify: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.13,
    stringArrayEncoding: ['base64', 'rc4'],
    disableConsoleOutput: false
}

fs.writeFileSync('obf/main.js',
    JSObfuscator.obfuscate(
        fs.readFileSync('tools/build.js', 'utf-8'), obfOptions
    ).getObfuscatedCode()
);