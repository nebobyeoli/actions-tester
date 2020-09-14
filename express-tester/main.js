const express = require('express');
const app = express();
const port = 3000;
const { imgvar } = require('./imgvar.js');

app.use(express.static('images'));

app.get('/', (req, res) => res.send(`
    <h1>Hello World!</h1>
    <img src="${imgvar}" alt="imgvar" width="960">
`));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
