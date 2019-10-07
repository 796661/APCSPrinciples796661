// Duncan Vaughan
// 8/21/19

var squares = []
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
  
}
