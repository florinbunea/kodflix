const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;
const getTvShow = require('./Gallery-get.js');
const pathToBeFolder = '../../build';

app.use(express.static(path.join(__dirname, pathToBeFolder)));

app.get('/rest/Gallery-get', (req, res) => res.send(getTvShow()));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, pathToBeFolder, 'index.html'));
});