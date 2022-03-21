var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg, bgIMG;
var player, playerimg;
var lion, lionimg,rock,rockimg, rockGroup,lionGroup;
var gun, gunimg;
var shoot = 0;

var bullet, bullet_img, bulletGroup
function preload() {
  bgIMG = loadImage("bg1.jpg");
  playerimg = loadImage("Player.png")
  rockimg = loadImage("Rock(NPC).png")
  lionimg = loadImage("Lion.png")
  bullet_img = loadImage("Bullet.png")
  gunimg = loadImage("Gun.png")
}

function setup(){
    createCanvas(600,700);
    bg=createSprite(700,285);
    bg.addImage(bgIMG);
    bg.scale = 3.25;
    bg.velocityX = -3;


player = createSprite(50,400);
player.addImage(playerimg);
player.scale = 0.25;

gun = createSprite(85,370)
gun.addImage(gunimg);
gun.scale = 0.25;

rockGroup = new Group;
lionGroup = new Group;
bulletGroup = new Group;
}

function draw(){
    background(0);
   
    if(gameState === PLAY){
    if(bg.x <105){
        bg.x = bg.width/2;

    }
    

    shoot = shoot-1
    if(keyDown("space") && shoot <0){
    bullet = createSprite(140,360);
    bullet.addImage( bullet_img);
    bullet.velocityX = 5 ;
    bulletGroup.add(bullet);
    shoot = bullet.x;
    bullet.scale = 0.15;
   
    }
    if (keyDown("UP_ARROW") && player.y>= 400 ) {
      player.velocityY = -12  
    }
    if (keyDown("RIGHT_ARROW")) {
        player.x+=1;
      }
    if (keyDown("LEFT_ARROW")) {
        player.x-=3;
    } 

    if(rockGroup.collide(player)){
      player.velocityY = 0.0;
      player.visible = false;
      player.y = 350;
      

      gameState = END;
  }
  else if (gameState === END) {
  }
    spawnRocks();
    spawnLions();
    drawSprites();
}

}
function spawnRocks(){
    if(World.frameCount % 300=== 0){
    rock = createSprite(800,375);
    rock.addImage(rockimg);
      rockGroup.add(rock);
    rock.scale = 0.055;
    rock.velocityX= -1;
  }
}


function spawnLions(){
    if(World.frameCount % 500=== 0){
    lion = createSprite(550,375);
    lion.addImage(lionimg);
      lionGroup.add(lion);
    lion.scale = 0.27;
    lion.velocityX= -1;
  }
}
