
var ball,img,paddle,img2;
function preload() {
  img = loadImage("ball.png");
  img2 = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(210,200,10,10);
  ball.addImage("b",img);

  paddle = createSprite(390,200,10,10);
  paddle.addImage("p",img2);

  ball.velocityX = 9;
  edges = createEdgeSprites();
}

function draw() {
  background(205,153,0);

 
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  
 randomVelocity();



   
  paddle.y = World.mouseY;
  
  
  drawSprites();

}

function randomVelocity()
{
  if(ball.bounceOff(paddle))
  {
    ball.velocityY = -4;
    ball.velocityX = -6;
  }
}

