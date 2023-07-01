const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
    res.send('Mi Primer Commit!'));

holamundo.get('/test', (req, res) =>
    res.send('Mi Primer Commit!'));


holamundo.get('/test2', (req, res) =>
    res.send('Mi Primer pull request!'));


module.exports = holamundo;
