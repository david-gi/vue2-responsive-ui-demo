// [START app]
'use strict';

var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080;

// app.use(express.static(__dirname + '/'));
app.use('/dist', express.static('dist'));

app.get('/', (re, res) => {
    res.sendFile('/dist/index.html', {root: __dirname})
});

app.listen(PORT);