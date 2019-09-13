
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w = 300;
    this.h = 25;
    this.clr = color(random(255), random(255), random(255));
    }

  run(){
    this.update();
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
  update(){
    var mouseLoc = createVector(mouseX, 600);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }
}
