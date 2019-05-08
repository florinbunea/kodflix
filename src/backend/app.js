const express = require('express');
const app = express();
const port = 3001;
const getTvShow = require('./Gallery-get.js');

app.get('/rest/Gallery-get', (req, res) => res.send(getTvShow()));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));