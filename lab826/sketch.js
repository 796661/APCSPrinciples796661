// Duncan Vaughan
// 8/21/19

var balls = []
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadBalls(400)
}

function draw() {
  // put drawing code here
  background(20,20,20);
  runBalls();
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
