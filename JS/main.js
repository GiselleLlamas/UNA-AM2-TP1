//Colors array
let colors = ['blue', 'yellow', 'white', 'red', 'brown', 'orange','pink'];

//get button
let button = document.getElementById('button');

var sonido = new Audio();
sonido.src="mp3/sonido.mp3";

var mujeres = new Audio();
mujeres.src="mp3/mujeres.mp3";

var voz = new Audio();
voz.src = "mp3/voz.mp3";

var anulan = new Audio();
anulan.src = "mp3/anulan.mp3";

var genero = new Audio();
genero.src = "mp3/genero.mp3";

var invisibilizan = new Audio();
invisibilizan.src = "mp3/invisibilizan.mp3";

var iglesias = new Audio();
iglesias.src = "mp3/iglesias.mp3";

var binario = new Audio();
binario.src = "mp3/binario.mp3";

function pauseAudiosAllAndPlay(audio){
    let mp3s = [sonido, mujeres, voz, anulan, genero, invisibilizan, iglesias, binario];

    mp3s.forEach(mp3 => mp3.pause());

    audio.play();
}

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
