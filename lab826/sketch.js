// Duncan Vaughan
// 8/21/19

var balls = []
var squares = []
var triangles = []
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadBalls(10)
  loadSquares(10)
  loadTriangles(10)
}

function draw() {
  // put drawing code here
  background(20,20,20);
  runBalls();
  runSquares();
  runTriangles();
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
    squares[i] = new Square(random(width), random(height), random(-5,5), random(-5,5));
  }
}
function runSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].run();
  }
}
function loadTriangles(n){
  for(var i = 0; i < n; i++){
    triangles[i] = new Triangle(random(width), random(height), random(-5,5), random(-5,5));
  }
}
function runTriangles(){
  for(var i = 0; i < triangles.length; i++){
    triangles[i].run();
  }
}
