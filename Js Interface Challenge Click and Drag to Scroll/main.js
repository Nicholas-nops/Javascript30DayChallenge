const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

$(slider).on('mousedown' ,(e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});
$(slider).on('mouseleave' ,() => {
    isDown = false;
    slider.classList.remove('active');
});
$(slider).on('mouseup' ,() => {
    isDown = false;
    slider.classList.remove('active');
});
$(slider).on('mousemove', (e) => {
    if (!isDown) return;

    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});