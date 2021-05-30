var circ_r, circ_g, circ_b;
var cat_x = [];
var cat_y = [];
var cat_rotacion = [];
var cat_cos = [];
var cat_sin = [];
var cat_transparencia = [];
var cat_transparencia_aux = [];
var link1, link2;
var A_link1, A_link2, A_link3;
var B_link1, B_link2, B_link3;

function setup() {
    createCanvas(1300, 600);
    link1 = loadImage('img/link6.png');
    link2 = loadImage('img/link1.png');
    imageMode(CENTER);
    A_link1 = createA('audio.html', 'cuadrad');
    A_link1.style('color','rgba(0, 0, 0, 0)');
    A_link1.style('font-size','35px');
    
    A_link2 = createA('audio.html', 'cuadrad');
    A_link2.style('color','rgba(0, 0, 0, 0)');
    A_link2.style('font-size','35px');
    
    A_link3 = createA('audio.html', 'cuadrad');
    A_link3.style('color','rgba(0, 0, 0, 0)');
    A_link3.style('font-size','35px');
    
    
    B_link1 = createA('laburo.html', 'laburos');
    B_link1.style('color','rgba(0, 0, 0, 0)');
    B_link1.style('font-size','35px');
    
    B_link2 = createA('laburo.html', 'laburos');
    B_link2.style('color','rgba(0, 0, 0, 0)');
    B_link2.style('font-size','35px');
    
    B_link3 = createA('laburo.html', 'laburos');
    B_link3.style('color','rgba(0, 0, 0, 0)');
    B_link3.style('font-size','35px');
    
    A_link1.position(-150, height/2 + 68);
    A_link2.position(-150, height/2 + 103);
    A_link3.position(-150, height/2 + 138);
    B_link1.position(-150, height/2 + 68);
    B_link2.position(-150, height/2 + 103);
    B_link3.position(-150, height/2 + 138);
    
    circ_aux = 0;
    start = 0;
    presion = 60;
    cat_transparencia[4] = 80;
    tiempo = 0;
    medio_seg = 0;


    cat_x[0] = random(width);
    cat_y[0] = random(height/2 - 100);
    cat_rotacion[0] = random(TWO_PI);
    cat_cos[0] = cos(cat_rotacion[0]);
    cat_sin[0] = sin(cat_rotacion[0]);
    cat_transparencia[0] = 0;
    cat_transparencia_aux[0] = 0;

    cat_x[1] = random(width);
    cat_y[1] = random(height/2 + 100, height);
    cat_rotacion[1] = random(TWO_PI);
    cat_cos[1] = cos(cat_rotacion[1]);
    cat_sin[1] = sin(cat_rotacion[1]);
    cat_transparencia[1] = 0;
    cat_transparencia_aux[1] = 0;

    cat_x[2] = random(width);
    cat_y[2] = random(height/2 - 100);
    cat_rotacion[2] = random(TWO_PI);
    cat_cos[2] = cos(cat_rotacion[2]);
    cat_sin[2] = sin(cat_rotacion[2]);
    cat_transparencia[2] = 0;
    cat_transparencia_aux[2] = 0;

    cat_x[3] = random(width);
    cat_y[3] = random(height/2 + 100, height);
    cat_rotacion[3] = random(TWO_PI);
    cat_cos[3] = cos(cat_rotacion[3]);
    cat_sin[3] = sin(cat_rotacion[3]);
    cat_transparencia[3] = 0;
    cat_transparencia_aux[3] = 0;
}

function draw() { 
    catarsis();
    f_medio_seg();
    if(medio_seg >= 180){
        image(link1, width/2 - 100, height/2 + 120);
        image(link2, width/2 + 100, height/2 + 120);
        A_link1.position(width/2 - 148, height/2 + 70);
        A_link2.position(width/2 - 148, height/2 + 105);
        A_link3.position(width/2 - 148, height/2 + 140);
        B_link1.position(width/2 + 55, height/2 + 70);
        B_link2.position(width/2 + 55, height/2 + 105);
        B_link3.position(width/2 + 55, height/2 + 140);
    }
    
    if(mouseX != 0 && mouseY != 0)
        start = 1;

    if(start)
        circ_color();
}

function circ_color() {
    circ_aux++;

    if(circ_aux == 10){
        circ_r = random(256);
        circ_g = random(256);
        circ_b = random(256);
        fill(circ_r, circ_g, circ_b, presion);
        circ_aux = 0;
    }

    noStroke();
    rect(mouseX, mouseY, 25, 25);
}

function catarsis() {
    push();
    fill(0, cat_transparencia[4]);
    textSize(200);
    textAlign(CENTER, CENTER);
    text("CATARSIS", width/2, height/2);

    if(medio_seg > 20){
        fill(0, cat_transparencia[0]);
        if(cat_transparencia_aux[0] == 0)
            cat_transparencia_aux[0] = 1;
        textSize(50);
        translate(cat_x[0], cat_y[0]);
        applyMatrix(cat_cos[0], cat_sin[0], -cat_sin[0], cat_cos[0], 0, 0);
        text("catarsis", 0, 0);
        resetMatrix();
    }
    
    if(medio_seg > 40){
        fill(0, cat_transparencia[1]);
        if(cat_transparencia_aux[1] == 0)
            cat_transparencia_aux[1] = 1;
        textSize(100);
        translate(cat_x[1], cat_y[1]);
        applyMatrix(cat_cos[1], cat_sin[1], -cat_sin[1], cat_cos[1], 0, 0);
        text("catarsis", 0, 0);
        resetMatrix();
    }
    
    if(medio_seg > 60){
        fill(0, cat_transparencia[2]);
        if(cat_transparencia_aux[2] == 0)
            cat_transparencia_aux[2] = 1;
        textSize(80);
        translate(cat_x[2], cat_y[2]);
        applyMatrix(cat_cos[2], cat_sin[2], -cat_sin[2], cat_cos[2], 0, 0);
        text("catarsis", 0, 0);
        resetMatrix();
    }
    
    if(medio_seg > 80){
        fill(0, cat_transparencia[3]);
        if(cat_transparencia_aux[3] == 0)
            cat_transparencia_aux[3] = 1;
        textSize(150);
        translate(cat_x[3], cat_y[3]);
        applyMatrix(cat_cos[3], cat_sin[3], -cat_sin[3], cat_cos[3], 0, 0);
        text("catarsis", 0, 0);
        resetMatrix();
    }

    pop();
}

function f_medio_seg() {
    tiempo++;
    if(tiempo >= 30){
        medio_seg++;
        tiempo = 0;
        cat_transparencia[4]--;

        for(var i = 0; i < cat_transparencia_aux.length; i++){
            if(cat_transparencia_aux[i] == 1){
                cat_transparencia[i]++;
                if(cat_transparencia[i] >= 30)
                    cat_transparencia_aux[i] = 2;
            }
            if(cat_transparencia_aux[i] == 2 && cat_transparencia[i] >= 0)
                cat_transparencia[i]--;
        }
    }
}

function mousePressed() {
    presion = 255;
}

function mouseReleased() {
    presion = 80;
}