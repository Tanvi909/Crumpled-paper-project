
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var pObject; 


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,682);
	pObject= new Crumpled(226,2,120); 



	Engine.run(engine);
  
}




function draw() {
 imageMode(CENTER);
  background("lightblue");

  

  pObject.display(); 
  dustbinObj.display();
  groundObject.display();
 
  
  drawSprites(); 
}


function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(pObject.body, pObject.body.position,{x:230, y:-345})
	}
}

