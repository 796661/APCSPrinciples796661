
//class Square{
  //constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255), random(255));
    this.w = random(10,100);
  }

  //run(){
      this.render();
      this.checkedges();
      this.update();
  }

  //render(){
    fill(this.clr);
    rectangle(this.x, this.y, this.w, this.w);
    //this.w = random(10,100);
  }
  //checkedges(){
    if(this.x < 0 || this.x > width){
      this.dx = -this.dx
    }
    if(this.y < 0 || this.y > height){
      this.dy = -this.dy
    }
  }

  //update(){
    //this.clr = color(random(255), random(255), random(255));
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
}
