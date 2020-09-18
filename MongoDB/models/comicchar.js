const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model
const ComicCharSchema = new Schema({
  name: String,
  weight: Number
});

const ComicChar = mongoose.model("ComicChar", ComicCharSchema);

module.exports = ComicChar;
