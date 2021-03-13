
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var stone = new Stone(100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  drawSprites();
 
}



