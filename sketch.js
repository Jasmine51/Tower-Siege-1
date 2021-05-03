const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  sling = new Slingshot(polygon , {x: 100, y: 200});

  rect1 = new Block(625,175,30,40);
  rect2 = new Block(655,175,30,40);
  rect3 = new Block(685,175,30,40);
  rect4 = new Block(715,175,30,40);
  rect5 = new Block(745,175,30,40);
  rect6 = new Block(775,175,30,40);
  rect7 = new Block(655,135,30,40);
  rect8 = new Block(685,135,30,40);
  rect9 = new Block(715,135,30,40);
  rect10 = new Block(745,135,30,40);
  rect11 = new Block(685,95,30,40);
  rect12 = new Block(715,95,30,40);
  rect13 = new Block(700,55,30,40);

  

}
function draw() {
  background("black"); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();

  fill("pink");
  rect7.display();
  rect8.display();
  rect9.display();
  rect10.display();

  fill("turquoise");
  rect11.display();
  rect12.display();

  fill("grey");
  rect13.display();
 
  sling.display();
 

  var angle = polygon.angle;

  posX=polygon.position.x;
  posY=polygon.position.y;

  imageMode (CENTER);
  image(polygon_img, polygon.position.x , polygon.position.y, 40, 40);

  drawSprite();
 
 

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  sling.fly();
}