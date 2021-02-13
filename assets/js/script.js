

var button = document.createElement("button");

button.innerHTML = "Click to Start";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("did something");
});

//start program button style
button.style.color = "white"; 
button.style.backgroundColor = "rgb(173,216,230)";
button.style.border = "1px solid black";
button.style.display = "none";