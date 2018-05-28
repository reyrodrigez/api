import "./service/models/words.model";
import express from "express";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3333;

import router from "./service/router";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/admin");

router(app);

app.listen(port);

console.log("Leanvocab RESTful API server started on: " + port);
