

let farenhiet = document.querySelector('#farenhiet'); 
let celsius = document.querySelector('#celsius'); 
let kelvin = document.querySelector('#kelvin'); 

const btn = document.querySelector("#btn"); 

function roundNumber(n){
    return Math.round(n*100)/100; 
}

  function updateCelcuis(){
    let cTemp = parseFloat(celsius.value); 
    let fTemp = (cTemp * (9/5)) + 32; 
    let kTemp = cTemp + 273; 
    console.log(cTemp); 
    farenhiet.value = roundNumber(fTemp); 
    kelvin.value = roundNumber(kTemp); 
}

function updateFarenhiet(){
    let fTemp = parseFloat(farenhiet.value); 
    let cTemp = (fTemp - 32) * 5/9
    let kTemp = (fTemp - 32) * 5/9 + 273
    console.log(fTemp); 
    celsius.value = roundNumber(cTemp); 
    kelvin.value = roundNumber(kTemp); 
}


function updateKelvin(){
    let kTemp = parseFloat(kelvin.value); 
    let fTemp = (kTemp - 273) * 9/5 + 32
    let cTemp = kTemp - 273
    console.log(kTemp); 
    farenhiet.value = roundNumber(fTemp); 
    celsius.value = roundNumber(cTemp); 
}




