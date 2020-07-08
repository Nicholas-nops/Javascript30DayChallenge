const speed = $('.speed').get(0)
const bar = $('.speed-bar').get(0);
const video = $('.flex').get(0);



$(speed).on('mousemove',function(e){
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playBackRate = percent * (max - min) + min;
    bar.style.height = height;
    $(bar).text(playBackRate.toFixed(2) + 'x');
    video.playbackRate = playBackRate;
});