class Particle{
  constructor(){
    var options = {
      restitution:0.4,
      density:0.1,
      friction:1
    }
    this.body = Bodies.circle(random(width/2-150, width/2+150), 0, 10, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color);
    ellipseMode(CENTER);
    ellipse(0, 0, 10*2);
    pop();
  }
}
