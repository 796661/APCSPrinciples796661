
class Ship{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(255, 255, 255);
  }


  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  render(){
    this.heading = this.vel.heading();
    fill(this.clr);
    this.angle = this.angle + 0.1;
    push();
      translate(this.loc.x, this.loc.y);
      rotate(this.heading + 1.5);
      triangle(-10, 16, 10, 16, 0, -16)
    pop();
  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > 800) this.vel.x = -this.vel.x;
    if(this.loc.y < 0 || this.loc.y > 800) this.vel.y = -this.vel.y;

  }
  update(){
    this.acc=p5.Vector.sub(planet.loc,this.loc)
    this.acc.normalize();
    this.acc.mult(sliderAttraction.value());
    this.vel.add(this.acc);
    this.vel.limit(sliderLimit.value());
    this.loc.add(this.vel);
    if ((this.loc.dist(planet.loc))<20){
      this.loc=createVector(random(800),random(800));
      planet.loc=createVector(random(width),random(height));
      planet.vel=createVector(random(-3,3),random(-3,3));
    }
  }
}
