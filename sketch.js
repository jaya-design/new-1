
// make all var/variable.
var player1 , player2 , player3;
var enemy1 , enemy2 , enemy3;
var bg; 
var player , form , game;
var anamies;
var gun_1;
var wall1 , wall2 , wall3 , wall4 , wall5 , wall6 , wall7 , wall8 , wall9 , wall10 , wall11 , wall12 , wall13 , wall14 , wall15 , wall16;
var allPlayers;
var game;
var gunX,gunY;
var bullet;
var anamieX,anamieY;
var Score = 0;
var gun1,gun2,gun3,gun4,gun5,gun6,gun7,gun8,gun9;
var new1,new2,new3,new4,new5,new6,new7,new8,new9,new10;
var newX,newY;

//preload all img/images

function preload(){
  // bullet
  bulletImg = loadImage("Images/bullet.png")
  gun_1Img = loadImage("Images/gun5.png");
  

  // players 1 , 2 , 3 load images

  player1Img = loadImage("Images/friend1.png");
  player2Img = loadImage("Images/friend2.png");
  player3Img = loadImage("Images/style1.png");

  // background/map load image
  
  bg = loadImage("Images/map3.jpg");

  // enemy 1 , 2 , 3 load images

  new1Img = loadImage("Images/anamy2.png");
  new2Img = loadImage("Images/anamy3.png");
  // new3Img = loadImage("Images/anamy2.png");
  // new4Img = loadImage("Images/anamy3.png");
  // new5Img = loadImage("Images/anamy2.png");
  // new6Img = loadImage("Images/anamy3.png");
  // new7Img = loadImage("Images/anamy2.png");
  // new8Img = loadImage("Images/anamy3.png");
  // new9Img = loadImage("Images/anamy2.png");
  // new10Img = loadImage("Images/anamy3.png");

  enemyGroup = new Group();

  // load Images of guns

  gun1Img = loadImage("Images/gun2.png")
  gun2Img = loadImage("Images/gun3.png")
  gun3Img = loadImage("Images/gun4.png")
  gun4Img = loadImage("Images/gun5.png")
  gun5Img = loadImage("Images/gun6.png")
  gun6Img = loadImage("Images/gun7.png")
  gun7Img = loadImage("Images/gun8.png")
  gun8Img = loadImage("Images/gun9.png")
  gun9Img = loadImage("Images/gun10.png")


}

//create setup

function setup() {

  // create canvas

  createCanvas(windowWidth,windowHeight);

  // database

  database = firebase.database();


  gunGroup = new Group();
  
  enemyGroup = new Group();

  new1 = createSprite(730,90,50,50);
  new1.addImage(new1Img);
  new1.scale = 0.25;

  
  new2 = createSprite(330,90,50,50);
  new2.addImage(new2Img);
  new2.scale = 0.25;

  // new3 = createSprite(330,90,50,50);
  // new3.addImage(new3Img);
  // new3.scale = 0.25;

  // new4 = createSprite(330,90,50,50);
  // new4.addImage(new4Img);
  // new4.scale = 0.25;

  // new5 = createSprite(330,90,50,50);
  // new5.addImage(new5Img);
  // new5.scale = 0.25;

  // new6 = createSprite(330,90,50,50);
  // new6.addImage(new6Img);
  // new6.scale = 0.25;

  // new7 = createSprite(330,90,50,50);
  // new7.addImage(new7Img);
  // new7.scale = 0.25;

  // new8 = createSprite(330,90,50,50);
  // new8.addImage(new8Img);
  // new8.scale = 0.25;

  // new9 = createSprite(330,90,50,50);
  // new9.addImage(new9Img);
  // new9.scale = 0.25;

  // new10 = createSprite(330,90,50,50);
  // new10 = addImage(new10Img);
  // new10.scale = 0.25;
 
  
  // create sprite of player 1 , 2 , 3
  
  player1 = createSprite(540,80, 50, 50);
  player1.addImage(player1Img);
  player1.scale = 0.12

  bullet1 = createSprite(player1.x,player1.y,10,20);
  bullet1.addImage(bulletImg);
  bullet1.visible = false;

  gun_1 = createSprite(player1.x,player1.y+3,10,10);
  gun_1.addImage(gun_1Img);
  gun_1.visible = false;
  



  wall1 = createSprite(580,265,10,50);
  // wall1.visible = false;
  
  wall2 = createSprite(455,250,10,90);
  // wall2.visible = false;

  wall3 = createSprite(455,385,10,90);
  // wall3.visible = false;

  wall4 = createSprite(495,250,10,90);
  // wall4.visible = false;

  wall5 = createSprite(495,385,10,90);
  // wall5.visible = false;

  wall6 = createSprite(585,260,50,10);
  // wall6.visible = false;

  wall7 = createSprite(539,290,90,10);
  // wall7.visible = false;

  wall8 = createSprite(539,345,90,10);
  // wall8.visible = false;

  wall9 = createSprite(729,345,90,10);
  // wall9.visible = false;

  wall10 = createSprite(729,290,90,10);
  // wall10.visible = false;

  wall11 = createSprite(650,585,1000,10);
  // wall11.visible = false;

  wall12 = createSprite(650,58,1000,10);
  // wall12.visible = false;

  wall13 = createSprite(525,110,160,10);
  // wall13.visible = false;

  wall14 = createSprite(755,110,200,10);
  //  wall14.visible = false;

  wall15 = createSprite(635,315,50,20);
  // wall9.visible = false;

  wall16 = createSprite(778,250,10,90);
  // wall10.visible = false;

  wall17 = createSprite(555,206,130,10);
  // wall10.visible = false;

  wall18 = createSprite(615,230,10,50);
  // wall10.visible = false;

  wall19 = createSprite(658,230,10,50);
  // wall13.visible = false;

  wall20 = createSprite(718,205,130,10);
  //  wall14.visible = false;

  wall21 = createSprite(688,260,50,10);
  // wall9.visible = false;

  wall22 = createSprite(688,267,10,50);
  // wall10.visible = false;

  wall23 = createSprite(355,345,190,10);
  // wall10.visible = false;

  wall24 = createSprite(355,290,190,10);
  // wall10.visible = false;

  //

  wall25 = createSprite(910,345,190,10);
  // wall25.visible = false;

  wall26 = createSprite(910,290,190,10);
  //  wall26.visible = false;

  wall27 = createSprite(470,150,300,10);
  // wall27.visible = false;

  wall28 = createSprite(810,150,300,10);
  // wall28.visible = false;

  wall29 = createSprite(815,250,10,90);
  // wall29.visible = false;

  wall30 = createSprite(579,370,10,50);
  // wall30.visible = false;

//


  wall31 = createSprite(590,370,50,10);
  // wall31.visible = false;

  wall32 = createSprite(690,370,50,10);
  //  wall32.visible = false;

  wall33 = createSprite(690,370,10,50);
  // wall33.visible = false;

  wall34 = createSprite(360,210,200,10);
  // wall34.visible = false;

  wall35 = createSprite(1050,250,10,1000);
  // wall35.visible = false;

  wall36 = createSprite(200,200,10,1000);
  // wall36.visible = false;

//

wall37 = createSprite(400,425,100,10);
// wall37.visible = false;

wall38 = createSprite(690,370,50,10);
//  wall38.visible = false;

wall39 = createSprite(778,385,10,90);
// wall39.visible = false;

wall40 = createSprite(815,385,10,90);
// wall40.visible = false;

wall41 = createSprite(620,400,10,50);
// wall41.visible = false;

wall42 = createSprite(660,400,10,50);
// wall42.visible = false;

//

wall43 = createSprite(557,425,130,10);
// wall43.visible = false;

wall44 = createSprite(720,425,130,10);
// wall44.visible = false;

wall45 = createSprite(630,487,530,10);
// wall45.visible = false;

wall46 = createSprite(660,400,10,50);
// wall46.visible = false;
  
}

// create function draw

function draw() {
 background(bg);
 fill("red")
 textSize(20);
 text("MINI FIRE", 588,24,150,150)
 fill("white");
 textSize(20);
 text("Score :  ",40,90,100,100)
 text("Move player with ARROW ",1100,120,100,100)

  if(keyWentDown(RIGHT_ARROW)){
    player1.x = player1.x+10;
    // player1.x = camera.x
  }
  if(keyWentDown(LEFT_ARROW)){
    player1.x = player1.x-10;
    // player1.x = camera.x
  }
  if(keyWentDown(UP_ARROW)){
    player1.y = player1.y-10;
    // player1.y = camera.y
  }
  if(keyWentDown(DOWN_ARROW)){
    player1.y = player1.y+10;
    // player1.y = camera.y
  }


  //background(bg);
  fill("black")
  text(mouseX + "  " + mouseY,mouseX,mouseY)
  
  


 player1.collide(wall1);
 player1.collide(wall2);
 player1.collide(wall3);
 player1.collide(wall4);
 player1.collide(wall5);
 player1.collide(wall6);
 player1.collide(wall7);
 player1.collide(wall8);
 player1.collide(wall9);
 player1.collide(wall10);
 player1.collide(wall11);
 player1.collide(wall12);
 player1.collide(wall13);
 player1.collide(wall14);
 player1.collide(wall15);
 player1.collide(wall16);
 player1.collide(wall17);
 player1.collide(wall18);
 player1.collide(wall19);
 player1.collide(wall20);
 //
 player1.collide(wall21);
 player1.collide(wall22);
 player1.collide(wall23);
 player1.collide(wall24);
 player1.collide(wall25);
 player1.collide(wall26);
 player1.collide(wall27);
 player1.collide(wall28);
 player1.collide(wall29);
 player1.collide(wall30);
 player1.collide(wall31);
 player1.collide(wall32);
 player1.collide(wall33);
 player1.collide(wall34);
 player1.collide(wall35);
 player1.collide(wall36);
 player1.collide(wall37);
 player1.collide(wall38);
 player1.collide(wall39);
 player1.collide(wall40);
 player1.collide(wall41);
 player1.collide(wall42);
 player1.collide(wall43);
 player1.collide(wall44);
 player1.collide(wall45);
 player1.collide(wall46);



gunX = player1.x+100;
gunY = player1.y;

// newX = player1.x+200;
// newY = player1.y;


anamieX = player1.x+200;
anamieY = player1.y;

if( keyCode === 87){
  gun1.x = player1.x;
  gun1.y = player1.y;
}
// if(bullet1.isTouching(anamie2)){
//   anamie2.hide;
// }
if(bullet1.x === new1.x){
  new1.visible = false;
  bullet1.velocityX = 0
  bullet1.visible = false;
}
else{
  new1.visible = true;
}
if(bullet1.X === new2.X && new2.Y){
  new2.visible = false;
  bullet1.velocityX = 0;
  bullet1.visible = false;
}
else{
  new2.visible = true;
  // bullet1.visible = true;
}



  drawSprites();
  spawnGuns();

  spawnGuns2();
  spawnGuns3();
  spawnGuns4();
  spawnGuns5();
  spawnGuns6();
  spawnGuns7();
  spawnGuns8();
  spawnGuns9();
  spawnGuns10();
  spawnGuns11();
  // spawner();
  hide1();
  
  


}


// move player1 1
function hide1(){
  if(keyCode === 32){
    enemyGroup.visible = false;
  }
}



//snawner [it help's to spawn enemy randomly on screen]

// function spawner(){
//   // console.log(frameCount);
// if (frameCount % 100 === 0) {
//   anamies = createSprite(anamieX,anamieY,10,20);
//   // anamies.velocityY = 1;
// //  anamies.velocityX = -1
//    var rand = Math.round(random(1,2));
//    switch(rand){
//       //  case 1: anamies.addImage("enemy1Img",enemy1Img);
//       //  break;
//        case 1: anamies.addImage("enemy1Img",enemy1Img);
//        break;
//        case 2: anamies.addImage("enemy1Img",enemy3Img);
//        break;
//        default:break;

//    }


//    anamies.scale = 0.25;
//    anamies.lifetime = 100;
//    enemyGroup.add(anamies);
   
// }
// }

function spawnGuns(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(360,190,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns2(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(888,270,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns3(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(645,295,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns4(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(660,470,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns5(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(275,570,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns6(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(900,325,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns7(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(710,185,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns8(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(535,185,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns9(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(360,330,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}

function spawnGuns10(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(710,100,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}



function spawnGuns11(){
  // console.log(frameCount);
  // console.log(gunX);
  // console.log(gunY);
  if(frameCount%200 === 0){
    var gun = createSprite(520,100,10,10)
    var ran = Math.round(random(1,9));
    switch(ran){
      case 1:gun.addImage(gun1Img);
      break;
      case 2:gun.addImage(gun2Img);
      break;
      case 3:gun.addImage(gun3Img);
      break;
      case 4:gun.addImage(gun4Img);
      break;
      case 5:gun.addImage(gun5Img);
      break;
      case 6:gun.addImage(gun6Img);
      break;
      case 7:gun.addImage(gun7Img);
      break;
      case 8:gun.addImage(gun8Img);
      break;
      case 9:gun.addImage(gun9Img);
      break;
      default:break;

      

      
    
      
    }
    gun.scale = 0.30;
    gun.lifetime = 200;
    gunGroup.add(gun);
  }
}






function keyPressed(){

  if(keyCode === 32){
    // player1.velocityX = 10;
    bullet1.visible = true;
    bullet1.scale = 0.05;
    // bullet.x+100;
    bullet1.velocityX = 5;
    enemyGroup.visible = false;
    
  }
  if(keyCode != 32){
    bullet1.x = player1.x+10;
    bullet1.y = player1.y-5;
    bullet1.visible = false;
    bullet1.velocityX= 0;
    enemyGroup.visible = true;
    // player1.velocityX = 0
  }
  if(keyCode === 32){
    // player1.velocityX = 10;
    gun_1.visible = true;
    gun_1.scale = 0.25;
    
  }
  if(keyCode != 32){
    gun_1.x = player1.x+10;
     gun_1.y = player1.y+10;
    gun_1.visible = false;
   
    // player1.velocityX = 0
  }
  // if(keyCode === 87){
  //   gun1.x = player1.x;
  //   gun1.y = player1.y;
  // }
}

  
   
    
     
      
       
        
          
