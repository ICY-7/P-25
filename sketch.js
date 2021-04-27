
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, rect1, rect2, rect3, paper1;

var options = {
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}

function preload() {
	rectimage = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,550,1400,30);

	rect1 = new dustbin(1100,495,150,15);
    rect2 = new dustbin(1185,420,15,170);
    rect3 = new dustbin(1015,420,15,170);

	paper1 = new Paper(200,300);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(206,237,227);
	Engine.update(engine);

	rect1.display();
	rect2.display();
	rect3.display();
	image(rectimage,1000,330,200,200);
	
	ground.display();
	paper1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85});
	}
}