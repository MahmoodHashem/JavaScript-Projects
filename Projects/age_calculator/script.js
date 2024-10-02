
const inputs = document.querySelectorAll('input');
const form = document.querySelector("form"); 


const yearToShow = document.getElementById('years');
const monthToShow = document.getElementById('months');
const dayToShow = document.getElementById('days');

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');


form.noValidate = true; 

form.addEventListener("submit", ()=>{

    event.preventDefault()
    
    inputs.forEach(input =>{
        if(input.validity.valueMissing){
            input.parentElement.dataset.error = "This Field is required"
        }else if(input.validity.rangeUnderflow || input.validity.rangeOverflow){
            if(input.id === 'day'){
                input.parentElement.dataset.error = 'Must be a valid day'
            }else if(input.id === 'month'){
                input.parentElement.dataset.error = 'Must be a valid month'
            }else{
                input.parentElement.dataset.error = 'Must be a valid year'
            }
        }
    })

   if(form.checkValidity()){
    
    let age = calculateAge(year.value, month.value, day.value)

    yearToShow.innerHTML = age.years; 
    monthToShow.innerHTML =age.months; 
    dayToShow.innerHTML = age.days

   }

    

})





function calculateAge(year, month, day) {
    const birthDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}
