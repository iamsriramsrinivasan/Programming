const assert = require("assert");
const ComicChar = require("../models/comicchar");

describe("Saving Records", function() {
  //create tests
  it("Saves a record to the database", function() {
    var char = new ComicChar({
      name: "Superman",
      weight: 80
    });

    char.save().then(function() {
      assert(char.isNew === false);
    });
  });
});
