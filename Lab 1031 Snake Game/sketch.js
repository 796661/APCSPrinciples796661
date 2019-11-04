// Duncan Vaughan
// 10/31/19

var squares = [];
var segments = [];
var food = 0;
hitFood = 'no';
var score = 0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadSnake();
}

function draw(){
  runSnake();
}
function loadSnake(){
  segments[0] = new Snake(0,0,50,50,0);
}
function runSnake(){
  for (var i=0; i<segments.length; i++){
    segments[i].run();
    if (hitFood==='yes'){
      segments[i+1]= new Snake(segments[i].loc.x-segments[i].w,segments[i].loc.y,50,50,i+1);
      hitFood='no';
    }
  }
}
