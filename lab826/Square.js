
class Square{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 1);
    this.clr = color(random(255), random(255), random(255));
    this.w = random(10,100);
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
    //this.w = random(10,100);
  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0 || this.loc.y > height){
      this.vel.y = -this.vel.y
      this.loc.y = height -2
    }
  }

  update(){
    //this.clr = color(random(255), random(255), random(255));
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}
