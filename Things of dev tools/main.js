const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello')

    // Interpolated
    console.log('Hello  I am  a %s string!', '+po')

    // Styled
    console.log("%c How're buddy ", 'font-size:15px')

    // warning!
    console.warn('WARNING YOU HAS BEEN TRACKED')

    // Error :|
    console.error('oh shit')
    // Info
    console.info('dont waste your time bro')
    // Testing
    console.assert(1 === 1, 'infact')

    // clearing
    console.clear();

    // Viewing DOM Elements
    //console.log(p)
    //console.dir(p)
    console.dir(console);

    // Grouping together
    dogs.forEach(dog =>{
        console.group(`${dog.name}`)
        console.log(`this is ${dog.name}`)
        console.groupEnd(`${dog.name}`)
    })
    // counting
    console.count('a')
    console.count('b')
    console.count('c')
    // timing
    console.time('fetching data');
        fetch('https://github.com/Nicholas-nops')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data')
            console.log(data)
        })

    //YESSS
    console.table(dogs)
        
