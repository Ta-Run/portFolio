var typed = new Typed(".text", {
    Strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function onToggleMenu(name) {
    console.log('event', name)
}


let circularProgress = document.querySelector('.circular-progress');
progressValue = document.querySelector('.progress-value');

let progressStartValue = 0;
progressEndValue = 90;
speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#9233ea ${progressStartValue * 3.6}deg,#FFFFFF,#FFFFFF)`
    if (progressStartValue == progressEndValue) {
        clearInterval(progress)
    }

}, speed);