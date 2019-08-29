
class Square{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 3);
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
    rectangle(this.loc.x, this.loc.y, this.w, this.w);
    //this.w = random(10,100);
  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.dx = -this.vel.dx
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.dy = -this.vel.dy
    }
  }

  update(){
    //this.clr = color(random(255), random(255), random(255));
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}
