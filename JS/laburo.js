var y = [];
var y_sectores = [];
var txt_sectores = [];
var barra;
var f_lupa;
var txt_busqueda;
var link1, link2;
var A_link1, A_link2;

function setup() {
    createCanvas(1300,600);
    link1 = loadImage('img/link3.png');
    link2 = loadImage('img/link7.png');
    imageMode(CENTER);
    A_link1 = createA('oscuro.html', 'OSCURO');
    A_link2 = createA('mensajes.html', 'PARED');
    y = [ 100, 250, 400];
    y_sectores = [ 130, 170, 210, 250, 290 ];
    txt_sectores = [ "Informática" , "Administración" , "Publicidad" , "Recursos Humanos" , "Docencia"];
    largo = 800;
    alto = 140;
    f_lupa = 0;
    txt_busqueda = 'Buscá el trabajo de tus sueños';

    barra = createInput(txt_busqueda);
    barra.position(207, 32);
    barra.size(743, 46);
}

function draw() {
    background(255);
    logo();
    anuncios();
    busqueda();
    sectores();
    links();
}

function anuncios() {
    for(var i = 0; i < y.length; i++){
        if(mouseX >= 200 && mouseX <= (200 + largo) && mouseY >= y[i] && mouseY <= (y[i] + alto))
            fill(20, 20, 20);
        else
            fill(200);
        rect(200, y[i], largo, alto, 5);
    }
}

function logo(){
    push();
    fill(161, 77, 47);
    noStroke();
    rect(40, 20, 110, 60, 2);
    rect(80, 12, 30, 10, 2);
    fill(255);
    rect(40, 38, 110, 3);
    rect(84, 16, 22, 3);
    rect(80, 34, 30, 11, 2);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("LABUR.AR", 95, 62);
    fill(161, 77, 47);
    rect(83, 37, 24, 5);
    pop();
}

function busqueda() {
    push();
    fill(255);
    rect(200, 25, largo, 50, 5);            //barra
    fill(80, 130, 220);
    rect(950, 25, 50, 50, 0, 1, 1, 0);      //busqueda
    stroke(255);
    strokeWeight(4);
    line(973,47,984,58);
    fill(255);
    noStroke();
    ellipse(973, 47, 15);                   //lupa
    fill(80, 130, 220);
    ellipse(973, 47, 8);

    if(f_lupa == 1){                        //cartel de "no hay trabajo"
        fill(255, 200, 120);
        stroke(0);
        strokeWeight(1);
        rect(1050, 25, 200, 150, 2);
        textSize(15);
        textAlign(CENTER,CENTER);
        fill(0);
        text("No hay trabajo para vos", 1150, 100);
    }
    pop();
}

function mouseClicked(){
    if(mouseX >= 950 && mouseX <= 1000 && mouseY >= 25 && mouseY <= 75){      //click en lupa 
        f_lupa = 1;
        txt_busqueda = ' ';
    } else {
        f_lupa = 0;
    }
}

function sectores(){
    push();
    fill(230);
    rect(20, 100, 150, 230);
    for(var i = 0; i < y_sectores.length; i++){
        if(mouseX >= 40 && mouseX <= 145 && mouseY >= (y_sectores[i]-10) && mouseY <= y_sectores[i]){
            fill(0, 0, 255);
            textStyle(ITALIC);
        } else
            fill(0);
        text(txt_sectores[i], 40, y_sectores[i]);
        textStyle(NORMAL);
    }
    pop();
}

function links() {
    push();
    fill(230);
    rect(20, 310, 150, 230);
    image(link1, 94, 375);
    image(link2, 94, 480);
    A_link1.position(44, 325);
    A_link2.position(44, 430);
    pop();
}