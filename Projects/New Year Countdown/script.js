
// const year = document.getElementById('year');
// let days = document.getElementById('day');
// let hour = document.getElementById('hour');
// let min = document.getElementById('min');


const newYearTime = new Date("Mar 20, 2025 00:00:00").getTime();
const now = new Date().getTime(); 

console.log("New Year " + newYearTime); 
console.log("Now " + now); 

const gap = newYearTime - now; 

console.log("the gap " + gap); 

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const d = Math.floor(gap / day);
const h = Math.floor((gap % day) / hour);
const m = Math.floor((gap % hour) / minute);
const s = Math.floor((gap % minute) / second);

console.log(d + "days," + h + "Hours," + m + "minutes and" + s + "seconds are remained to 2025"); 


function convertTo12HourFormat(time) {
    let hours = time;
    hours = hours % 12;
    hours = hours ? hours : 12;

    return hours;
}