 var PLAY=1;
 var END=0; 
 var gameState=PLAY 
 var mario,mario_running,murio_collided 
 var ground,invisibleGround,groundImage 
 var coinGroup,coinImage
 var obstaclesGroup,obstacle1,obstacle2,obstacle3
 var score=0
 var life=30
 var gameOver,restart
 localStorage["HighScore"]=0

 function preload(){
    mario_running=loadAnimation("Capture1.png", "Capture2.png", "Capture3.png", "Capture4.png")
    mario_collided=loadAnimation("mariodead.png")
    groundImage=loadImage("backg.jpg")
    coinSound=loadSound("coin.wav")
    coinImage=loadImage("coin.png")
    obstacle1=loadImage("obstacle1.png")
    obstacle2=loadImage("obstacle2.png")
    obstacle3=loadImage("obstacle3.png")
    gameOverImg=loadImage("gameOver.png")
    restartImg=loadImage("restart.png")
    
}
 function setup(){
    createCanvas(600,200)
    mario=createSprite(50,180,20,50)
    mario.addAnimation("running", mario_running)
    mario.scale=0.2

    ground=createSprite(0,190,1200,10)
    ground.x=ground.width/2
    ground.velocityX=-(6+3*score/100)

    
    gameOver=createSprite(300,100)
    gameOver.addImage(gameOverImg)
    gameOver.scale=0.5
    gameOver.visible=false

    restart=createSprite(300,140)
    restart.addImage(restartImg)
    restart.scale=0.5
    restart.visible=false

    coinGroup=new Group()
    obstacleGroup=new Group()
    score=0


 }
 
 function draw(){
    background("blue")
    textSize(20)
    fill(255)
    text("Score:"+ score,500,40)
    text("life:"+ life,500,60)
    drawSprites()

    if(gameState ===PLAY){
        if (score>=0){
            ground.velocityX=-6
        }
        else{
            ground.velocityX=-(6+3*score/100)
        }

        if (keyDown("space") && mario.y>=139){
            mario.velocityY=-12
        }
        mario.velocityY=mario.velocityY+0.8

    }
 }