var background1;
var redBalloon,greenBalloon,blueBalloon,pinkBalloon,edges;
var bow;
var arrow;
var score;


 function preload(){
 
   bgImage = loadImage("background0.png");
   bowImage = loadImage("bow0.png");
   arrowImage = loadImage("arrow0.png");
   
   redImage = loadImage("red_balloon0.png");
   greenImage = loadImage("green_balloon0.png");
   blueImage = loadImage("blue_balloon0.png");
   pinkImage = loadImage("pink_balloon0.png");
   
  
}

function setup() {
  createCanvas(500, 500);
  
  background1 = createSprite(250,50,500,500);
  background1.velocityX = -3;
  
  background1.x = background1.width/2;
  
  bow = createSprite(450,250,20,20);
  
  background1.addImage(bgImage);
  background1.scale = 2.5;
  
  bow.addImage(bowImage);
  
  score = 0;
  
   redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();
  
  edges = createEdgeSprites();
  
}

function draw() {

  background("white");
  
 
  
   if(background1.x<0){
    background1.x = background1.width/2;
  }
  
  if(keyDown("space")){
     createArrow();
  }
  
  bow.y = World.mouseY; 
  
 
  var selectBalloon = Math.round(random(1,4));
  
  if(World.frameCount % 80 == 0){
   if(selectBalloon == 1) {
      createRedBalloon();
    } else if (selectBalloon == 2) {
      createGreenBalloon();
    } else if (selectBalloon == 3) {
      createBlueBalloon();
    } else if(selectBalloon == 4){
      createPinkBalloon();
    }
}
  
 
  
  
  if(arrowGroup.isTouching(redB)){
     redB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
     }
  
  
  if(arrowGroup.isTouching(greenB)){
     greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
     }
  
   
  if(arrowGroup.isTouching(blueB)){
     blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
     }
  
   
  if(arrowGroup.isTouching(pinkB)){
     pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
     }
  
  
  drawSprites();
  
   text("Score:-" + score,380,20,textSize = 20);
  
}




function createArrow(){
    arrow = createSprite(450,100,5,10);
    arrow.velocityX = -6;
    arrow.scale = 0.3;
    //return arrow
    arrow.addImage(arrowImage);
   arrow.y = bow.y;
  arrowGroup.add(arrow);
  arrowGroup.lifetime = 100;
  arrow.setCollider("rectangle",0,0,180,50);
  }


  


function createRedBalloon(){

   
    redBalloon =     createSprite(0,Math.round(random(20,450)),10,10);
   
    
    redBalloon.addImage(redImage);
    redBalloon.velocityX = 2;
    redBalloon.scale = 0.1;
    redBalloon.lifetime = 250;
    redB.add(redBalloon);
    redB.lifetime = 250;
  
}

function createGreenBalloon(){

   
    greenBalloon =     createSprite(0,Math.round(random(20,450)),10,10);
   
    
    greenBalloon.addImage(greenImage);
    greenBalloon.velocityX = 2;
    greenBalloon.scale = 0.1;
    greenBalloon.lifetime = 250;
    greenB.add(greenBalloon);
    greenB.lifetime = 250;
}

function createBlueBalloon(){

   
    blueBalloon =     createSprite(0,Math.round(random(20,450)),10,10);
   
    
    blueBalloon.addImage(blueImage);
    blueBalloon.velocityX = 2;
    blueBalloon.scale = 0.1;
    blueBalloon.lifetime = 250;
    blueB.add(blueBalloon);
    blueB.lifetime = 250;
}

function createPinkBalloon(){

   
    pinkBalloon =     createSprite(0,Math.round(random(20,450)),10,10);
   
    
    pinkBalloon.addImage(pinkImage);
    pinkBalloon.velocityX = 2;
    pinkBalloon.scale = 1.3;
    pinkBalloon.lifetime = 250;
    pinkB.add(pinkBalloon);
    pinkB.lifetime = 250;
}






