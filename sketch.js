var moving , fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
  moving.debug = true;
moving.shapeColor = "green";

  fixed = createSprite (200,200,50,50);
  fixed.debug = true;
  fixed.shapeColor = "green";
  fixed.velocityX=3;
}

function draw() {
  background(0);  

moving.x = World.mouseX;
moving.y = World.mouseY;

if (isTouching (moving,fixed)){
  fixed.shapeColor = "white";
  moving.shapeColor = "red";
}

else {
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
}

bounceOff (moving,fixed);
  drawSprites();
}


