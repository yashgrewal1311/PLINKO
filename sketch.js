const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;

let divisions = [];
let plinkos = [];
let particles = [];

let divisionHeight = 300;

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  for(var i = 0; i<=width; i = i+80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i, 75));
  }
  for(var i = 15; i<= width; i = i + 50){
    plinkos.push(new Plinko(i, 150));
  }
  for(var i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i, 225));
  }
  for(var i = 15; i<= width; i = i + 50){
    plinkos.push(new Plinko(i, 300));
  }

  Engine.run(engine);
}

function draw() {
  background(51);
  Engine.update(engine);

  for(var d of divisions){
  d.display();
}
  for(var p of plinkos){
    p.display();
  }

  if(frameCount%60===0){
    particles.push(new Particle());
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

  ground.display();
}
