
class Square{
  constructor(x, y, w, h, clr){
    this.loc = createVector(x, y,);
    this.w = w;
    this.h = h;
    this.clr = clr;
  }
  run(){
    this.render();
    this.update();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
