
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball
var floor,wall1,wall2



function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
  world = engine.world;
	
	var ball_options={
		restitution: 0.3,
		friction: 0,
		density: 1.5,
		isStatic: false
	}
	


	ball = Bodies.circle(200,100,40,ball_options)
	World.add(world,ball)

	
	

	//Create the Bodies Here.
	floor = new box(400,680,800,20);
    wall1 = new box(600,630,10,80);
	wall2 = new box(520,630,10,80);
	

	Engine.run(engine);
  
}


function draw() {
	//Engine.update(engine);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  floor.show();
  wall1.show();
  wall2.show();
  
  ellipse(ball.position.x,ball.position.y,20,20)
  
  

  
}

function keyPressed(){
if (keyCode == UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:100,y:-120})
}
}

