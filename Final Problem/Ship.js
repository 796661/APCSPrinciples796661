
class Ship{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(0, 0, 255);
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
    var number = 0;
    var distToplanet = 10000;
    for(var i = 0; i < planet.length; i++){
      var distance = this.loc.dist(planet[i].loc);
      if(distance < distToplanet){
        distToplanet = distance;
        number = i;
      }
    }
    if(distToplanet < 600){
      //add atraction
      this.acc = p5.Vector.sub(planet[number].loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
  }
}
