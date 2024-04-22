
const counter = document.getElementById("counter"); 

let number = 0; 

function increase(){
    number++; 
    counter.textContent = number; 
}

function decrease(){
    number--; 
    counter.textContent = number; 
}