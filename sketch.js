var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var gameState="start"
var p=1
var a
var rand
var flag=0
var dice
var dis
var dis2
var dis3
var m
var d=1

function preload(){
bgImg = loadImage("assets/bg.png")
bg2Img= loadImage ("assets/starNight.png")
bg3Img= loadImage ("assets/PLANET.png")
bg4Img= loadImage ("assets/PLANET ISLAND.png")
aImg= loadImage ("assets/ASTRONAUT.png")
bg5Img= loadImage ("assets/HORROR HOUSE .png")
bg6Img= loadImage("assets/BOOK.png")
bg7Img= loadImage("assets/SNAKES AND LADDERS.png")
dice1Img= loadImage("assets/1-removebg-preview.png")
dice2Img= loadImage("assets/2-removebg-preview.png")
dice3Img= loadImage("assets/3-removebg-preview.png")
dice4Img= loadImage("assets/4-removebg-preview.png")
dice5Img= loadImage("assets/5-removebg-preview.png")
dice6Img= loadImage("assets/6-removebg-preview.png")

balloonImg = loadAnimation("assets/ROCKET.png")
}

function setup(){
  canvas= createCanvas(840,580)
bg = createSprite(400,485,displayWidth-40,displayHeight-40);
bg.addImage(bgImg);
bg.scale = 1.3  
r = createSprite(425,460,20,50);
a=createSprite(500,500,20,50)
r.addAnimation("balloon",balloonImg);
r.scale = 0.5;
}

function draw() {
  
  background("black");
if (gameState=="start")
{
  textSize(20);
  fill("white")
  text ("You are an astronaut who loves to explore", 250,110)
  text ("space.So,you decide to go an adventure to",250, 135)
  text("find new planets unaware of what awaits.",250, 160)
  text("for you", 400,185)
  text("Press n to play",370,275)
  bg.visible=false
  r.visible=false
  a.visible=false
}

if (keyDown("n"))
{
  gameState="play"
}
     if(gameState=="play")   
    {
      bg.visible=true
      r.visible=true
        //making the hot air balloon jump

          if(keyDown("space") && bg.scale==1.3) {
            r.velocityY=-6;
          }
         if (r.y<0 && r.velocityY==-6)
         {
         // bg = createSprite(165,485,1,1);
          bg.addImage(bg2Img);
          bg.scale = 1.2
          r.y= 360
          r.velocityY=0
          bg.velocityY=3
         }  
         if (bg.y>1050 && bg.velocityY==3)
         {
            bg.y= 485
         } 

         if (keyDown("up") && bg.scale==1.2)
         {
          bg.addImage(bg3Img)
          bg.velocityY=0
          bg.scale= 1
          bg.y=300
          bg.x=450
          bg.width= 900
          bg.height= 650
          r.y= 545
          r.scale=0.08
         }
   
        if (keyDown("e") &&  r.y==545 )
        {
          bg.addImage(bg4Img)
          bg.scale=1.5
          bg.y=320
          r.y=-250
          r.x= 700
          r.velocityY=3
          r.scale=0.5
        }
       
      if (bg.y==320 && r.y>455)
      {
        r.velocityY=0
        if (keyDown("o"))
        {
          a.addImage(aImg)
          a.visible=true
          a.scale= 0.2
          p=2
        }
        if (keyDown("f"))
        {
          a.scale= 0.3
          a.y= 450
          a.x= 650
          bg.addImage(bg5Img)
          bg.scale= 1
          r.destroy()
          p=3
        }
      }
      if (keyDown("b") && bg.scale==1)
      {
          a.visible=false
          bg.addImage(bg6Img)
          bg.scale= 0.8
          bg.y= 290
          bg.x= 420
          p=4
      }
      if (keyDown("s") && bg.scale==0.8)
      {
        bg.addImage(bg7Img)
        bg.scale= 1.15
        bg.y= 300
        p=5
      }

      if (p==5)
      {
        a.visible=true
        a.scale=0.09
        a.x=185
        a.y= 520
        p=6 
      }

      if(bg.scale===1.15  && keyWentDown("d") && d==1)
      {
        m=1
        rand=Math.round(random(1,6))
        flag=1
        dice=createSprite(750,450,10,10)
        dice.scale= 0.5
         switch(rand)
         {
           case 1:dice.addImage(dice1Img);
           break;
           case 2:dice.addImage(dice2Img);
           break;
           case 3:dice.addImage(dice3Img);
           break;
           case 4:dice.addImage(dice4Img);
           break;
           case 5:dice.addImage(dice5Img);
           break;
           case 6:dice.addImage(dice6Img);
           break;
         }    
    }

    if (rand>0 && m>0)
{
    d=2
    if (keyWentDown("right"))
    { 
      if (a.y==520)
      a.x=a.x+52
      if (a.y==416)
      a.x=a.x+52
      if (a.y==312)
      a.x=a.x+52
      if (a.y==208)
      a.x=a.x+52
      if (a.y==104)
      a.x=a.x+52
      m=m+1
    }

    if (keyWentDown("left"))
    {
      if (a.y==468)
      a.x=a.x-52
      if (a.y==364)
      a.x=a.x-52
      if (a.y==260)
      a.x=a.x-52
      if (a.y==156)
      a.x=a.x-52
      if (a.y==52)
      a.x=a.x-52
      m=m+1
    }

    if (keyWentDown ("up") && a.x==653)
    {
      if (a.y==520)
      a.y=a.y-52
      if (a.y==416)
      a.y=a.y-52
      if (a.y==312)
      a.y=a.y-52
      if (a.y==208)
      a.y=a.y-52
      if (a.y==104)
      a.y=a.y-52
      m=m+1
    }

    if (keyWentDown ("up") && a.x==185)
    {
      if (a.y==468)
      a.y=a.y-52
      if (a.y==364)
      a.y=a.y-52
      if (a.y==260)
      a.y=a.y-52
      if (a.y==156)
      a.y=a.y-52
      if (a.y==52)
      a.y=a.y-52
      m=m+1
    }
  }

  if (rand==1)
  {
    if (m>1)
    m=0
  }

  if (rand==2)
  {
    if (m>2)
    m=0
  }

  if (rand==3)
  {
    if (m>3)
    m=0
  }

  if (rand==4)
  {
    if (m>4)
    m=0
  }

  if (rand==5)
  {
    if (m>5)
    m=0
  }

  if (rand==6)
  {
    if (m>6)
    m=0
  }

    if (a.x>653)
    {
      a.x=653
    }

    if (a.x<185)
    {
      a.x=185
    }

    if (m==0)
    {
      d=1

    if (a.x==341 && a.y==520)
    {
      a.x=445
      a.y=416
    }

    if (a.x==237 && a.y==468)
    {
      a.x=289
      a.y=364
    }
    if (a.x==549 && a.y==416)
    {
      a.x=341
      a.y=104
    }
    if (a.x==289 && a.y==260)
    {
      a.x=185
      a.y=104
    }
    if (a.x==549 && a.y==208)
    {
      a.x=653
      a.y=52
    }
    if (a.x==289 && a.y==104)
    {
      a.x=237
      a.y=52
    }
  }
    console.log(a.x)
    console.log(a.y)
   

  }
  drawSprites();

   
    
        if (bg.scale==1.3 && gameState=="play" && r.velocityY==0 )
        {
          textSize(20);
          fill("green")
          text ("Press space to launch your rocket.", 270,50)
        }
        if (r.y==360 && r.velocityY==0 && gameState=="play")
        {
          textSize(20);
          fill("yellow")
          text ("You have been travelling for 6 months now.", 250,50)
          text("Press up arrow key to see what you ",280,100)
          text("discover.",400,125)
        }
        if (r.y==545 && gameState=="play")
        {
          textSize(20);
          fill("lightblue")
          text ("Press e to land on this mysterious planet", 250,50)
        }
    
        if (bg.scale==1.5 && r.velocityY==0 && gameState=="play"&& p==1)
        {
          textSize(20);
          fill("red")
          text ("Press o to start your venture ", 300,50)
        }

        if (p==2 && gameState=="play")
        {
          textSize(20);
          fill("red")
          text ("As you look around, you now decide to", 250,50)
          text ("go to the cottage next to you. Press f ",250,75)
          text ("to continue",355,100)
        }
      
        if (p==3 && gameState=="play")
        {
          textSize(20);
          fill("brown")
          text ("You find the cottage empty so you", 260,50)
          text("decide to read the book next to you in", 250,75)
          text(" order to find out more about the place", 250,100)
          text ("Press b to continue",315,200)
        }
        
        if (bg.scale==1.15 && gameState=="play")
        {
          textSize(20);
          fill("white")
          text ("Everytime you", 10,170)
          text ("are bitten", 10,200)
          text ("by a snake,", 10,230)
          text ("you will reach", 10,260)
          text ("to a new place", 10,290)
          text ("where danger", 10,320)
          text ("awaits you..", 10,350)
          text("Press d to", 700, 170)
          text ("role the dice",700,200)
          text("Move using the", 700, 300)
          text("arrow keys", 700, 330)
        }
      }
          