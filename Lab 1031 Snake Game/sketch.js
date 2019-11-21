// Duncan Vaughan
// 10/31/19
segments = [];
numberFood = 0;
food = [];
score = 0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);//background color
  loadSnake();
  loadFood();
  eatFood = 'no';
  frameRate(10);
}

function draw(){
  runSnake();
  runFood();
  if(eatFood === 'yes'){
    numberFood = numberFood + 1;
    eatFood = 'no';
  }

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
