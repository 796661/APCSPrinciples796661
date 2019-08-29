
class Ball{
  constructor(x, y, dx, d){
    this.loc = createvector(x, y);
    this.vel = createvector(dx, dy);
    this.acc = createvector(0, 3);
    this.clr = color(random(255), random(255), random(255));
    this.w = random(10,100);
  }

  run(){
      this.render();
      this.checkedges();
      this.update();
  }

  render(){
    fill(this.clr);
    ellipse(this.x, this.y, this.w, this.w);
    //this.w = random(10,100);
  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y
    }
  }

  update(){
    //this.clr = color(random(255), random(255), random(255));
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}
