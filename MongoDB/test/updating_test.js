const assert = require("assert");
const ComicChar = require("../models/comicchar");

describe("Updating Records", function() {
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
  it("Update one record from the database", function(done) {
    this.timeout(10000);
    ComicChar.findOneAndUpdate({ name: "Spiderman" }, { name: "Aquaman" }).then(
      function() {
        ComicChar.findOne({ _id: char._id }).then(function(result) {
          assert(result.name === "Aquaman");
          done();
        });
      }
    );
  });

  it("Increments Weight by 1", function(done) {
    this.timeout(10000);
    ComicChar.update({}, { $inc: { weight: 1 } }).then(function() {
      ComicChar.findOne({ name: "Spiderman" }).then(function(result) {
        assert(result.weight === 81);
        done();
      });
    });
  });
});
