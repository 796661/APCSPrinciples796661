
class Ship{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(255), random(255), random(255));
    this.id = id;

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
    if(this.loc.x < 0) this.loc.x = width;
    if(this.loc.x > width) this.loc.x = 0;
    if(this.loc.y < 0) this.loc.y = height;
    if(this.loc.y > height) this.loc.y = 0;

  }
  update(){
    var distToatractor;
  //  var distTorepeller;
    if(this.id >= 0){
      distToatractor = this.loc.dist(atractor.loc);
    //  distTorepeller = this.loc.dist(repeller.loc);
      if(distToatractor < 800){
        //add atraction
        this.acc = p5.Vector.sub(atractor.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
    //  if(distTorepeller < 200){
        //add atraction
      //  this.acc = p5.Vector.sub(this.loc, repeller.loc);
      //  this.acc.normalize();
      //  this.acc.mult(0.5);
      //}
    }
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.loc.add(this.vel);
  }
}
