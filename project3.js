let timer;
let isRunning = false;
let time = 0; // Time in milliseconds
let laps = [];

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const lapButton = document.getElementById("lap");
const lapsContainer = document.getElementById("laps");

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.innerHTML = "Start";
    } else {
        timer = setInterval(updateTime, 10);
        startStopButton.innerHTML = "Stop";
    }
    isRunning = !isRunning;
}

function updateTime() {
    time++;
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    display.innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
}

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    time = 0;
    display.innerHTML = "00:00.00";
    startStopButton.innerHTML = "Start";
    laps = [];
    lapsContainer.innerHTML = "";
}

function recordLap() {
    if (!isRunning) return;

    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
    laps.push(lapTime);
    updateLaps();
}

function updateLaps() {
    lapsContainer.innerHTML = '<h2>Laps</h2>';
    laps.forEach((lap, index) => {
        lapsContainer.innerHTML += `<p>Lap ${index + 1}: ${lap}</p>`;
    });
}
