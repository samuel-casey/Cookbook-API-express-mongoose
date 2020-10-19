"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
var PORT = process.env.PORT || 3000;
// 1. Require body-parser and save it to the variable parser.
var bodyParser = require("body-parser");
var app = express();
var cookbookRouter = require('./controllers/cookbookRoutes');
// const authorRouter = require('./controllers/authorRoutes')
// 2. Add the coded needed to make body-parser work within your app.
app.use(bodyParser.json());
app.use('/api/cookbooks/', cookbookRouter);
// app.use('/api/authors/', authorRouter)
app.get('/', function (req, res) {
    res.send('Hello world of TypeScript + Node!');
});
app.listen(PORT, function () { return console.log("Server running on port " + PORT); });
