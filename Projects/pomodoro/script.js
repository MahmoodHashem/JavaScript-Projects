
let timeLeft = 25 * 60;
let timerElement = document.querySelector('.circle .time');

timerElement.textContent = formatTime(timeLeft);


let interval;

function start() {
    interval = setInterval(() => {

        timeLeft--;

        timerElement.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
        }
    }, 1000)
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    timeLeft = 25 * 60;
    timerElement.textContent = formatTime(timeLeft);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
