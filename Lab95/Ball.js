
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
    if(this.id >= 0){
      if(this.loc.x < 0 || this.loc.x > width){
        this.vel.x = -this.vel.x
      }
      if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y
      }
    }
    if(this.id < 0){
      if(this.loc.x < -25){
        this.loc.x = 825
      }
      if(this.loc.x > 825){
        this.loc.x = -25
      }
      if(this.loc.y < -25){
        this.loc.y = 825
      }
      if(this.loc.y > 825){
        this.loc.y = -25
      }
    }
  }



  update(){
    var distToMainBall;
    if(this.id >= 0){
      distToMainBall = this.loc.dist(mainBall.loc);
      if(distToMainBall < 800){
        //add atraction
        this.acc = p5.Vector.sub(mainBall.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.7);
      }
      if(distToMainBall < 150){
        //add atraction
        this.acc = p5.Vector.sub(this.loc, mainBall.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
      }
    }
    this.vel.limit(5);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}
