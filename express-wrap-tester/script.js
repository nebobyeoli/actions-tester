const { test_secret } = require('../tools/build.js');

setInner('<br>');
if (test_secret == 12345678) addInner('number');
if (test_secret == '12345678') addInner('string');
console.log('test_secret: ' + test_secret);

function setInner(newInner) { document.getElementById('isit').innerHTML = newInner; }
function addInner(newInner) { document.getElementById('isit').innerHTML += '<br>' + newInner; }