const holes = $('.hole');
const scoreBoard = $('.score').get(0);
const moles = document.querySelectorAll('.mole')
let lasthole;
    lastTimeUp = false;
let score = 0
function randTime(min,max){
    return Math.round(Math.random() * (max - min ) + min); 
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lasthole){
        console.log('Same');
        randomHole(holes);
    }
    lasthole = hole;
    return hole;
}

function popUp(){
    const time = randTime(200,1000);
    const hole = randomHole(holes);
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up');
        if (!lastTimeUp) popUp();
    }, time)
}
function startGame(){
    $(scoreBoard).text('0');
    lastTimeUp = false;
    score = 0;
    popUp();
    setTimeout(() => lastTimeUp = true,10000)
}
function bonk(e){
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    $(scoreBoard).text(`${score}`);
}

moles.forEach(mole => mole.addEventListener('click',bonk));
