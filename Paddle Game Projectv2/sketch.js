// Duncan Vaughan
// 1001 PaddleGame

var paddle;
var balls = []
var gameState = 1;
var gameMode = 0;
var score = 0;
var health = 10;
var win;
var wave = 1;
var buttons = [];
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadButtons();

}
class Button{
  constructor(x,y,w,h){
    this.loc = createVector(x,y);
    this.w = w;
    this.h = h;
    this.clr = color(random(255),random(255),random(255));
  }
  run(){
    this.render();
    this.checkEdges();
  }
  render(){
    //loads buttons
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
    //for start screen
    if(gameState === 1){
      textSize(25);
      fill(0, 150, 255);
      text('Easy Mode', 120, 690);
      fill(50, 200, 60);
      text('Medium Mode', 260, 740);
      fill(255, 50, 60);
      text('Hard Mode', 420, 690);
      fill(255, 255, 255);
      text('Endless Mode', 560, 740);
    }//for end screen
    if(gameState === 3){
      textSize(35);
      fill(255, 255, 255);
      text('Play Again?', 150, 600);
      fill(255, 255, 255);
      text('Quit?', 650, 600);
    }
  }
  checkEdges(){
    isTouching();
  }
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
  textSize(50);
  runButtons();
  textSize(25);
  text('Welcome! To play, select a gamemode by clicking a button.', 90, 250);
  text('Once a gamemode is selected, the balls will appear. You', 90, 280);
  text('want to hit the balls with the top of your paddle, not the', 90, 310);
  text('bottom of the paddle. You start with 10 health, and when that', 90, 340);
  text('reaches zero you lose. You win by making it through all the', 90, 370);
  text('waves of balls. Good luck and try to set a high score!', 90, 400);
  //mode selecter
  isTouching();
  if(gameMode === 1 || gameMode === 2 || gameMode === 3 || gameMode === 4){
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
    if(gameMode === 4){
      loadObjects(4);
    }
    gameState = 2;
  }
}

function isTouching() {
  if(mouseIsPressed &&
    mouseX > 150 &&
    mouseX < 210 &&
    mouseY > 600 &&
    mouseY < 660){
      console.log('easy');
      gameMode = 1;
  }
  if(mouseIsPressed &&
    mouseX > 300 &&
    mouseX < 360 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 2;
    }
  if(mouseIsPressed &&
    mouseX > 450 &&
    mouseX < 510 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 3;
    }
  if(mouseIsPressed &&
    mouseX > 600 &&
    mouseX < 660 &&
    mouseY > 600 &&
    mouseY < 660){
      gameMode = 4;
      console.log('endless mode');
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
  }//end screen buttons
  runButtons();//restart button
  if(mouseIsPressed &&
    mouseX>300&&
    mouseX<360&&
    mouseY>600&&
    mouseY<660){
      clear();
      balls = [];
      gameState = 1;
      gameMode = 0;
      score = 0;
      health = 10;
      win = 'no';
      wave = 1;
      loadButtons();
    }//quit button
    if(mouseIsPressed&&
      mouseX>500&&
      mouseX<560&&
      mouseY>600&&
      mouseY<660){
        remove();
        clear();
    }
}

function runButtons(){
  //for start screen
  if(gameState === 1){
    for(var i = 0; i < buttons.length; i++){
      buttons[i].run();
    }
  }
  //for end screen
  if(gameState === 3){
    for(var i = 0; i < buttons.length; i++){
      buttons[i].run();
    }
  }
}

function loadButtons(){
  //for start screen
  if (gameState === 1){
    for(var i=0; i<4; i++){
      buttons[i]= new Button(150 * (i + 1), 600, 60, 60);
    }
  }
  //for end screen
  if(gameState === 3){
    buttons=[]
    for(var i=0; i<2; i++){
      buttons[i]= new Button(300 + (200 * i), 600, 60, 60);
    }
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
