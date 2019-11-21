
class Snake{
  constructor(x, y, dx, dy, w, c){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.w = w;
    this.clr = color(0, 0, 255);
    this.body = [];
  }
  run(){
    this.render();
    this.checkedges();
    this.update();
    this.eatFood();

  }
  render(){
    fill(this.clr);
    rect(this.loc.x * this.w, this.loc.y * this.w, this.w, this.w);
    //for (var i = 0; i < this.body.length; i++){
    //  rect(this.body[i].loc.x * this.w, this.body[i].loc.y * this.w, this.w, this.w);
    //}
  }
  checkedges(){
    if(this.loc.x < 0 || this.loc.x > width/this.w){
      clear();
    }
    if(this.loc.y < 0 || this.loc.y > height/this.w){
      clear();
    }
  }
  update(){
    if(keyIsPressed&&
      keyCode===RIGHT_ARROW){
        head.vel.x = 1;
        head.vel.y = 0;
      }
      if(keyIsPressed&&
        keyCode===LEFT_ARROW){
          head.vel.x = -1;
          head.vel.y = 0;
        }
        if(keyIsPressed&&
          keyCode===UP_ARROW){
            head.vel.x = 0;
            head.vel.y = -1;
          }
          if(keyIsPressed&&
            keyCode===DOWN_ARROW){
              head.vel.x = 0;
              head.vel.y = 1;
            }
    head.loc.add(this.vel);

  }
  eatFood(){
    if(head.loc.x === food[0].loc.x &&
       head.loc.y === food[0].loc.y){
        food[0] = new Food(int(random(25)), int(random(25)), 32);
        this.body.push(createVector(head.loc.x, head.loc.y));
        eatFood = 'yes';
      }
    }
  }
