const assert = require("assert");
const ComicChar = require("../models/comicchar");

describe("Finding Records", function() {
  var char;
  this.beforeEach(function(done) {
    this.timeout(10000);
    char = new ComicChar({
      name: "Spiderman",
      weight: 80
    });

    char.save().then(function() {
      done();
    });
  });
  //create tests
  it("Finds one record from the database", function(done) {
    this.timeout(10000);
    ComicChar.findOne({ name: "Spiderman" }).then(function(result) {
      assert(result.name === "Spiderman");
      done();
    });
  });
  it("Finds one record by ID from the database", function(done) {
    this.timeout(10000);
    ComicChar.findOne({ _id: char._id }).then(function(result) {
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
