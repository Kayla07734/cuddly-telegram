// nameSpace to object or moudles
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var button;
var buttonTwo;
var angle = 120;
var fan1, fan2, fan3, fan4;
var ball1, ball2;

function setup() {
  createCanvas(400, 400);

  var ground_options = {
    isStatic: true,
  };



  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground);

  //console.log(world)

  button = createImg("up.png");
  button.size(50, 50);
  button.position(20.5);
  button.mouseClicked(vforce);

  buttonTwo = createImg("down.png");
  buttonTwo.size(50, 50);
  buttonTwo.position(300, 50);
  buttonTwo.mouseClicked(vforcedown);

  fan1 = new myFan(20, 300, 10, 80, "pink", 60);
  fan2 = new myFan(130, 100, 10, 80, "red", 45);
  fan3 = new myFan(250, 130, 10, 80, "white", 120);
  fan4 = new myFan(330, 300, 10, 80, "blue", 90);

  ball1 = new myBall(200, 100, 20,"white")
  ball2 = new myBall(300, 100, 20,"orange")
}

function draw() {
  background(0);

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  text(mouseX, "," + mouseY, mouseX, mouseY);
  // Update engine created by us

  fan1.Show();
  fan1.angle+=0.1
  fan2.Show();
  fan2.angle+=0.05
  fan3.Show();
  fan3.angle-=0.3
  fan4.Show();
  fan4.angle+=0.6

  ball1.Show();
  ball2.Show();
}

function vforce() {
  Matter.Body.applyForce(ball1.body, ball1.body.position, { x: 0, y: -0.05 });
}

function vforcedown() {
  Matter.Body.applyForce(ball2.body, ball2.body.position, { x: 0, y: 0.05 });
}
