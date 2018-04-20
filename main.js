var random = document.querySelector("button");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " +
     color2.value 
     + ")";
     
     css.style.color = "black";
    
     css.textContent = body.style.background + ";";
}

function randomColor() {
}

setGradient();


color1.addEventListener("input",setGradient)
color2.addEventListener("input", setGradient)
random.addEventListener("mouseenter", () => {
    random.style.transition = 'all 1s';
    random.style.transform = 'rotate(360deg)';
})
random.addEventListener("mouseleave", () => {
    random.style.transition = 'all 1s';
    random.style.transform = 'rotate(0deg)';
})