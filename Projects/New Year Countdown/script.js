
let daysE = document.getElementById('day');
let hourE = document.getElementById('hour');
let minE = document.getElementById('min');
let secE  = document.getElementById('sec'); 


const newYearTime = new Date("Mar 20, 2025 00:00:00").getTime();




function updateCountDown(){
const audio = new Audio('tiktak.wav'); 
const now = new Date().getTime();  
const gap = newYearTime - now; 

audio.play()
const secondInMill = 1000;
const minuteInMill = secondInMill * 60;
const hourInMill = minuteInMill * 60;
const dayInMill = hourInMill * 24;

const d = Math.floor(gap / dayInMill);
const h = Math.floor((gap % dayInMill) / hourInMill);
const m = Math.floor((gap % hourInMill) / minuteInMill);
const s = Math.floor((gap % minuteInMill) / secondInMill);

    secE.innerHTML = `${s}<div style="font-size: 15px;">ثانیه</div>`; 
    minE.innerHTML = `${m}<div style="font-size: 15px;">دقیقه</div>`; 
    hourE.innerHTML = `${h}<div style="font-size: 15px;">ساعت</div>`;
    daysE.innerHTML = `${d}<div style="font-size: 15px;">روز</div>`;
    
    
}


window.onload = setInterval(updateCountDown, 1000); 


function convertTo12HourFormat(time) {
    let hours = time;
    hours = hours % 12;
    hours = hours ? hours : 12;

    return hours;
}