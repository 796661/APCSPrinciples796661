
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.loc2 = createVector(w, h);
    this.clr = color(random(255), random(255), random(255));
    }

  run(){
    this.update();
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
  }
  update(){
    var mouseLoc = createVector(mouseX, 600);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }
}
