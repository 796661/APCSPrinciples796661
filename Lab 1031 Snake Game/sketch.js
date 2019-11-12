// Duncan Vaughan
// 10/31/19

var segments = [];

var score = 0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(255,255,255);//background color
  loadSnake();
}

function draw(){
  runSnake();
}
function loadSnake(){
  segments[0] = new Snake(100, 100, 50, 50, color(255, 0, 0));
}
function runSnake(){
  for (var i = 0; i < segments.length; i++){
    segments[i].run();
  }
}
