
class Planet{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 0);
    this.clr = color(random(255), random(255), random(255));
    this.w = 50;
  }


  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){//keeps planets on screen
    if(this.loc.x < 25 || this.loc.x > 775){
      this.vel.x = -this.vel.x
    }
    if(this.loc.y < 25 || this.loc.y > 775){
      this.vel.y = -this.vel.y
      //this.loc.y = height -2
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

  update(){
    var distToship;
    distToship = this.loc.dist(ship.loc);
    if(distToship < 100){
      planet = new Planet(random(25,775), random(25,775), 0, 0, -1);
    }
    this.vel.limit(5);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }
}
