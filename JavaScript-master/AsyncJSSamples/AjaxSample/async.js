window.onload = function() {
  console.log("onload");

  var http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    console.log("onreadystatechange");
    if (http.readyState == 4 && http.status == 200) {
      //console.log(JSON.parse(http.response));
    }

    http.open("GET", "data/tweets.json", true);
    console.log("afteropen");
    http.send();
    console.log("aftersend");

    console.log("test");

    //JQuery

    $.get("data/tweets.json", function(data) {
      console.log(data);
    });
    console.log("test");
  };
};
