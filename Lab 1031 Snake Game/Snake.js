
class Snake{
  constructor(x, y, dx, dy, w, id){
    this.loc=createVector(x,y);
    this.vel.x = 0;
    this.vel.y = 0;
    this.w=25;
    this.clr=color(255,0,0);
    this.id=id;
  }
  run(){
    this.render();
    this.update();
  }
  render(){
    background(2, 2, 2);
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.w);
  }

  update(){
    if(keyIsPressed&&
      keyCode === RIGHT_ARROW){
        this.vel.x = 3;
        this.vel.y = 0;
      }
    if(keyIsPressed&&
      keyCode === LEFT_ARROW){
        this.vel.x = -3;
        this.vel.y = 0;
        }
    if(keyIsPressed&&
      keyCode === UP_ARROW){
        this.vel.x = 0;
        this.vel.y = -3;
      }
    if(keyIsPressed&&
      keyCode === DOWN_ARROW){
        this.vel.x = 0;
        this.vel.y = 3;
        }
    //this.loc.add(this.vel);
  }
}
