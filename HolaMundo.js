const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
    res.send('Mi Primer Commit!'));
module.exports = holamundo;