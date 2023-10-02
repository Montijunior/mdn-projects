const image = document.querySelector("img");
image.onclick = () => {
const mySrc = image.getAttribute("src");
if (mySrc === "images/download.jpg"){
    image.setAttribute("src","images/2.jpg");
} else {
    image.setAttribute("src","images/download.jpg");
};

    
}


const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name",myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

// continuation of the code
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedUser = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool ${storedUser}`;
}

myButton.onclick = () => {
    setUserName();
};