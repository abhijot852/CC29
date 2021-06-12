const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block,block1,block2,block3,block4;
var slingshot, polygon;
var img;

function preload(){
img = loadImage("polygon_img");

}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(488,353,350,15);

//level 1
  block1= new Block(455,330,30,40);
  block2 = new Block(335,330,30,40);
  block3 = new Block(365,330,30,40);
  block4 = new Block(395,330,30,40);
  block5= new Block(425,330,30,40);
  block6= new Block(485,330,30,40);
  block7 = new Block(515,330,30,40);
  block8 = new Block(545,330,30,40);
  block9 = new Block(575,330,30,40);
  block10= new Block(605,330,30,40);
  block11= new Block(635,330,30,40);
//level2
  block12= new Block(350,290,30,40);
  block13 = new Block(380,290,30,40);
  block14 = new Block(410,290,30,40);
  block15 = new Block(440,290,30,40);
  block16= new Block(470,290,30,40);
  block17= new Block(500,290,30,40);
  block18 = new Block(530,290,30,40);
 block19 = new Block(560,290,30,40);
  block20 = new Block(590,290,30,40);
  block21= new Block(620,290,30,40);
  //level3
  block22= new Block(395,250,30,40);
  block23 = new Block(425,250,30,40);
  block24 = new Block(455,250,30,40);
  block25 = new Block(485,250,30,40);
  block26= new Block(515,250,30,40);
  block27= new Block(545,250,30,40);
  block28 = new Block(575,250,30,40);
 // level4
  block29= new Block(411,210,30,40);
  block30 = new Block(441,210,30,40);
  block31 = new Block(471,210,30,40);
  block32 = new Block(501,210,30,40);
  block33 = new Block(531,210,30,40);
  block34 = new Block(561,210,30,40);
//level5
block35 = new Block(425,170,30,40);
  block36 = new Block(455,170,30,40);
  block37 = new Block(485,170,30,40);
  block38 = new Block(515,170,30,40);
  block39 = new Block(545,170,30,40);
  //level6
  block41 = new Block(470,130,30,40);
  block42 = new Block(500,130,30,40);
  //top
  block40= new Block(484,94,30,40);

//polygon holders with slings 
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  background(0);  
  text(mouseX+","+mouseY,30,50)
  Engine.update(engine);
  block40.display();
  block1.display();
  block39.display();
  block36.display();
  block38.display();
  block37.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block41.display();
  block42.display();
 // block43.display();
  ground.display();
  
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}