// Duncan Vaughan
// 10/31/19

segments = [];
var head;
score = 0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(1,1,1);//background color
  loadHead();
}

function draw(){
  runSnake();
}
function loadHead(){
  head = new Snake(0, 0, 50, 50, color(0, 255, 0));
}
function runSnake(){
  background(1,1,1);
  head.run();
}
