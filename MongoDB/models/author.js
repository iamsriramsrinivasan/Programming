const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model
const ComicCharSchema = new Schema({
  name: String,
  weight: Number
});

const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;
