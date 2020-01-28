// Duncan Vaughan
// 12/16/19

var ship;
var planet = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadPlanet(4);
  loadShip();
}

function draw() {
  // put drawing code here
  background(20,20,20);
  runPlanets();
  runShip();
}

function loadPlanet(n){
  for(var i = 0; i < n; i++){
    planet[i] = new Planet(random(25,775), random(25,775), 0, 0, -1)
  }// end for loop
}

function loadShip(){
  ship = new Ship(random(width), random(height), random(-2,2), random(-2,2));
}

function runPlanets(){
  for(var i = 0; i < planet.length; i++){
    planet[i].run();
  }
}

function runShip(){
  ship.run();
}
