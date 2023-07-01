const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
    res.send('Mi primer Commit!'));
module.exports = holamundo;