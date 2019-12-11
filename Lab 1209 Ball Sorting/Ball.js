//  Duncan Vaughan

class Ball{
  constructor(x, y, r, g, b){
    this.loc = createVector(x, y);
    this.r = random(255); //red color
    this.g = 0; //green color if wanted
    this.b = 0; //blue color if wanted
  }
  //allows balls to move
  set(i){
    this.loc.x = i * 30;
  }

  run(){
    this.render();
  }

  render(){
    fill(this.r, this.g, this.b);
    ellipse(this.loc.x + 30, this.loc.y, 30, 30); //the 30 allows all the balls to be on screen
  }
}
