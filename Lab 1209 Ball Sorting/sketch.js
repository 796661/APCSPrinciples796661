//  Duncan Vaughan
// 	12/9/19
var balls = [];

function setup(){
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);
  loadballs();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
//runs the sorting method
function draw(){
  bubblesort();
}
//moves the balls
function move(){
  for(var i = 0; i < balls.length; i++){
    balls[i].set(i);
  }
  background(235);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
//the actual sorting code
function bubblesort(){
  for(var j = 0; j < balls.length - 1; j++){
    if(balls[j].r < balls[j+1].r){
      swap(balls, j, j+1);
      move();
    }
  }
}
//loads in the array of balls
function loadballs(){
  for (var x = 0; x < 25; x++){
    balls[x]= new Ball((30 * x), 400, 30, 30)
  }
}
//the swap code
function swap(list, a, b){
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
