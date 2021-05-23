const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand, ground;
// blocks
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block0;
var polygon;

function preload(){
    polygonImage = loadImage('polygon.png');
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,395,2400,20);
    stand = new Ground(950, 305, 300, 20);
   
    polygon = new Polygon(550, 300, 20,20);

    block0 = new Box(800, 275, 25, 25);
    block1 = new Box(830, 275, 25, 25);
    block2 = new Box(860, 275, 25, 25);
    block3 = new Box(890, 275, 25, 25);
    block4 = new Box(815, 275, 25, 25);
    block5 = new Box(845, 275, 25, 25);
    block6 = new Box(875, 275, 25, 25);
    block7 = new Box(820, 275, 25, 25);
    block8 = new Box(850, 275, 25, 25);
    block9 = new Box(835, 275, 25, 25);

}

function draw(){
    background('grey')
    Engine.update(engine)
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block0.display();
ground.display();
stand.display();
polygon.display();
}