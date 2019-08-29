// Duncan Vaughan
// 8/21/19

var b1, b2, b3, b4;
function setup() {
  // put setup code here
  var cnv = createCanvas(800,800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);//background color
  b1 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  b2 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  b3 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  b4 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
}

function draw() {
  // put drawing code here
  background(20,20,20);
  b1.run();
  b2.run();
  b3.run();
  b4.run();
}
