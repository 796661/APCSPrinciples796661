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
  for (var i=0;i<8;i++){
  for(var x=0;x<8;x++){
    if(i%2===0){
      if(x%2===0){
        var shade=color(147, 112, 219);
      }
      if(x%2!==0){
        var shade=color(155, 255, 0);
      }
    }
    if(i%2!==0){
      if(x%2!==0){
        var shade=color(147, 112, 219);
      }
      if(x%2===0){
        var shade=color(155, 255, 0);
      }
    }
    squares[x+(8*i)]= new Square(100*x,100*i,100,100, shade);
    }
  }
}
