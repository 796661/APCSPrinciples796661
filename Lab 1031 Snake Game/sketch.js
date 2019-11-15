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
  background(1,1,1);//background color
//  loadHead();
  loadFood();
  frameRate(10);
}

function draw(){
  //runSnake();
  runFood();
}
//function loadHead(){
//  head = new Snake(0, 0, 50, 50, this.clr);
//}
function loadFood(){
  food[0] = new Food(int(random(40)), int(random(40)), 10, 0)
}
//function runSnake(){
  //background(1,1,1);
//  head.run();
//}
function runFood(){
  food[0].run();
}
