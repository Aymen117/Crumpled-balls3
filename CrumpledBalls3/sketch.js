const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,ground	
var gameState = launched = (paper.velocityx<=1 || paper.velocityY<=0.5)
var world;
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	dustbin=new dustbin(1200,650);
	paper=new paper(200,450,40);
	ground=new ground(width/2,670,width,20);
	slingshot = new SlingShot(paper.body,{x:200, y:300});
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
	Engine.run(engine);
	//Render.run(render);
}
function draw() {
  rectMode(CENTER);
  background(225);
  dustbin.display();
  paper.display();
  ground.display();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}