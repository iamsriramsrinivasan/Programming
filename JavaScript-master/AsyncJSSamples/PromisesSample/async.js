function get(url) {
  return new Promise(function(resolve, reject) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function() {
      if (xhttp.status == 200) {
        resolve(JSON.parse(xhttp.response));
      } else {
        reject(xhttp.statusText);
      }
    };
    xhttp.onerror = function() {
      reject(xhttp.statusText);
    };
    xhttp.send();
  });
}

var promise = get("data/tweets.json");
promise
  .then(function(tweets) {
    console.log(tweets);
    return get("data/another.json");
  })
  .then(function(another) {
    console.log(another);
    return get("data/yetanother.json");
  })
  .then(function(yetanother) {
    console.log(yetanother);
  })
  .catch(function(error) {
    console.log(error);
  });
