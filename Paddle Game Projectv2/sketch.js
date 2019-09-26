// Duncan Vaughan
// 8/21/19

var paddle;
var balls = []
var gameState = 1;
var gameMode;
var score = 0;
var health = 10;
var win;
var wave = 1;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  //loadObjects(3);

}

function draw() {
  // put drawing code here
  background(20,20,20);
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
  fill(255, 255, 255);
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
  text('Medium Mode', 360, 690);
//hard mode
  fill(255, 50, 60);
  rect(600, 600, 60, 60);
  text('Hard Mode', 570, 690);
  //mode selecter
  isTouching();
  if(gameMode === 1 || gameMode === 2 || gameMode === 3){
    clear();
    if(gameMode === 1){
      loadObjects(5);
    }
    if(gameMode === 2){
      loadObjects(10);
    }
    if(gameMode === 3){
      loadObjects(20);
    }
    gameState = 2;
  }
}

function isTouching() {
  if(mouseIsPressed &&
    mouseX > 200 &&
    mouseX < 260 &&
    mouseY > 600 &&
    mouseY < 660){
      console.log('easy');
      gameMode = 1;
  }
  if(mouseIsPressed &&
    mouseX > 400 &&
    mouseX < 460 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 2;
    }
  if(mouseIsPressed &&
    mouseX > 600 &&
    mouseX < 660 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 3;
    }
}

function playGame(){
  background(20, 20, 20);
  fill(255,255,255);
  textSize(25)
  text('Score' + score, 20, 20);
  text('Health' + health, 700, 20)
  runObjects();
  if(health <= 0){
    clear();
    gameState = 3;
    win = 'no';
  }
  if(wave === 4){
    clear();
    gameState = 3;
    win='yes';
  }
}

function endGame(){
  background(20,20,20);
  if(win === 'no'){
    textSize(100);
    fill(255,50,0);
    text('You lose', 200, 350);
    text('game over', 185, 450);
  }
  if(win==='yes'){
    textSize(100);
    fill(255,0,0);
    text("You Win!",200,400);
  }
}


function loadObjects(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(0, 800), random(0, 300), random(-5, 5), random(-10, 10));
  }
  paddle = new Paddle(250, 775, 400, 25);
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
