import mongoose from "mongoose";

const Word = mongoose.model("Words");

export const getAllWords = (req, res) => {
  Word.find({}, (err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};

export const getWordById = req => {
  console.log(req.params);
};
