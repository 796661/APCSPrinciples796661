
class Snake{
  constructor(x, y, dx, dy, w, c){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.w = w;
    this.clr = color(255, 0, 0);
    this.body = [];
  }
  run(){
    this.render();
  //  this.update();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
    for (var i = 0; i < this.body.length; i++){
      rect(this.body[i].loc.x * this.w, this.body[i].loc.y * this.w, this.w, this.w);
    }
  }
}

//  update(){

//}