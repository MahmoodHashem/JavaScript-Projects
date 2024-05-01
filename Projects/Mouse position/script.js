

window.onload = init; 


function init(){
    let map = document; 
map.onmousemove = showCoords; 
}

function showCoords(eventObj){
    let x = document.getElementById('x-h2');  
    let y = document.getElementById('y-h2');  
    let xcoord = eventObj.clientX;  
    let ycoord = eventObj.clientY; 

        x.textContent = xcoord; 
        y.textContent = ycoord; 

}