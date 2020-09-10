const test_secret = process.env.test_secret;
if (test_secret == 12345678) console.log('number');
if (test_secret == '12345678') console.log('string');
console.log('test_secret: ' + test_secret);
