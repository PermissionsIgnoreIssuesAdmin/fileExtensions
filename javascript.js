val ok = 2;
var test = "testing_";
var regField = new RegExp('/\w+/' + test); // this stopped giving an issue after JSHint deprecation
if (test == true) { alert("x"); }
