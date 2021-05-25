//Colors array
let colors = ['blue', 'yellow', 'white', 'red', 'brown', 'orange','pink'];

//get button
let button = document.getElementById('button');






//add event listener
button1.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container1');

    container.style.background = randomColor;
})


//add event listener
button2.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container2');

    container.style.background = randomColor;
})

button3.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container3');

    container.style.background = randomColor;
})


button4.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container4');

    container.style.background = randomColor;
})

button5.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container5');

    container.style.background = randomColor;
})

button6.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container6');

    container.style.background = randomColor;
})

button7.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container7');

    container.style.background = randomColor;
})

button8.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container8');

    container.style.background = randomColor;
})


var sonido = new Audio();
sonido.src="sonido.mp3";



