class Ground{
  constructor(){
    var options = {
      isStatic:true
    }
    this.body = Bodies.rectangle(width/2, height, width, 10, options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    fill(200);
    rectMode(CENTER);
    rect(pos.x, pos.y, width, 10);
  }
}
