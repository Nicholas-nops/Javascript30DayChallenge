const timerDisplay = $('.display__time-left');
let countdown;
const endTime = $('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then);
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        secondsLeft < 0 ? clearInterval(countdown) :  displayTimeLeft(secondsLeft);
    }, 1000)
}


function displayTimeLeft(seconds){
    const minutes  = Math.floor(seconds / 60);
    const reminderSeconds = seconds % 60;
    $(timerDisplay).text(`${minutes}:${reminderSeconds < 10? '0' : '' }${reminderSeconds}`);
}
function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    $(endTime).text(`Be back at ${hour};${minutes}`)
}


function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset()
});