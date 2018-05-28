import mongoose from "mongoose";

const Schema = mongoose.Schema;

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

export default mongoose.model("Words", WordSchema);
