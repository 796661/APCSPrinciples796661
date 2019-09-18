// Duncan Vaughan
// 8/21/19

var paddle;
var balls = []
var a;
var gameState = 1;
var gameMode;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(250,250,250);//background color
  //loadObjects(3);

}

function draw() {
  // put drawing code here
  background(250,250,250);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }

}

function startGame(){
//title
  fill(2, 2, 2);
  textSize(80);
  text('Paddle Game', 150, 150);
//easy mode
  fill(0, 150, 255);
  rect(200, 600, 60, 60);
  textSize(25);
  text('Easy Mode', 170, 690);
//normal mode
  fill(50, 200, 60);
  rect(400, 600, 60, 60);
  text('Normal Mode', 360, 690);
//hard mode
  fill(255, 50, 60);
  rect(600, 600, 60, 60);
  text('Hard Mode', 570, 690);
  //mode selecter
  isTouching();
  if(gameMode === 'easy' || gameMode === 'normal' || gameMode === 'hard'){
    gameState === 2;
  }
}

function isTouching() {
  if(mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 260 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 'easy'
  }
  if(mouseIsPressed &&
    mouseX > 400 &&
    mouseX < 460 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 'normal'
    }
  if(mouseIsPressed &&
    mouseX > 600 &&
    mouseX < 660 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 'hard'
    }
}

function playGame(){
  if(gameMode === 'easy'){

  }
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
