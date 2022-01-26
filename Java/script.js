let seconds = 00
let tens = 00
let appendTens = document.getElementById('tens')
let appendSeconds = document.getElementById('sec')
const buttonStart = document.querySelector('#play')
const buttonReset = document.getElementById('reset')
const buttonStop = document.getElementById('stop')
let interval; //função de armazenamento de timer

//Esta função irá rodar quando o botão "play" for apertado

function startTimer() {
    tens++

    if(tens < 9) {
        appendTens.innerHTML = "0" + tens
    }
    if (tens > 9){
        appendTens.innerHTML = tens
    }
    if(tens > 99) {
        seconds++
        appendSeconds.innerHTML = "0" + seconds
        tens= 0
        appendTens.innerHTML = "0" + 0
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }
}

buttonStart.onclick = function () {
   interval = setInterval(startTimer, 10)
}

buttonStop.onclick = function () {
    clearInterval(interval)
}

buttonReset.onclick = function () {
    clearInterval(interval)
    tens = "00"
    seconds = "00"
    appendSeconds.innerHTML =  seconds
    appendTens.innerHTML = tens
}
    


