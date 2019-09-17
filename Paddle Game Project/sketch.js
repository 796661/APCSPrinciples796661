// Duncan Vaughan
// 8/21/19

var paddle;
var balls = []
var a;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(250,250,250);//background color
  loadObjects(3);

}

function draw() {
  // put drawing code here
  background(250,250,250);
  runObjects();
  fill(2, 2, 2,);
  textSize(30);
  text('Score:' + a, 50, 30);
}
function loadObjects(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800), random(300), random(-5, 5), random(-10, 10));
  }
  paddle = new Paddle(250, 800, 400, 25);
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
