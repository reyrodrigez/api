"use strict";

require("./service/models/words.model");

var _router = require("./service/router");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3333;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/admin");

(0, _router2.default)(app);

app.listen(port);

console.log("Leanvocab RESTful API server started on: " + port);
