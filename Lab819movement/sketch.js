//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x;
var y;
var speedx;
var speedy;

function setup() {
  x = 255;
  y = 255;
  speedx = random(-2, 10);
  speedy = random(-3, 3);


  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

}

//  The draw function is called @ 30 fps


function draw() {
  x = speedx + x
  y = speedy + y
  fill(255, 16, 30);
  ellipse(x, y, 50, 50);
if ((x > 825) || (x < -25)){
    x = 255}
if ((y > 825) || (y < -25)){
    y = 255}
}
