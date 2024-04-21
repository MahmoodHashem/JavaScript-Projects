

function add7(number){
    return number +7; 
}

function multiply(num1, num2){
    return num1 * num2; 
}

function capatalize(string){
    if (typeof string !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if(string === ''){
        return '';
    }
    let capatalized = string[0].toUpperCase() + string.slice(1); 

    return capatalized; 
}


/**
 * Returns the last letter of a given string.
 * @param {string} str - The input string.
 * @returns {string} - The last letter of the input string.
 */
function lastLetter(str) {

    if (typeof string !== 'string') {
        throw new Error('Input must be a string');
    }

  if (str.length === 0) {
    return "";
  }
  return str.charAt(str.length - 1);
}


/**
 * The `fizzbuzz` function takes an input number and prints out a sequence of numbers and words based on certain conditions.
 *
 * @param {number} input - The number up to which the sequence should be printed.
 * @returns {void}
 */
function fizzbuzz(input) {
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(20); 

