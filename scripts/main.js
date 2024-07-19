let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/vin1.png") {
        myImage.setAttribute("src", "images/vin2.png");
    } else {
        myImage.setAttribute("src", "images/vin1.png");
    }
};

let myButton = document.querySelector(".changeuser");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Hello " + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello " + storedName;
}

myButton.onclick = function() {
    setUserName();
};