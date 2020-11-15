class Plinko{
  constructor(x, y){
    var options = {
      isStatic:true
    }
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  display(){
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, 10*2);
  }
}
