"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWordById = exports.getAllWords = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Word = _mongoose2.default.model("Words");

const getAllWords = (exports.getAllWords = (req, res) => {
  Word.find({}, (err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
});

const getWordById = (exports.getWordById = req => {
  console.log(req.params);
});
