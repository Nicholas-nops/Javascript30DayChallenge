const pressed = [];
const secretCode = 'nick';

window.addEventListener('keyup', (e) => {
    console.log(e.key)
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); 
    console.log(pressed);
    if(pressed.join('').includes(secretCode)){
        alert('DINDINGDING');
        cornify_add();
    }
});