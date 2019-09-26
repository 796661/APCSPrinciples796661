
class Ball{
  constructor(x, y, dx, dy, id, w){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0.1);
    this.clr = color(random(255), random(255), random(255));
    this.w = 20;
    this.id = id;
    }


  run(){
    this.checkedges();
    this.update();
    this.render();
    this.isColliding();
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w, this.id);

  }
  checkedges(){
    if(gameMode === 1 || gameMode === 2 || gameMode === 3){
      if(this.loc.x<0){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.x>width){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y<0){
        this.vel.y = -this.vel.y;
        this.vel.y=this.vel.y+2
      }
      if(this.loc.y>height){
        this.vel.y = -this.vel.y;
      }
    }
    if(gameMode === 4){
      if(this.loc.x < 0 || this.loc.x > width){
        this.vel.x = -this.vel.x
      }
      if(this.loc.y < -25){
        this.vel.y = -this.vel.y
      }
      if(this.loc.y > 820){
        this.loc.y = -20;
        this.vel.y = 1;
      }
    }
  }

  update(){
    for(var i=balls.length-1;i>=0;i--){
      if(balls[i].isColliding()){
        if(this.vel.y>0){
          balls.splice(i,1);
          score=score+1;
          //console.log(score)
        }
        if(this.vel.y<-1){
          balls.splice(i,1);
          health=health-1;
          //console.log(health)
        }
      }
    }
    this.loc.add(this.vel);
    this.vel.limit(15)
    this.vel.add(this.acc);
    if(balls.length < 0 && wave < 4 && health > 0){
      if(gameMode==='1'){
        loadObjects(5);
      }
      if(gameMode==='2'){
        loadObjects(10);
      }
      if(gameMode==='3'){
        loadObjects(20);
      }
      runObjects();
      wave = wave + 1;
    }
  }
  isColliding(){
    if(gameMode === 1 || gameMode === 2 || gameMode === 3){
      if(this.loc.x > paddle.loc.x &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y > paddle.loc.y &&
        this.loc.y < paddle.loc.y + paddle.h){
          return(true);
        }else{
          return(false);
        }
    }
    if(gameMode === 4){
      if(this.loc.x > paddle.loc.x &&
        this.loc.x < paddle.loc.x + paddle.w &&
        this.loc.y > paddle.loc.y &&
        this.loc.y < paddle.loc.y + paddle.h){
          this.loc.y = -20;
          this.vel.y = 1;
        }
    }
  }
}
