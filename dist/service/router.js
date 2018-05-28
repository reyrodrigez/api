"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _words = require("./controllers/words.controller");

function router(app) {
  app.route("/words").get(_words.getAllWords);

  app.route("/words/:id").get(_words.getWordById);
}

exports.default = router;
