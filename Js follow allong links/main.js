const triggers = document.querySelectorAll('a')
const highLight = document.createElement('span')
highLight.classList.add('highLight')
document.body.append(highLight)
function highLightLink(){
    const linkCords = this.getBoundingClientRect();
    console.log(linkCords);
    const coords = {
        width: linkCords.width,
        height: linkCords.height,
        top: linkCords.top +  window.scrollY,
        left:linkCords.left + window.scrollX
    }
    highLight.style.width = `${coords.width}px`;
    highLight.style.height = `${coords.height}px`;
    highLight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
     
};


triggers.forEach(light => light.addEventListener('mouseenter', highLightLink));