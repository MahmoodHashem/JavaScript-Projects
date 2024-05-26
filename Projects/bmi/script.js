

const error = document.querySelectorAll('.error');

function calculate() {

    const height = document.querySelector('#height');
    const weight = document.querySelector('#weight');

    const resultNum = document.querySelector(".num"); 
    const result = document.querySelector('.result'); 

    height.style.border = 'none'
        weight.style.border = 'none';
        error[0].style.display = 'none';
        error[1].style.display = 'none';

    if (height.value === '' && weight.value === '') {
        height.style.border = '2px solid red'
        weight.style.border = '2px solid red';
        error[0].style.display = 'block';
        error[1].style.display = 'block';
    } else if(height.value === '' || weight.value === '' ) {
        if (height.value === '') {
            error[0].style.display = 'block';
            height.style.border = '2px solid red'
        } else{
            error[1].style.display = 'block';
            weight.style.border = '2px solid red';
        }
    } else {
            const bmi = calculateBMI(height.value, weight.value); 
            resultNum.textContent = bmi
            const r = bmiState(bmi); 
            result.textContent = r; 
        }
}


function calculateBMI(height, weight){
    height =  height / 100;  
    let bmi = (weight / (height * height)).toFixed(2); 

    return bmi; 
}

function bmiState(bmi){
    if(bmi < 0){
        return 'Invalid BMI';
    };
    if(bmi < 18){
        return 'UnderWeight'; 
    };
    if(bmi < 25){
        return 'Normal';
    };
    if( bmi < 30){
        return 'Overweight';
    };

        return "Obese";
}


