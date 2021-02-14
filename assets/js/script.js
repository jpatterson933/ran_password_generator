var button = document.createElement("button");
var mainBox = document.createElement("box");
var boxTitle = document.createElement("h1");
var lengthTitle = document.createElement("p");
var passwordLength = document.createElement("input")

//test
var testing = document.createElement("p");
//test


button.innerHTML = "Click to Generate Random Password";
boxTitle.innerHTML = "Choose Password Length";
boxTitle.setAttribute("id", "box_title");
lengthTitle.innerHTML = "Password length MUST be between 8 and 128 Characters"

var body = document.getElementsByTagName("body")[0];

body.appendChild(button);
body.appendChild(boxTitle);
body.appendChild(lengthTitle);

//test
body.appendChild(testing);

//BEG START BUTTON STYLE
button.style.color = "white"; 
button.style.backgroundColor = "rgb(99, 150, 225)";
button.style.border = "1px solid black";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.margin = "4em auto 0 auto";
button.style.padding = "1em 2em 1em 2em";
button.style.borderRadius = "5px";
button.style.boxShadow = "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";
button.style.fontSize = "2em";
//END START BUTTON STYLE

boxTitle.style.display = "none";
lengthTitle.style.display = "none";

//when the button is clicked it will go away
button.onclick = function () {

    //START BUTTON DISAPPEARS
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
    
    //this is displaying the input box for the user
    document.getElementById("lengthInput").style.display = "flex"; 
    document.getElementById("lengthInput").style.margin = "0 auto";

    //BEG LENGTH TITLE STYLING
    lengthTitle.style.display = "flex";
    lengthTitle.style.justifyContent = "center";
    lengthTitle.style.margin = "2em 25em 1em 25em";
    lengthTitle.style.borderRadius = "5px";
    lengthTitle.style.fontStyle = "bold";
    lengthTitle.style.color = "rgb(99, 150, 225)"
    //END LENGTH TITLE STYLING
    
    //BEG ENTER BUTTON STYLING
    document.getElementById("clickContinue").style.display = "flex";
    document.getElementById("clickContinue").style.justify = "center";
    document.getElementById("clickContinue").style.margin = "1em auto 0 auto";
    document.getElementById("clickContinue").style.backgroundColor = "rgb(99, 150, 225)";
    document.getElementById("clickContinue").style.padding = ".5em";
    document.getElementById("clickContinue").style.color = "white";
    document.getElementById("clickContinue").style.border = "1px solid black";
    document.getElementById("clickContinue").style.borderRadius = "5px";
    //END ENTER BUTTON STYLING

    var button2 = document.getElementById("clickContinue");
    //onclick the elements for password length all disappear
    button2.onclick = function () {
        boxTitle.style.display = "none";
        document.getElementById("lengthInput").style.display = "none";
        document.getElementById("clickContinue").style.display = "none";
        
        //switching html styling to new box for password strength
        //NEW TITLE
        boxTitle.innerHTML = "Choose Password Strength";
        //boxTitle Display STYLING - will be used to guide user through random password generation process
        boxTitle.style.display = "flex";
        boxTitle.style.justifyContent = "center";
        boxTitle.style.margin = "2em 10em 0em 10em";
        boxTitle.style.padding = "1em 1em 1em 1em";
        boxTitle.style.color = "rgb(99, 150, 225)";
        boxTitle.style.border = "1px black solid";
        boxTitle.style.borderRadius = "5px";
        //END OF BOX TITLE STYLING

        //new length title and styling
        lengthTitle.innerHTML = "Check any of the following boxes to strengthen your password"
        //BEG LENGTH TITLE STYLING
        lengthTitle.style.display = "flex";
        lengthTitle.style.justifyContent = "center";
        lengthTitle.style.margin = "2em 25em 1em 25em";
        lengthTitle.style.borderRadius = "5px";
        lengthTitle.style.fontStyle = "bold";
        lengthTitle.style.color = "rgb(99, 150, 225)"
        //END LENGTH TITLE STYLING

        //new variables for password type
        var checkbox1 = document.createElement("input");
        var checkbox2 = document.createElement("input");
        var checkbox3 = document.createElement("input");
        var checkbox4 = document.createElement("input");
        var checkbox1Title = document.createElement("p");
        var checkbox2Title = document.createElement("p");
        var checkbox3Title = document.createElement("p");
        var checkbox4Title = document.createElement("p");

        //sets input type to checkbox for variables above
        checkbox1.setAttribute("type", "checkbox");
        checkbox1.setAttribute("name", "lc");
        checkbox1.setAttribute("value", "true");
        checkbox2.setAttribute("type", "checkbox");
        checkbox3.setAttribute("type", "checkbox");
        checkbox4.setAttribute("type", "checkbox");

        //variables added to the body of the document for checkboxes
        body.appendChild(checkbox1Title);
        body.appendChild(checkbox1);

        body.appendChild(checkbox2Title);
        body.appendChild(checkbox2);

        body.appendChild(checkbox3Title);
        body.appendChild(checkbox3);

        body.appendChild(checkbox4Title);
        body.appendChild(checkbox4);

        //checkbox styling
        checkbox1Title.innerHTML = "lowercase letters"
        checkbox1Title.style.display = "flex";
        checkbox1Title.style.justifyContent = "center";
        checkbox1Title.style.color = "rgb(0, 84, 163)"
       
        checkbox1.style.display = "flex";
        checkbox1.style.margin = "0 auto";
        checkbox1.style.marginTop = "-15px";

        checkbox2Title.innerHTML = "UPPERCASE letters"
        checkbox2Title.style.display = "flex";
        checkbox2Title.style.justifyContent = "center";
        checkbox2Title.style.color = "rgb(0, 84, 163)"

        checkbox2.style.display = "flex";
        checkbox2.style.margin = "1em auto";
        checkbox2.style.marginTop = "-15px";

        checkbox3Title.innerHTML = "numbers";
        checkbox3Title.style.display = "flex";
        checkbox3Title.style.justifyContent = "center";
        checkbox3Title.style.color = "rgb(0, 84, 163)"

        checkbox3.style.display = "flex";
        checkbox3.style.margin = "1em auto";
        checkbox3.style.marginTop = "-15px";

        checkbox4Title.innerHTML = "symbols"
        checkbox4Title.style.display = "flex";
        checkbox4Title.style.justifyContent = "center";
        checkbox4Title.style.color = "rgb(0, 84, 163)"

        checkbox4.style.display = "flex";
        checkbox4.style.margin = "1em auto";
        checkbox4.style.marginTop = "-15px";

        //finalize password button
        var finalButton = document.createElement("button")
        
        body.appendChild(finalButton);
        finalButton.innerHTML = "Generate Password";
        finalButton.style.display = "flex";
        finalButton.style.justify = "center";
        finalButton.style.margin = "1em auto 0 auto";
        finalButton.style.backgroundColor = "rgb(99, 150, 225)";
        finalButton.style.padding = ".5em";
        finalButton.style.color = "white";
        finalButton.style.border = "1px solid black";
        finalButton.style.borderRadius = "5px";

        finalButton.onclick = function () {
            boxTitle.style.display = "none";
            lengthTitle.style.display = "none";
            checkbox1Title.style.display = "none";
            checkbox1.style.display = "none";
            checkbox2Title.style.display = "none";
            checkbox2.style.display = "none";
            checkbox3Title.style.display = "none";
            checkbox3.style.display = "none";
            checkbox4Title.style.display = "none";
            checkbox4.style.display = "none";
            finalButton.style.display = "none";


            //the final password will display here
            var generatedPassword = document.createElement("box")
            generatedPassword.innerHTML = "testingphase";
            body.appendChild(generatedPassword);

            generatedPassword.style.display = "flex";
            generatedPassword.style.justifyContent = "center";
            generatedPassword.style.backgroundColor = "rgb(99, 150, 225)";
            generatedPassword.style.margin = "2em 5em";
            generatedPassword.style.padding = "1em";
            generatedPassword.style.borderRadius = "5px";
            generatedPassword.style.fontSize = "4em";
            
        }

        
        
        

    }
}  
