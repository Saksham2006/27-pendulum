
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand
var ball;
var engine, world;

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  var stand_options={
    isStatic: true
  }

  var ball_options = {
    restitution : 2.0,
    density : 1.0
  }
  
 ball  = Bodies.circle(450,200,40,ball_options);
  World.add(world,ball);

 stand = Bodies.rectangle(450,100,300,20,stand_options);
 World.add(world,stand);

 var options = {
  bodyA : ball,
  bodyB : stand,
  stiffness: 0.008,
  length : 200
 }
 var string = Constraint.create(options);
 World.add(world,string);

 fill("white");
 }

function draw() {
  background('#fafafa'); 
  Engine.update(engine);

  fill('black');

  text("Press space bar to oscillate the pendulum with the mouse",290,20);
  text("Press the enter key to stop controlling the pendulum with mouse",280,40);

  fill ("black");
 rectMode(CENTER);
 rect(stand.position.x,stand.position.y,300,20);

 fill("orange");
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,40);

 strokeWeight(1);
 stroke("black");
 line(ball.position.x,ball.position.y,stand.position.x,stand.position.y)

 if(keyCode===32){
 ball.position.y = mouseY;
 ball.position.x = mouseX;
  }

 else if (keyCode===ENTER){
 xpos = ball.position.x;
 ypos = ball.position.y;

 ball.position.x = xpos;
 ball.position.y = ypos;
  }
}