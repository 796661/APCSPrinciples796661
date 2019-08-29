// Duncan Vaughan
// 8/21/19

var balls = []
var sqaures = []
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadBalls(50)
  loadSquares(50)
}

function draw() {
  // put drawing code here
  background(20,20,20);
  runBalls();
  runSquares();
}
function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  }
}
function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
function loadSquares(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Square(random(width), random(height), random(-5,5), random(-5,5));
  }
}
function runSquares(){
  for(var i = 0; i < square.length; i++){
    squares[i].run();
  }
}
