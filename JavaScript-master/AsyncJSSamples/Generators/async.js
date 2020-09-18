window.onload = function() {
  genWrap(function*() {
    var tweets = yield $.get("data/tweets.json");
    console.log(tweets);
    var another = yield $.get("data/another.json");
    console.log(another);
    var yetAnother = yield $.get("data/yetanother.json");
    console.log(yetAnother);
  });

  function genWrap(generator) {
    var gen = generator();

    function handle(yielded) {
      if (!yielded.done) {
        yielded.value.then(function(data) {
          return handle(gen.next(data));
        });
      }
    }
    return handle(gen.next());
  }
};
