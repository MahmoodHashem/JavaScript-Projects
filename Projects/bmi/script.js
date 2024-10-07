const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const resultBox = document.querySelector('.result-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        const errorMessage = validateInput(input);
        if (errorMessage) {
            input.parentElement.dataset.error = errorMessage;
            isValid = false; 
        } else {
            input.parentElement.dataset.error = "";
        }
    });

    if (isValid) {
        displayResult();
    }
});

function validateInput(input) {
    if (input.validity.valueMissing) {
        return input.id === 'height' 
            ? "Please, enter your height" 
            : "Please, enter your weight";
    }
    
    if (input.validity.rangeOverflow || input.validity.rangeUnderflow) {
        return input.id === "height" 
            ? "Please enter a valid height" 
            : "Please enter a valid weight";
    }

    return ""; // Input is valid
}

function displayResult() {
    const bmiElement = resultBox.querySelector('.num');
    const stateElement = resultBox.querySelector('.result');
    const height = inputs[0].value;
    const weight = inputs[1].value;

    const result = calculateBMI(height, weight);
    
    bmiElement.innerHTML = result; 
    stateElement.innerHTML = bmiState(result);
}



function calculateBMI(height, weight) {
    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(2);

    return bmi;
}

function bmiState(bmi) {
    if (bmi < 0) {
        return 'Invalid BMI';
    };
    if (bmi < 18) {
        return 'UnderWeight';
    };
    if (bmi < 25) {
        return 'Normal';
    };
    if (bmi < 30) {
        return 'Overweight';
    };

    return "Obese";
}



