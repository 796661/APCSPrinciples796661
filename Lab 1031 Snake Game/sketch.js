// Duncan Vaughan
// 10/31/19
segments = [];
numberFood = 0;
food = [];
score = 0;
gamestate = 1;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);//background color
  loadSnake();
  loadFood();
  endGame = 'false';
  eatFood = 'no';
  frameRate(10);
}

function draw(){
  background(20,20,20);
  if(gamestate === 1){
    startGame();
  }else if(gamestate === 2){
    playGame();
  }else if(gamestate === 3){
    endScreen();
  }

}

function startGame(){
  //title
  fill(255, 255, 255);
  textSize(80);
  text('Snake', 280, 150);
  textSize(25);
  text('Click the start box to begin the game. You are the blue snake',50,350);
  text('After you start, use the arrow keys to move the snake',50,375);
  text('Your goal is to eat as much food as possible. If you',50,400);
  text('eat a food, you grow one length. Do not run into yourself,',50,425);
  text('you will die from it, and the game will end. Good luck!',50,450);
  fill(0,255,0)
  text('Start',375,550);
  rect(375,575,50,50);

  text('');
  if(mouseIsPressed &&
    mouseX > 375 &&
    mouseX < 425 &&
    mouseY > 575 &&
    mouseY < 625){
      clear();
      gamestate = 2;
  }
}

function playGame(){
  runSnake();
  runFood();
  if(eatFood === 'yes'){
    numberFood = numberFood + 1;
    eatFood = 'no';
  }
  if(endGame === 'true'){
    clear();
    gamestate = 3;
  }
}

function endScreen(){
  background(20,20,20);
  //prints a ending screen, says you lost and provides score
  textSize(25);
  fill(255,0,0);
  text('You lost! How unfortunate. You got a score of '+ numberFood, 175,200);
  text('If your score was above 20, Good Job!',175,230);
  text('If you did not get more than 20, keep trying!', 175, 260);
}

function loadSnake(){
  head = new Snake(10, 10, 0, 0, 32, color(0, 0, 255));
}
function loadFood(){
  food[0] = new Food(int(random(25)), int(random(25)), 32);
}
function runSnake(){
  background(20, 20, 20);
  head.run();
}
function runFood(){
  food[0].run();
}
