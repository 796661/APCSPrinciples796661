// Duncan Vaughan
// 10/31/19

var squares = [];
var segments = [];
var food = 0;
var score = 0;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  loadSquares();
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
  }
}
function loadSquares(){
  for (var i = 0; i < 32; i++){
  for(var x = 0; x < 32; x++){
    if(i%2===0){
      if(x%2===0){
        var shade=color(255, 255, 255);
      }
      if(x%2!==0){
        var shade=color(255, 255, 255);
      }
    }
    if(i%2!==0){
      if(x%2!==0){
        var shade=color(255, 255, 255);
      }
      if(x%2===0){
        var shade=color(255, 255, 255);
      }
    }
    squares[x+(32*i)]= new Square(25*x, 25*i, 25, 25, shade);
    }
  }
}
