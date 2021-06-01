var y = [];
var y_sectores = [];
var txt_sectores = [];
var barra;
var f_lupa;
var txt_busqueda;
var link1, link2;
var A_link1, A_link2, A_link3;
var B_link1, B_link2, B_link3;
var sector;

function setup() {
    createCanvas(1300,600);
    link1 = loadImage('img/link3.png');
    link2 = loadImage('img/link7.png');
    imageMode(CENTER);
    
    A_link1 = createA('oscuro.html', '_oscuro');
    A_link1.style('color','rgba(0, 0, 0, 0)');
    A_link1.style('font-size','35px');
  
    A_link2 = createA('oscuro.html', '_oscuro');
    A_link2.style('color','rgba(0, 0, 0, 0)');
    A_link2.style('font-size','35px');
  
    A_link3 = createA('oscuro.html', '_oscuro');
    A_link3.style('color','rgba(0, 0, 0, 0)');
    A_link3.style('font-size','35px');
    
    B_link1 = createA('mensajes.html', 'mensaje');
    B_link1.style('color','rgba(0, 0, 0, 0)');
    B_link1.style('font-size','35px');
  
    B_link2 = createA('mensajes.html', 'mensaje');
    B_link2.style('color','rgba(0, 0, 0, 0)');
    B_link2.style('font-size','35px');
  
    B_link3 = createA('mensajes.html', 'mensaje');
    B_link3.style('color','rgba(0, 0, 0, 0)');
    B_link3.style('font-size','35px');
    
    y = [ 100, 250, 400];
    y_sectores = [ 130, 170, 210, 250, 290 ];
    txt_sectores = [ "Informática" , "Administración" , "Publicidad" , "Recursos Humanos" , "Docencia"];
    largo = 800;
    alto = 140;
    f_lupa = 0;
    sector = 0;
    txt_busqueda = 'Buscá el trabajo de tus sueños';

    barra = createInput(txt_busqueda);
    barra.position(207, 32);
    barra.size(743, 46);
}

function draw() {
    background(255);
    logo();
    anuncios();
    textos_anuncios();
    busqueda();
    sectores();
    links();
}

function anuncios() {
    push();
    for(var i = 0; i < y.length; i++){
        if(mouseX >= 200 && mouseX <= (200 + largo) && mouseY >= y[i] && mouseY <= (y[i] + alto))
            fill(0);
        else
            fill(200);
        rect(200, y[i], largo, alto, 5);
    }
    pop();
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
    
    if(mouseX >= 40 && mouseX <= 145){
        if(mouseY >= (y_sectores[0]-10) && mouseY <= y_sectores[0]){
            sector = 0;
        }else if(mouseY >= (y_sectores[1]-10) && mouseY <= y_sectores[1]){
            sector = 1;
        }else if(mouseY >= (y_sectores[2]-10) && mouseY <= y_sectores[2]){
            sector = 2;
        }else if(mouseY >= (y_sectores[3]-10) && mouseY <= y_sectores[3]){
            sector = 3;
        }else if(mouseY >= (y_sectores[4]-10) && mouseY <= y_sectores[4]){
            sector = 4;
        }
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
    A_link1.position(45, 322);
    A_link2.position(45, 357);
    A_link3.position(45, 392);
    
    B_link1.position(45, 427);
    B_link2.position(45, 462);
    B_link3.position(45, 497);
    pop();
}

function textos_anuncios(){
    push();
    fill(0);
    textAlign(LEFT,CENTER);
    switch(sector){
        case 0:                                        //informatica
            textSize(30);
            text("Programador Full Stack", 215, 135);
            text("Servicio Técnico", 215, 285);
            text("Desarrollador C/C++", 215, 435);
            textSize(12);
            text("En Comercio Libre S.A nos encontramos en búsqueda de Programador Full Stack para dar soluciones móviles y trabajar en proyectos", 215, 180);
            text("innovadores con visibilidad en el exterior.", 215, 200);
            text("Responsabilidades:", 215, 330);
            text("- Reinstalación y Manejo de sistemas operativos (Windows, Linux)(...)", 215, 350);
            text("Requisitos", 215, 480);
            text("Contar con experiencia comprobable en Desarrollo C/C++ no menor a dos años.(...)", 215, 500);
            break;
        case 1:                                        //administracion
            textSize(30);
            text("Administrativa", 215, 135);
            text("Recepcionista", 215, 285);
            text("Contador Público", 215, 435);
            textSize(12);
            text("Importante empresa aceitera busca administrativa tareas generales, con conocimientos en facturacion.", 215, 180);
            text("Titulo secundario completo(...)", 215, 200);
            text("Nos encontramos en busqueda de una recepcionista para nuestras sucursales ubicadas en Capital Federal.", 215, 330);
            text("Orientamos la busqueda a candidatos/as con vocacion de servicio, con gran orientacion al cliente y resolutivo/a.(...)", 215, 350);
            text("Se busca joven profesional en Ciencias Económicas, con sólidos conocimientos contables e impositivos y excelente dominio de excel y sistema", 215, 480);
            text("de gestión contable. Serán sus tareas, imputación de comprobantes, conciliaciones bancarias, conciliaciones impositivas, conciliaciones(...)", 215, 500);
            break;
        case 2:                                        //publicidad
            textSize(30);
            text("Community Manager", 215, 135);
            text("promotor/vendedor", 215, 285);
            text("Asistente de Marketing", 215, 435);
            textSize(12);
            text("Nos encontramos en la búsqueda de un Comunity manager, para gestionar nuestras redes sociales con orientación a marketing digital.", 215, 180);
            text("Responsabilidades:(...)", 215, 200);
            text("Nos encontramos en la búsqueda de un Activador de Punto de Venta / vendedor para importante empresa de bebidas alcohólicas en zona norte.", 215, 330);
            text("Orientamos la búsqueda a personas proactivas, dinámicas y desenvueltas, con marcado perfil comercial y orientación al cliente y deben (...)", 215, 350);
            text("Buscamos jóvenes profesionales de las carreras de Lic. en Marketing, Lic. en Comunicación Social, Lic. en Relaciones Públicas.", 215, 480);
            text("Sus principales tareas serán:(...)", 215, 500);
            break;
        case 3:                                        //recursos humanos
            textSize(30);
            text("Analista de RRHH", 215, 135);
            text("Selector/a de personal Sr.", 215, 285);
            text("Pasante RRHH", 215, 435);
            textSize(12);
            text("Para importante empresa del rubro agropecuario incorporaremos Analista de Recursos Humanos en Embarcación, provincia de Salta.", 215, 180);
            text("Se valorará conocimiento y experiencia en industrias del rubro y tareas afines. Será responsable de la gestión del personal en tareas(...)", 215, 200);
            text("Nos encontramos en la búsqueda de un Selector/a para nuestra sucursal de Rosario. Nos orientamos a estudiantes o graduados de las carreras", 215, 330);
            text("de Psicología, RRHH, Administración o afines. Es imprescindible poseer una experiencia no menor a tres años en selección de personal de(...)", 215, 350);
            text("Importante empresa regional, se encuentra en búsqueda de estudiantes próximos a recibirse de la carrera de Recursos Humanos.", 215, 480);
            text("Tendrá entre sus responsabilidades:(...)", 215, 500);
            break;
        case 4:                                        //docencia
            textSize(30);
            text("Docente de Cs. Sociales - Secundario", 215, 135);
            text("Asesor pedagógico", 215, 285);
            text("Profesor Online en Capital Federal", 215, 435);
            textSize(12);
            text("Estamos buscando Lic. en Historia, que sean egresados o estudiantes del Profesorado en Historia / Geografía, para nuestra Escuela", 215, 180);
            text("Secundaria.(...)", 215, 200);
            text("Principales responsabilidades:", 215, 330);
            text("- Gestionar la implementación de los procesos didácticos pedagógicos.(...)", 215, 350);
            text("Estamos buscando a los mejores profesores o estudiantes universitarios, capacitados para ser profesores virtuales.", 215, 480);
            text("Se busca licenciado/a en Artes Multimediales o una disciplina afín para trabajar con estudiantes de 2° año", 215, 500);
            break;
        default:                                        //informatica
            textSize(30);
            text("Programador Full Stack", 215, 135);
            text("Servicio Técnico", 215, 285);
            text("Desarrollador C/C++", 215, 435);
            textSize(12);
            text("En Comercio Libre S.A nos encontramos en búsqueda de Programador Full Stack para dar soluciones móviles y trabajar en proyectos", 215, 180);
            text("innovadores con visibilidad en el exterior.", 215, 200);
            text("Responsabilidades:", 215, 330);
            text("- Reinstalación y Manejo de sistemas operativos (Windows, Linux)(...)", 215, 350);
            text("Requisitos", 215, 480);
            text("Contar con experiencia comprobable en Desarrollo C/C++ no menor a dos años.(...)", 215, 500);
            break;
    }
    pop();
}