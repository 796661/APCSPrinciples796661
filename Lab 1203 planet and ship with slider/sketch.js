// Duncan Vaughan
// 8/21/19

var ship;
var planet;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  sliderAttraction= createSlider(0,5,2.5);
  sliderAttraction.position(200,400);
  sliderLimit= createSlider(0,5,2.5);
  sliderLimit.position(200,450);
  sliderNumber= createSlider(0,10,5);
  sliderNumber.position(200,500);
  value= sliderNumber.value();
  loadObjects(sliderNumber.value());
}

function draw() {
  // put drawing code here
  background(20,20,20);
  if(value!=sliderNumber.value()){
    loadShip(sliderNumber.value());
    value=sliderNumber.value();
  }
  runObjects();
}
function loadObjects(n){
  planet = new Planet(width/2, height/2, random(-1,1), random(-1,1), -1);
  for(var i = 0; i < n; i++){
    ship = new Ship(random(width), random(height), random(-2,2), random(-2,2), i);
  }
}
function runObjects(){
  planet.run();
  for(var i = 0; i < ship.length; i++){
    ship.run();
  }
}
