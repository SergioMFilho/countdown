
let countDownDate = 0;
console.log(countDownDate)

let x = setInterval(function() {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance/(1000*60*60*24));
    let hours = Math.floor((distance %(1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((distance % (1000*60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + 
    "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        // clearInterval(x);
        document.getElementById("demo").innerHTML = "0d 0h 0m 0s";
    }
},1000);

const addMinutes = (min) => {
    const currentDate = new Date()
    return new Date(currentDate.getTime() + min * 60000)
}

const handleInputButton = () => {
    document.getElementById('timerInput').style.display = 'inline';
}
document.getElementById('timerButton').onclick = handleInputButton


const handlePlayButton = () => {
    const timerInput = document.getElementById('timerInput').value
    countDownDate = addMinutes(timerInput)
    document.getElementById('timerInput').style.display = 'none';
    document.getElementById('timerInput').value = '';
}
document.getElementById('playButton').onclick = handlePlayButton


const handleStopButton = () => {
    countDownDate = 0
}
document.getElementById('stopButton').onclick = handleStopButton



