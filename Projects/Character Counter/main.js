

let count = document.getElementById("count"); 

function counter(){
    let length = document.getElementById("text").value.length; 
console.log(length);
    count.textContent = length; 
}