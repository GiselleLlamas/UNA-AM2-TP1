var x = [];
var y = [];
var num_random_x = 0;
var num_random_y = 0;
var circ_color = [];
var circ_radio = [];
var link;
var A_link;

function setup() {
  createCanvas(1300, 600);
  /*link = loadImage('img/link8.png');*/
  /*A_link = createA('posters.html', 'posters');*/
  imageMode(CENTER);
  noStroke();
  tiempo = 0;
  seis_seg = 0;
  seg = 0;
  color_circulo_aux = 0;
  crecimiento = 0.2
  win = false;
}

function draw(){
  segundos();
  background("gray");
  circulos();
  for(var i=0; i<x.length; i++){
    fill(circ_color[i]);
    ellipse(x[i], y[i], circ_radio[i]);
    circ_radio[i] += crecimiento;
    if(circ_radio[i] >= width)
      win = true;
  }

  push();
  fill(0);
  if(win){
    textSize(50);
    textAlign(CENTER,CENTER);
    text("NO SE PUEDE TAPAR",width/2,(height/2 - 25));
    text("EL SOL CON LAS MANOS",width/2,(height/2 + 25));
    A_link.position(width/2 - 50, height/2 + 70);
    image(link, width/2, height/2 + 120);
  }
  pop();
}

function segundos() {
    tiempo++;
    if(tiempo >= 60){
        seg++;
        seis_seg++;
        tiempo = 0;
    }
}

function circulos() {
  if( seis_seg >= 6){
    num_random_x = random(width);
    num_random_y = random(height);
    x.push(num_random_x);
    y.push(num_random_y);
    
    circ_radio.push(0);
    
    color_circulo_aux = random(9);
    if(color_circulo_aux >= 0 && color_circulo_aux < 1)
        circ_color.push(color(228,3,3));      //rojo
    else if(color_circulo_aux >= 1 && color_circulo_aux < 2)
        circ_color.push(color(255,140,0));    //naranja
    else if(color_circulo_aux >= 2 && color_circulo_aux < 3)
        circ_color.push(color(255,237,0));    //amarillo
    else if(color_circulo_aux >= 3 && color_circulo_aux < 4)
        circ_color.push(color(0,128,38));     //verde
    else if(color_circulo_aux >= 4 && color_circulo_aux < 5)
        circ_color.push(color(0,77,255));     //azul
    else if(color_circulo_aux >= 5 && color_circulo_aux < 6)
        circ_color.push(color(117,7,135));    //violeta
    else if(color_circulo_aux >= 6 && color_circulo_aux < 7)
        circ_color.push(color(91,206,250));     //celeste
    else if(color_circulo_aux >= 7 && color_circulo_aux < 8)
        circ_color.push(color(245,169,184));     //rosa
    else if(color_circulo_aux >= 8)
        circ_color.push(color(255));     //blanco
    
    seis_seg = 0;
  }
}

function mouseClicked(){
  for(var i=0; i<x.length; i++){
    if(mouseX >= (x[i] - circ_radio[i]) && mouseX <= (x[i] + circ_radio[i]) && mouseY >= (y[i] - circ_radio[i]) && mouseY <= (y[i] + circ_radio[i])){
      circ_radio[i] -= 5;
    }
  }
}