const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var score = 0;
function preload(){
    groundImg=loadImage("sprites/bg1.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1 = new Bottle(700,320,70,70);
    box2 = new Bottle(920,320,70,70);
    box3 = new Bottle(810, 350,70,70);
    box7 = new Bottle(810,260,70,70);

    box4 = new Bottle(700,240,70,70);
    box5 = new Bottle(920,240,70,70);
    box8 = new Bottle(810, 220,70,70);

    box9 =  new Bottle(810,180,70, 70);

    box10 = new Bottle(810,160,70,70);
    box12 = new Bottle(760,120,70, 70);
    box13 = new Bottle(870,120,70, 70);

    rock = new Rock(200,50);
    rock2 = new Rock2(1100,50);

    slingshot = new SlingShot(rock.body,{x:200, y:50});
    slingshot2 = new SlingShot2(rock2.body,{x:1100, y:50});
}


function draw(){
        background(groundImg);
    
        noStroke();
        textSize(35)
        fill("red")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    //box6.display();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
   // box11.display();
    box12.display();
    box12.score();
    box13.display();
    box13.score();

    rock.display();
    rock2.display();
    //platform.display();
    //log6.display();
    slingshot.display();   
    slingshot2.display();    
}
console.log(box1)
function mouseDragged(){
    //if (gameState!=="launched"){
        push()
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
           pop()
}

function mouseDragged(){
    
    Matter.Body.setPosition(rock2.body, {x: mouseX , y: mouseY});    

}
function mouseReleased(){
    push()
    slingshot.fly();
    gameState = "launched";
    pop()
}
function mouseReleased(){
    push()
    slingshot2.fly();
    gameState = "launched";
pop()
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(rock.body);
       rock.trajectory=[];
       Matter.Body.setPosition(rock.body,{x: 200 , y: 50});

    }
}