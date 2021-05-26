var garden, gardenImg;
var mouse, mouseImg1, mouseimg2;
var cat, catImg1, catImg2;


function preload() {
      
    gardenImg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");

    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);


  garden = createSprite(500,400),
  garden.addImage(gardenImg);
  

  mouse = createSprite(200,600,50,50);
  mouse.addAnimation("mouseStanding",mouseImg2);
  mouse.scale=0.1;
  
  cat = createSprite(870,600,50,50);
  cat.addAnimation("catSleeping",catImg1)
  cat.scale=0.1;

}

function draw() {

    background(255);


   if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    cat.velocityX=0;
    cat.addAnimation("catLastImage",catImg4);
    
    cat.scale=0.1;
    cat.changeAnimation("catLastImage");

    mouse.addAnimation("mouseLastImage",mouseImg4);
    mouse.velocityX=0;
    mouse.scale=0.1;
    mouse.changeAnimation("mouseLastImage");

   }
    

    drawSprites();
}

function keyPressed(){

   if(keyCode === LEFT_ARROW){

    cat.velocityX = -2;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");

   
   }

   if(keyCode === RIGHT_ARROW){

    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.velocityX = 0.8;
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");


   }

}

