// Duncan Vaughan
// 8/21/19

var ships = []
var atractor, repeller;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadObjects(1)

}

function draw() {
  // put drawing code here
  background(20,20,20);
  runBalls();

}
function loadObjects(n){
  atractor = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1);
  //repeller = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1);
    for(var i = 0; i < n; i++){
      ships[i] = new Ship(random(width), random(height), random(-2,2), random(-2,2), i);
  }
}
function runBalls(){
  atractor.run();
  //repeller.run();
    for(var i = 0; i < ships.length; i++){
      ships[i].run();
  }
}
