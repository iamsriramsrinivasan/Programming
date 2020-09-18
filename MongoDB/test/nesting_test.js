const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

describe("Nesting Records", function() {
  beforeEach(function(done) {
    this.timeout(10000);
    mongoose.connection.collections.authors.drop(function() {
      done();
    });
  });
  //create tests
  it("Creates Author with Nested Sub Documents", function(done) {
    this.timeout(10000);
    var author = new Author({
      name: "Sriram Srinivasan",
      books: [{ title: "I know What I am doing", pages: 400 }]
    });

    author.save().then(function() {
      Author.findOne({ name: "Sriram Srinivasan" }).then(function(record) {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it("Add Books to the Author", function(done) {
    this.timeout(10000);
    var author = new Author({
      name: "Sriram Srinivasan",
      books: [{ title: "I know What I am doing", pages: 400 }]
    });

    author.save().then(function() {
      Author.findOne({ name: "Sriram Srinivasan" }).then(function(record) {
        record.books.push({ title: "Succeed in Life", pages: 500 });
        record.save().then(function() {
          Author.findOne({ name: "Sriram Srinivasan" }).then(function(record) {
            assert(record.books.length === 2);
            done();
          });
        });
      });
    });
  });
});
