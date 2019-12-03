
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(255), random(255), random(255));
    this.id = id;
    if(this.id < 0){
      this.w = 50
    }
    else{
      this.w = 15;
    }
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);

  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y
      //this.loc.y = height -2
    }
  }

  update(){
    var distToatractor;
    //var distTorepeller;
    if(this.id >= 0){
      distToatractor = this.loc.dist(atractor.loc);
      distTorepeller = this.loc.dist(repeller.loc);
      if(distToatractor < 400){
        //add atraction
        this.acc = p5.Vector.sub(atractor.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }
    //  if(distTorepeller < 400){
        //add atraction
    //    this.acc = p5.Vector.sub(this.loc, repeller.loc);
      //  this.acc.normalize();
    //    this.acc.mult(0.5);
    //  }
    }
    this.vel.limit(5);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}
