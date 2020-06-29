const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'].map(v => v.toLowerCase());

//sorting method
// function bubbleSort() {
//     swapped = false;
//     let end = bands.length -1;
//     for (let x = 0; x < end; x++) {
//         var test = bands[x].localeCompare(bands[x+1]);
//         if(test > 0){
//             swapped = true;
//             let temp = bands[x];
//             bands[x] = bands[x + 1];
//             bands[x + 1] = temp;
//         }
//     }
//     end--;
// }

// do{
//     bubbleSort();
// }while(swapped);

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim()
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
