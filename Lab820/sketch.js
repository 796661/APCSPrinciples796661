//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var x;
var y;
var speedx;
var speedy;
var x2;
var y2;
var speedx2;
var speedy2;
var x3;
var y3;
var speedx3;
var speedy3;

function setup() {
  x = 400;
  y = 400;
  x2 = 250;
  y2 = 400;
  x3 = 550;
  y3 = 400;

  speedx = random(-10.0, 1.0);
  speedy = random(-10.0, 1.0);
  speedx2 = random(-1.0, 10.0);
  speedy2 = random(-1.0, 10.0);
  speedx3 = random(-5.0, 5.0);
  speedy3 = random(-5.0, 5.0);

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  x = speedx + x
  y = speedy + y
  x2 = speedx2 + x2
  y2 = speedy2 + y2
  x3 = speedx3 + x3
  y3 = speedy3 + y3

  background(5, 5, 5);
  fill(255,0,0)
  ellipse(x,y,50,50)
  fill(0,255,0)
  ellipse(x2,y2,50,50)
  fill(0,0,255)
  ellipse(x3,y3,50,50)

  if ((x > 800) || (x < 0)){
    speedx = -1*speedx
  }
if ((y > 800) || (y < 0)){
    speedy = -1*speedy
  }
  if ((x2 > 800) || (x2 < 0)){
    speedx2 = -1*speedx2
  }
if ((y2 > 800) || (y2 < 0)){
    speedy2 = -1*speedy2
  }
   if ((x3 > 800) || (x3 < 0)){
      speedx3 = -1*speedx3
    }
  if ((y3 > 800) || (y3 < 0)){
      speedy3 = -1*speedy3
    }
}
