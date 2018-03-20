/**** Just some basic loading and parsing of JSON files *yawn* ****/ 
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'errors.JSON', true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      if (callback) {
        callback(xobj.responseText);
      }
    }
  };
  xobj.send(null);
}
function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    arrJ = actual_JSON;
    if ( arrJ.length > 1 ) {
      var btnJ = document.getElementById("json");
      btnJ.classList.add('disabled');
    }
    console.log(actual_JSON);
  });
}
