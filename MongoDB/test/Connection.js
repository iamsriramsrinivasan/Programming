const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//Connect to MongoDb

before(function(done) {
  mongoose.connect("mongodb://localhost/testdb");
  this.timeout(10000);
  mongoose.connection
    .once("open", function() {
      console.log("Connection has been made, Enjoy");
      done();
    })
    .on("error", function(error) {
      console.log("Connection Error:", error);
    });
});

//Drop Collections
beforeEach(function(done) {
  this.timeout(10000);
  mongoose.connection.collections.comicchars.drop(function() {
    done();
  });
});

//Cleanup

after(function(done) {
  this.timeout(10000);
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});
