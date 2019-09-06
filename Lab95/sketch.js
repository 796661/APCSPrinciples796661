// Duncan Vaughan
// 8/21/19

var balls = []
var mainBall = []
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
loadBalls(2500)

}

function draw() {
  // put drawing code here
  background(20,20,20);
  runBalls();

}
function loadBalls(n){
  mainBall = new Ball(width/2, height/2, random(-1,1), random(-1,1), -1);
    for(var i = 0; i < n; i++){
      balls[i] = new Ball(random(width), random(height), random(-2,2), random(-2,2), i);
  }
}
function runBalls(){
  mainBall.run();
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
  }
}
