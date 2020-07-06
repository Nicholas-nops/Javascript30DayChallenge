const divs = $('div');
const button = $('button');
console.log(divs)
$(divs).on('click', function (e) {
    console.log(this.classList.value);
    e.stopPropagation();
}); 

$(button).on('click', function() {
    console.log('click!!')
})
