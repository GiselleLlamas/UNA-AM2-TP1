var y = [];

function setup() {
    createCanvas(1300,600);
    y = [ 100, 250, 400];
    largo = 800;
    alto = 140;
}

function draw() {
    anuncios();
    busqueda();
}

function anuncios() {
    for(var i = 0; i < y.length; i++){
        if(mouseX >= 200 && mouseX <= (200 + largo) && mouseY >= y[i] && mouseY <= (y[i] + alto))
            fill(150, 150, 150);
        else
            fill(200,200,200);
        rect(200, y[i], largo, alto, 5);
    }
}

function busqueda() {
    push();
    fill(255);
    rect(200, 25, largo, 50, 5);
    fill(80, 130, 220);
    rect(950, 25, 50, 50, 0, 5, 5, 0);
    fill(255);
    noStroke();
    ellipse(975, 50, 15);
    pop();
}