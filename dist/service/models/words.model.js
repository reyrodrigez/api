"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const Schema = _mongoose2.default.Schema;

const WordSchema = new Schema({
  origin: {
    type: String,
    required: "Origin word missing"
  },
  target: {
    type: String,
    required: "Origin word missing"
  },
  userId: {
    type: String,
    required: "User id missing"
  },
  collectionId: {
    type: String,
    default: ""
  }
});

exports.default = _mongoose2.default.model("Words", WordSchema);
