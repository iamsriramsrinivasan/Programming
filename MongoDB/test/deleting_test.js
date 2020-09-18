const assert = require("assert");
const ComicChar = require("../models/comicchar");

describe("Deleting Records", function() {
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
  it("Delete one record from the database", function(done) {
    this.timeout(10000);
    ComicChar.findOneAndRemove({ name: "Spiderman" }, false).then(function() {
      ComicChar.findOne({ name: "Spiderman" }).then(function(result) {
        assert(result === null);
        done();
      });
    });
  });
});
