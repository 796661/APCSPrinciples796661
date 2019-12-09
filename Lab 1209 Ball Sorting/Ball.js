//  Duncan Vaughan

class Ball{
  constructor(x, y, r, g, b){
    this.loc = createVector(x, y);
    this.r = random(255);
    this.g = 0;
    this.b = 0;
  }
  set(i){
    this.loc.x = i * 30;
  }

  run(){
    this.render();
  }

  render(){
    fill(this.r, this.g, this.b);
    ellipse(this.loc.x + 30, this.loc.y, 30, 30);
  }
}
