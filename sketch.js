function setup() {
  createCanvas(401, 400);
}

function draw() {
  background(220);
}

var x = 0; /*es como una cajita y le entrego nombres, son variables, "=" no es igual es asignación, esto es ¿? "==" es igual y "-==" es desigual es como un if,
let es usado en momentos determinados y utiliza menos ram*/
var y = 0; 
var mesa; /*este antes decia var, pero el const lo hace constante*/

function setup() {
  mesa = createCanvas(windowWidth, windowHeight); /*declaramos con var el canvas y aca le damos un valor, el canvas puede tener cualquier nombre*/
  mesa.parent("cuerpo"); /*crea un canvas pero ese canvas metelo en donde este el id cuerpo*/
  mesa.position(0,0); /* el 0,0 es la esquina entonces parte desde ahi y sigue la instruccion de q sea del tamaño de la pantalla*/
  mesa.style('z-index','-1'); /*aca el -1 es que lo tiro para atras*/
  noStroke();
  frameRate(10);
}

function draw() {
  /*background(map(mouseX, windowWidth, 255, 0, 200), 85, 30);*/
  colorMode(HSB,359,100,100)
  background(map(mouseX, 0, windowWidth, 180, 223), 30,map(mouseY, 0, windowHeight, 60, 85));
  x = lerp(x, mouseX, 1.1); /* el numero puede q sea el eje en el q esta*/
  y = lerp(y, mouseY, 1.1);
  fill("white");
  textSize(random(50,100));
  text("🐡",x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


