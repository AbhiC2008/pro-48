var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg
var fire, fireImage, fireGroup, life = 3;

var brain, brainImage,brainGroup, reward = 0;

var PLAY = 1
var END = 0 
var gameState = PLAY;
var gameOver, restart; 




//var gameover = "over"  

var gameover




function preload(){
  
  shooterImg = loadImage("assets/zombie.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  fireImg = loadImage("assets/Fire.gif")
  

  brainImage = loadImage("assets/Brains.png")
  bgImg = loadImage("assets/bg.jpeg") 
  gameOverImg = loadImage("Game over.png") 

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

  //create the zombies/player sprite
  player = createSprite(displayWidth-110, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.2;
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

  //create groups 
  fireGroup = new Group();
  brainGroup = new Group();

  gameOver = createSprite(650,150);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.2
  


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }

  spawnFire();
  spawnBrains();

  if(player. isTouching(fireGroup)){
    life = life-1 
    fireGroup[0].destroy()
  }


  if(player.isTouching(brainGroup)){
    reward = reward + 1;
    brainGroup[0].destroy()
  }

  drawSprites();
  
  fill ("white");
  textSize(30);
  text("Life: "+ life, displayWidth - 600, 50);

  text("Brains Collected: " + reward ,displayWidth-600, 80 )

  //if(gamestate = "over"){
   // text("gameover",120,180);

  //}




}

function spawnFire(){
  if(frameCount % 200 === 0){
    var fire = createSprite(random(100, windowWidth-50),random(100,windowHeight-160));
    fire.addImage(fireImg);
    fire.scale = 0.5
    fireGroup.add(fire);
    
  }
}



function spawnBrains(){
  if(frameCount % 110 === 0){
    var brain = createSprite(random(100 , windowWidth-50), random(100, windowHeight-160));
    brain.addImage("brain",brainImage);
    brain.scale = 0.05;
    brainGroup.add(brain);

  }
}

