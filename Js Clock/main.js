const handleSec = document.querySelector('.second-hand');
const handleMin = document.querySelector('.min-hand');
const handleHour = document.querySelector('.hour-hand');


function setDate() {
   
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    handleSec.style.transform = `rotate(${secondsDegrees}deg)`;
    handleMin.style.transform = `rotate(${((mins / 60) * 360) + 90}deg)`;
    handleHour.style.transform = `rotate(${((hours / 12) * 360) + 90}deg)`;
    
}

setInterval(setDate, 1000);