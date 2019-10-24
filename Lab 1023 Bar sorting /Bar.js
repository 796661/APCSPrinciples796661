class Bar{
  constructor(location){
    this.loc = location;
    this.w = barWidth
    this.h = height - this.loc.y
  }
  run(){
    this.render();
  }
  render(){
    fill(random(0,255), random(0,255), random(0,255));
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
  set(i){
    this.loc.x = i * 25;
  }
}
