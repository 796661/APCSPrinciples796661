// Duncan Vaughan
// 8/21/19

var paddle;
var ball;
var paddlewidth;
var paddleheight;
paddlewidth = paddle.loc2.x;
paddleheight = paddle.loc2.y;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  fill(200, 30, 150);
  drawPaddle();
  drawBall();

}

function draw() {
  // put drawing code here
  background(20,20,20);
  runPaddle();
  runBall();
}
function drawPaddle(){
  paddle = new Paddle(250, 500, 300, 100);
}
function drawBall(){
  ball = new Ball(400, 50, 50, 50);
}
function runPaddle(){
  paddle.run();
}
function runBall(){
  ball.run();
}
