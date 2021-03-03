
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1 = new Ball(750,550,60);
	ball2 = new Ball(870,550,60);
	ball3 = new Ball(990,550,60);
	ball4 = new Ball(630,550,60);
	ball5 = new Ball(510,550,60);

   roof1 = new Roof(750,100,600,50);

   rope1 = new Chain(ball3.body,roof1.body,240,0);
   rope2 = new Chain(ball1.body,roof1.body,0,0);
   rope3 = new Chain(ball2.body,roof1.body,120,0);
   rope4 = new Chain(ball4.body,roof1.body,-120,0);
   rope5 = new Chain(ball5.body,roof1.body,-240,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  
 roof1.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  drawSprites();

}

function keyPressed(){

  if (keyCode === UP_ARROW){
  
  Matter.Body.applyForce(ball3.body,ball3.body.position, {x:12,y:0});
   }
  
  }
  
