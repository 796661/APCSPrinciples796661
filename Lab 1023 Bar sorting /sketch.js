//  Duncan Vaughan
// 	10/4/19
var bar = [];
var numBars, barWidth;

function setup(){
  var cnv=createCanvas(800,800);
  cnv.position((windowWidth-width)/2,30);
  background(235);

  barWidth = 25;
  numBars = width/barWidth;
  loadBars(numBars);
  runBars();
  BubbleSort();
}

function draw(){
  background(10, 10, 10);
  frameRate(1);
  runBars();
}

function loadBars(num){
  for(var i = 0; i < num; i++){
    var barHeight = Math.floor(random(height));
    var loc = createVector(i*barWidth, barHeight);
    bars[i] = new Bar(loc);
  }
}

function runBars(){
  for(var i=0; i<bars.length; i++){
    bars[i].run();
  }
}

function bubblesort(){
  for (var i=bars.length-1;i>0; i--){
    for (var j=0; j<i; j++){
      if(bars[j].h>bars[j+1].h){
        swap(bars, j, j+1);
        runBars();
      }
    }
  }
}
