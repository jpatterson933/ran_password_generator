
var button = document.createElement("button");
var mainBox = document.createElement("box");
var boxTitle = document.createElement("h1");
var passwordLength = document.createElement("input")
button.innerHTML = "Click to Start";
boxTitle.innerHTML = "Choose Password Length";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);
body.appendChild(boxTitle);


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

boxTitle.style.display = "none";

//when the button is clicked it will go away
button.onclick = function () {
    button.style.display = "none";
    //boxTitle Display STYLING - will be used to guide user through random password generation process
    boxTitle.style.display = "flex";
    boxTitle.style.justifyContent = "center";
    boxTitle.style.margin = "2em 10em 0em 10em";
    boxTitle.style.padding = "1em 1em 1em 1em";
    boxTitle.style.color = "rgb(99, 150, 225)";
    boxTitle.style.border = "1px black solid";
    boxTitle.style.borderRadius = "5px";
    //END OF BOX TITLE STYLING
}


