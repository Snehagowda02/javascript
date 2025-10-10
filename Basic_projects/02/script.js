const h1 = document.getElementById('time')
let interval = null
let second = 0;

function padStart(value){
    return String(value).padStart(2, "0")
}

function settime() {
    const min = Math.floor(second/60)
    const seconds = second % 60
    h1.innerHTML = `${padStart(min)}: ${padStart(seconds)}`
}
function startClock() {
    if(interval) stopClock() // multiple intervals were running at the same time , to stop that we did it
    interval = setInterval( () => {
        second++;
        settime()
    }, 1000)
}

function stopClock() {
    clearInterval(interval)

}

function resetClock() {
    stopClock()
    second = 0
    settime()
    
}

// let isPaused = true

// function startClock() {
//     if (isPaused === true) {
//         interval = setInterval(timer, 1000);
//         isPaused = false;
//     }
//     if (isPaused === false) {
//         if (interval) return;
//     }
//     interval = setInterval(timer, 1000);
// }

// function stopClock() {
//     clearInterval(interval)
//     isPaused = true
// }



