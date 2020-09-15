const test_secret = process.env.test_secret;

if (test_secret == 12345678) setInner('number');
if (test_secret == '12345678') addInner('string');
console.log('test_secret: ' + test_secret);

function setInner(newInner) { document.getElementById('isit').innerHTML = newInner; }
function addInner(newInner) { document.getElementById('isit').innerHTML += '\n' + newInner; }