var edges;
var bunny;
var carrot;

function preload()
{
bg = loadImage("images/meadow.jpg");
bunnyImage = loadImage("images/bunnyImg.png");
snakeImage = loadImage("images/snake.png");
carrotImage = loadImage("images/carrot.png");
}

function setup() {
createCanvas(600,600);
edges=createEdgeSprites();
bunny = createSprite(40,550,15,15); 
bunny.addImage(bunnyImage);
bunny.scale=0.2;
carrot = createSprite(560,40,30,30);
carrot.addImage(carrotImage);
carrot.scale=0.15;
brick1 = createSprite(50,280,120,20);
brick2 = createSprite(10,375,120,20);
brick3 = createSprite(190,375,120,20);
brick4 = createSprite(375,375,100,20);
brick5 = createSprite(550,375,120,20);
brick7 = createSprite(250,280,120,20);
brick8 = createSprite(450,280,120,20);
brick9 = createSprite(650,280,120,20);
snakeGroup= new Group();
brick1.shapeColor = "brown"
brick2.shapeColor = "brown"
brick3.shapeColor = "brown"
brick4.shapeColor = "brown"
brick5.shapeColor = "brown"
brick7.shapeColor = "brown"
brick8.shapeColor = "brown"
brick9.shapeColor = "brown"
}

function draw() {
background(bg); 
bunny.bounceOff(edges[0])
  bunny.bounceOff(edges[1])
  bunny.bounceOff(edges[2])
  bunny.bounceOff(edges[3])
  generateSnakes();
if(keyDown("up")){
  bunny.y=bunny.y-3;
}
if(keyDown("down")){
  bunny.y=bunny.y+3;
}
if(keyDown("left")){
  bunny.x=bunny.x-3;
}
if(keyDown("right")){
  bunny.x=bunny.x+3;
}
if(bunny.isTouching(carrot)){
  textSize(40);
  text("YOU WIN",300,300);
}
if(bunny.isTouching(brick1)){
  bunny.x=40;
  bunny.y=550;
}

if(bunny.isTouching(brick2)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick3)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick4)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick5)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick7)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick8)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick9)){
  bunny.x=40;
  bunny.y=550;
}
for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (bunny.isTouching(temp)) {
    bunny.x=40;
    bunny.y=550;
    }   
  }
  drawSprites();
}

function generateSnakes(){
  if(frameCount % 30===0){
    var snake = createSprite(600,random(70,520),random(30,120),5);
    snake.addImage(snakeImage);
    snake.scale=random(0.1,0.4);
    snake.velocityX=-3;
   
    snakeGroup.add(snake);
    }
  }