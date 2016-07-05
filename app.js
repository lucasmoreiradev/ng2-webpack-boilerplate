'use strict';

const express = require('express');
const app = express();
const router = express.Router();


app.set('view engine', 'html');
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public/js'));

app.route('/').get((req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;

