var looping = function () {
  var person = {
    fname: "Autumn",
    lname: "Fall",
    age: 45,
  };
  var text = "";
  for (x in person) {
    text += person[x] + " ";
  }
  document.getElementById("output").innerHTML = text;
};

looping();
