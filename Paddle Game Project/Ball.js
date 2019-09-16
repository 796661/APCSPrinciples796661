
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.1);
    this.clr = color(random(255), random(255), random(255));
    }


  run(){
    this.checkedges();
    this.update();
    this.render();
    this.isColliding();
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 30, 30);

  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > width){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y
      //this.loc.y = height -2
    }
    if(this.loc.y > 820){
      this.loc.y = -10
      this.vel.y = 1
    }
  }

  update(){
    //this.vel.limit(5);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
  isColliding(){
    if(this.loc.x > paddle.loc.x &&
      this.loc.x < paddle.loc.x + paddle.w &&
      this.loc.y > paddle.loc.y &&
      this.loc.y < paddle.loc.y + paddle.h){
        this.vel.y = -this.vel.y;
      }
  }
}
