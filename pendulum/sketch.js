const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var stand1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball=new Ball(200,300,50);
    stand1=new Stand_h(200,150,200,20);
    chain=new Chain(ball.body,stand1.body);
}

function draw(){
    background("green");
    Engine.update(engine);
     chain.display();
     ball.display();
     stand1.display();
}
function keyPressed() {
    if(keyCode===32){
        World.add(world,Bodies.circle(220,260,25))
    }
   }