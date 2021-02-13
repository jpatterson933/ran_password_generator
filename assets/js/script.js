

var button = document.createElement("button");

button.innerHTML = "Click to Start";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("did something");
});

//BEG START BUTTON STYLE
button.style.color = "white"; 
button.style.backgroundColor = "rgb(173,216,230)";
button.style.border = "1px solid black";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.margin = "4em auto 0 auto";
button.style.padding = "1em 2em 1em 2em";
button.style.borderRadius = "5px";
button.style.fontSize = "2em";
//END START BUTTON STYLE
