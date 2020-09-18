window.onload = function() {
  function handleError(jqHXR, textStatus, error) {
    console.log(error);
  }

  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: cbTweets,
    error: handleError
  });

  function cbTweets(data) {
    console.log(data);
  }

  $.ajax({
    type: "GET",
    url: "data/another.json",
    success: cbAnother,
    error: handleError
  });

  function cbAnother(data) {
    console.log(data);
  }

  $.ajax({
    type: "GET",
    url: "data/yetanother.json",
    success: cbYetAnother,
    error: handleError
  });

  function cbYetAnother(data) {
    console.log(data);
  }
};
