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

let circularProgressBars = document.querySelectorAll('.circular-progress');
let progressValues = document.querySelectorAll('.progress-value');

let progressEndValue = 90;
let speed = 100;

circularProgressBars.forEach((circularProgress, index) => {
    let progressStartValue = 0; // Reset progress start value for each progress bar
    let progress = setInterval(() => {
        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
        } else {
            progressStartValue++;
            progressValues[index].textContent = `${progressStartValue}%`;
            circularProgress.style.background = `conic-gradient(#9233ea ${progressStartValue * 3.6}deg,#FFFFFF,#FFFFFF)`;
        }
    }, speed);
});


